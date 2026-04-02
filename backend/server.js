import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

// ✅ CORS (VERY IMPORTANT - place at top)
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// ✅ HANDLE PREFLIGHT REQUESTS MANUALLY
app.options("/analyze", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.sendStatus(200);
});

app.use(express.json());

app.post("/analyze", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a food safety expert." },
          {
            role: "user",
            content: `
Extract ingredients and analyze:

${text}

Return ONLY JSON array:
[
  {
    "name": "",
    "risk": "safe | moderate | harmful",
    "explanation": ""
  }
]
`,
          },
        ],
      }),
    });

    const data = await response.json();

    const raw = data.choices?.[0]?.message?.content || "[]";
    const cleaned = raw.replace(/```json|```/g, "").trim();

    // ✅ VERY IMPORTANT: send CORS header in response also
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");

    res.json({ result: cleaned });

  } catch (error) {
    console.error(error);

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");

    res.status(500).json({ error: "AI failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});