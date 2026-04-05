import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
console.log("🚀 Backend booting...");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ CORS (VERY IMPORTANT - place at top)
app.use(cors());

app.use(express.json());

app.post("/analyze", async (req, res) => {
  const { text } = req.body;

  // ✅ STEP 1: Clean + split properly
  const ingredientsList = text
    .toLowerCase()
    .replace(/ingredients:?/g, "")
    .split(/,|\(|\)|\./)
    .map(i => i.trim())
    .filter(i => i.length > 2 && !i.includes("%"));

  console.log("FINAL INGREDIENT LIST:", ingredientsList);

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0,
        messages: [
          {
            role: "system",
            content: "You are a strict JSON generator.",
          },
          {
            role: "user",
            content: `
Analyze ALL ingredients.

Return EXACT same number of items.
Do NOT skip anything.

Ingredients:
${ingredientsList.join(", ")}

Return JSON array only:
[
  { "name": "", "risk": "", "explanation": "" }
]
`,
          },
        ],
      }),
    });

    const data = await response.json();
    const raw = data.choices?.[0]?.message?.content || "[]";
    const cleaned = raw.replace(/```json|```/g, "").trim();

    let parsed = [];

    try {
      parsed = JSON.parse(cleaned);
    } catch {
      parsed = [];
    }

    // ✅ STEP 2: SAFETY FIX (IMPORTANT)
    if (parsed.length !== ingredientsList.length) {
      console.log("⚠️ AI mismatch → using fallback");

      parsed = ingredientsList.map((ing) => ({
        name: ing,
        risk: "moderate",
        explanation: "General processed ingredient",
      }));
    }

    res.json({ result: JSON.stringify(parsed) });

  } catch (error) {
    console.error(error);

    // fallback full list
    const fallback = ingredientsList.map((ing) => ({
      name: ing,
      risk: "moderate",
      explanation: "Fallback analysis",
    }));

    res.json({ result: JSON.stringify(fallback) });
  }
});

app.post("/natural-food", async (req, res) => {
    const { query } = req.body;
    
    console.log("🔥 API HIT:", req.body);
    console.log("Searching for:", query);

  try {
    // 🔍 STEP 1: Search food
    const searchRes = await fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&api_key=${process.env.USDA_API_KEY}`
    );

    const searchData = await searchRes.json();

console.log("Search Data:", searchData);
    const food = searchData.foods?.[0];

    if (!food) {
      return res.json({ result: null });
    }

    // 🔍 STEP 2: Get detailed nutrients
    const detailRes = await fetch(
      `https://api.nal.usda.gov/fdc/v1/food/${food.fdcId}?api_key=${process.env.USDA_API_KEY}`
    );

    const detailData = await detailRes.json();

    const nutrients = detailData.foodNutrients || [];

    // 🎯 Extract key nutrients
    const important = [
      "Energy",
      "Protein",
      "Carbohydrate",
      "Total lipid (fat)",
      "Fiber",
      "Sugars",
      "Calcium",
      "Iron",
      "Potassium",
    ];

    const formattedNutrients = nutrients
      .filter((n) =>
        important.some((imp) =>
          n.nutrient?.name?.toLowerCase().includes(imp.toLowerCase())
        )
      )
      .slice(0, 6)
      .map((n) => ({
        name: n.nutrient.name,
        amount: `${n.amount} ${n.nutrient.unitName}`,
        percentage: "-", // optional for now
      }));

    // 🤖 OPTIONAL: AI for benefits only
    let benefits = [];

    try {
      const aiRes = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: `Give 3 health benefits of ${query} in short bullet points`,
            },
          ],
        }),
      });

      const aiData = await aiRes.json();
      const text = aiData.choices?.[0]?.message?.content || "";

      benefits = text.split("\n").filter(Boolean);
    } catch {
      benefits = ["Healthy and nutritious food"];
    }

    

res.json({
  result: {
    name: query,
    nutrients: formattedNutrients,
    benefits,
  },
});

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch real data" });
  }
});

const server = http.createServer(app);

app.get("/food-news", async (req, res) => {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=food safety india OR FSSAI OR packaged food india&lang=en&country=in&max=10&apikey=${process.env.GNEWS_API_KEY}`
    );

    const data = await response.json();
    console.log("News API response:", data);
    const articles = (data.articles || []).map((item) => ({
      title: item.title,
      description: item.description,
      source: item.source.name,
      url: item.url,
      image: item.image,
    }));

    res.json({ articles });

  } catch (error) {
    console.error("News API error:", error);
    res.status(500).json({ articles: [] });
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});