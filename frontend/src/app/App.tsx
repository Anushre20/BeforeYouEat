import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { UserTypeSelector } from "./components/UserTypeSelector";
import { ScanSection } from "./components/ScanSection";
import { NaturalFoodMode } from "./components/NaturalFoodMode";
import { ScanningOverlay } from "./components/ScanningOverlay";
import { ResultBottomSheet } from "./components/ResultBottomSheet";
import { NaturalFoodResult } from "./components/NaturalFoodResult";
import { InfoModal } from "./components/InfoModal";
import { mockProductData, mockNaturalFoodData } from "./data/mockData";
import Tesseract from "tesseract.js";
import { ingredientData } from "./data/ingredientData";
import { naturalFoodBenefits } from "./data/naturalFoodBenefits";
import { FoodNewsSection } from "./components/FoodNewsSection";
import { TourGuide } from "./components/TourGuide";
export default function App() {
  const [selectedUserType, setSelectedUserType] = useState("Adult");
  const [isScanning, setIsScanning] = useState(false);
  const [showProductResult, setShowProductResult] = useState(false);
  const [showNaturalResult, setShowNaturalResult] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [currentProductResult, setCurrentProductResult] = useState<any>(null);
  const [showNoProductModal, setShowNoProductModal] = useState(false);
  const [currentNaturalResult, setCurrentNaturalResult] = useState<any>(null);
  const [theme, setTheme] = useState("light");
  const [showTour, setShowTour] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const API_URL = import.meta.env.VITE_API_URL;
  const calculateHealthScore = (ingredients: any[]) => {
  let score = 100;

  ingredients.forEach((item, index) => {
    const key = item.name.toLowerCase().trim();
    const data = ingredientData[key];

    // 🔹 Base weight
    let weight = data?.weight || 5;

    // 🔹 Risk multiplier
    let riskFactor = 1;
    if (item.risk === "harmful") riskFactor = 2;
    else if (item.risk === "moderate") riskFactor = 1.2;

    // 🔹 Position factor (TOP ingredients matter more)
    let positionFactor = 1;
    if (index < 3) positionFactor = 1.6;
    else if (index < 6) positionFactor = 1.3;

    // 🔹 Category-based penalty
    let categoryFactor = 1;
    const category = data?.category;

    if (category === "sugar") categoryFactor = 1.5;
    if (category === "fat") categoryFactor = 1.3;
    if (category === "preservative") categoryFactor = 1.4;
    if (category === "color") categoryFactor = 1.2;

    // 🔹 USER PERSONALIZATION 🔥
    if (selectedUserType === "Diabetic" && category === "sugar") {
      categoryFactor *= 1.8;
    }

    if (selectedUserType === "Child" && category === "additive") {
      categoryFactor *= 1.5;
    }

    if (selectedUserType === "Gym" && category === "fat") {
      categoryFactor *= 1.2;
    }

    if (selectedUserType === "Adult" && category === "sodium") {
      categoryFactor *= 1.3;
    }

    // 🔥 FINAL PENALTY
    const penalty = weight * riskFactor * positionFactor * categoryFactor;

    score -= penalty;
  });

  // 🔹 Clamp result
  if (score > 95) score = 95; // avoid fake 100
  if (score < 0) score = 0;

  // 🔥 EXTRA PENALTY: too many harmful ingredients
const harmfulCount = ingredients.filter(i => i.risk === "harmful").length;

if (harmfulCount >= 3) {
  score -= 10;
}
  return Math.round(score);
};

const generateScoreReasons = (ingredients: any[]) => {
  const reasons: string[] = [];

  const topIngredients = ingredients.slice(0, 3);

  // 🔥 CATEGORY COUNTS
  let sugar = 0, fat = 0, additives = 0, preservatives = 0;

  ingredients.forEach((item) => {
    const key = item.name.toLowerCase().trim();
    const data = ingredientData[key];

    if (!data) return;

    if (data.category === "sugar") sugar++;
    if (data.category === "fat") fat++;
    if (data.category === "additive") additives++;
    if (data.category === "preservative") preservatives++;
  });

  // 🔥 TOP INGREDIENT LOGIC
  topIngredients.forEach((item) => {
    const key = item.name.toLowerCase().trim();
    const data = ingredientData[key];

    if (!data) return;

    if (data.category === "sugar") {
      reasons.push("High sugar in main ingredients");
    }

    if (data.category === "fat") {
      reasons.push("High unhealthy fat content");
    }

    if (data.category === "carb") {
      reasons.push("Refined carbs dominate the product");
    }
  });

  // 🔥 OVERALL LOGIC
  if (preservatives >= 2) {
    reasons.push("Contains multiple preservatives");
  }

  if (additives >= 3) {
    reasons.push("Highly processed with additives");
  }

  if (sugar >= 2) {
    reasons.push("High overall sugar content");
  }

  if (fat >= 2) {
    reasons.push("High fat composition");
  }

  // REMOVE DUPLICATES
  return [...new Set(reasons)].slice(0, 3);
};

const generateWarnings = (ingredients: any[], userType: string) => {
  const warnings: string[] = [];

  ingredients.forEach((item) => {
    const key = item.name.toLowerCase().trim();
    const data = ingredientData[key];

    // ✅ General risk warning
    if (item.risk === "harmful") {
      warnings.push(`${item.name} may be harmful`);
    }

    // ✅ Personalized warning (NEW)
    if (data?.userImpact) {
      const userKey = userType.toLowerCase(); // child, diabetic, adult, gym
      const message = data.userImpact[userKey];

      if (message) {
        warnings.push(message);
      }
    }
  });

  return warnings;
};

const generateInsight = (ingredients: any[], userType: string) => {
  const harmfulCount = ingredients.filter(i => i.risk === "harmful").length;

  if (userType === "Child") {
    return "Children are more sensitive to additives. Prefer natural foods.";
  }

  if (userType === "Diabetic") {
    return "Monitor sugar and processed carbs carefully.";
  }

  if (userType === "Gym") {
    return "Focus on high-protein and low-processed foods.";
  }

  if (harmfulCount >= 2) {
    return "This product contains multiple harmful ingredients. Not recommended for regular consumption.";
  } else if (harmfulCount === 1) {
    return "Contains some harmful ingredients. Consume occasionally.";
  } else {
    return "Generally safe but monitor portion size.";
  }
};

const analyzeWithAI = async (text: string) => {
  const response = await fetch(`${API_URL}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  const data = await response.json();

  try {
    return JSON.parse(data.result);
  } catch {
    return [];
  }
};

  const handleScanIngredients = async (file: File | Blob) => {
  console.log("Received image:", file);

  setIsScanning(true);

  try {
    const result = await Tesseract.recognize(file, "eng", {
      logger: (m) => console.log(m),
    });

    const extractedText = result.data.text;
    let analyzed = [];

try {
  analyzed = await analyzeWithAI(extractedText);
} catch (error) {
  console.log("AI failed, using fallback");
}

if (!analyzed || analyzed.length === 0) {
  analyzed = analyzeIngredients(extractedText); // fallback
}
console.log("AI Result:", analyzed);
console.log("AI COUNT:", analyzed.length);
console.log("AI FULL:", analyzed);
    const formattedIngredients = analyzed.map((item: any) => ({
  name: item.name,
  risk: item.risk,
  explanation: item.explanation,
}));
const healthScore = calculateHealthScore(formattedIngredients);
const scoreReasons = generateScoreReasons(formattedIngredients);
const warnings = generateWarnings(formattedIngredients, selectedUserType);
const insight = generateInsight(formattedIngredients, selectedUserType);
    console.log("Analyzed Ingredients:", analyzed);
    console.log("Extracted Text:", extractedText);

    // TEMP: still using mock result
    setCurrentProductResult({
  productName: "Scanned Product",
  healthScore,
  ingredients: formattedIngredients,
  warnings,
  insight,
  betterChoice: `Consider reducing intake of ${formattedIngredients
  .filter((i: any) => i.risk !== "safe")
  .map((i: any) => i.name)
  .join(", ")}`,
  extractedIngredients: extractedText,
  scoreReasons,
});

    setShowProductResult(true);

  } catch (error) {
    console.error("OCR Error:", error);
    alert("Failed to read image");
  } finally {
    setIsScanning(false);
  }
};

  const handleScanBarcode = async (barcode: string) => {
  console.log("Barcode received:", barcode);

  setIsScanning(true);

  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
    );

    const data = await response.json();

    const product = data.product;
   if (!product) {
  setIsScanning(false);
  setShowNoProductModal(true);
  return;
}
    const ingredientsText = product?.ingredients_text || "";

    console.log("Product Data:", product);

    // OPTIONAL: run OCR-like analysis on ingredients
    let analyzed = analyzeIngredients(ingredientsText);

    const formattedIngredients = analyzed.map((item: any) => ({
  name: item.name,
  risk: item.risk,
  explanation: item.explanation,
}));

    const healthScore = calculateHealthScore(formattedIngredients);
    const scoreReasons = generateScoreReasons(formattedIngredients);
    const warnings = generateWarnings(formattedIngredients, selectedUserType);
    const insight = generateInsight(formattedIngredients, selectedUserType);

    setCurrentProductResult({
      productName: product?.product_name || "Scanned Product",
      healthScore,
      ingredients: formattedIngredients,
      warnings,
      insight,
      betterChoice: "Try products with fewer additives.",
      extractedIngredients: ingredientsText,
      scoreReasons,
    });

    setShowProductResult(true);

  } catch (error) {
    console.error("Barcode API Error:", error);
    alert("Failed to fetch product data");
  } finally {
    setIsScanning(false);
  }
};

  const handleNaturalFoodSearch = async (query: string) => {
  setIsScanning(true);

  try {
    const response = await fetch(`${API_URL}/natural-food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    const name = query.toLowerCase().trim();
const benefitsFromData = naturalFoodBenefits[name];

if (!data.result) {
  setCurrentNaturalResult({
    name: query,
    nutrients: [],
    benefits: benefitsFromData || ["No data found"],
  });
} else {
  setCurrentNaturalResult({
    ...data.result,
    benefits: benefitsFromData || data.result.benefits || ["No data available"],
  });
}

setShowNaturalResult(true);

  } catch (error) {
    console.error("Backend natural food error:", error);

    // fallback
    setCurrentNaturalResult({
  name: query,
  nutrients: [],
  benefits: ["Could not fetch real data"],
});

    setShowNaturalResult(true);

  } finally {
    setIsScanning(false);
  }
};

  const analyzeIngredients = (text: string) => {
  const foundIngredients: any[] = [];
  const lowerText = text.toLowerCase();

  Object.keys(ingredientData).forEach((key) => {
    const regex = new RegExp(`\\b${key}\\b`, "i");
if (regex.test(lowerText)){
      foundIngredients.push({
        name: key,
        risk: ingredientData[key].risk,
        explanation: ingredientData[key].reason,
      });
    }
  });

  return foundIngredients;
};

const steps = [
  {
    selector: "#user-type",
    text: "Select your profile for personalized health results.",
  },
  {
    selector: "#scan-ingredients",
    text: "Scan ingredients to analyze food safety.",
  },
  {
    selector: "#scan-barcode",
    text: "Scan barcode for instant product insights.",
  },
  {
    selector: "#natural-food",
    text: "Check nutrients and benefits of natural foods.",
  },
  {
    selector: "#news-section",
    text: "Stay updated with food safety news.",
  },
];

useEffect(() => {
  const startTour = () => {
    setStepIndex(0);
    setShowTour(true);
  };

  window.addEventListener("startTour", startTour);

  return () => window.removeEventListener("startTour", startTour);
}, []);

  return (
    <div className={`${theme === "dark" ? "dark" : ""} min-h-screen 
bg-gradient-to-br 
from-white via-green-50/30 to-blue-50/20 
dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}>
      <div className="max-w-md mx-auto min-h-screen">
        <Header 
  onInfoClick={() => setShowInfoModal(true)} 
  theme={theme}
  setTheme={setTheme}
/>
        
        <UserTypeSelector
          selectedType={selectedUserType}
          onTypeChange={setSelectedUserType}
        />

        <ScanSection
          onScanIngredients={handleScanIngredients}
          onScanBarcode={handleScanBarcode}
        />

        <NaturalFoodMode onSearch={handleNaturalFoodSearch} />

        <FoodNewsSection userType={selectedUserType} />

<footer className="text-center py-6 px-4">
  <p className="text-xs text-gray-500">
    AI-based analysis. For awareness purposes only.
  </p>
</footer>
      </div>

      {isScanning && <ScanningOverlay />}

      <ResultBottomSheet
        isOpen={showProductResult}
        onClose={() => setShowProductResult(false)}
        result={currentProductResult}
      />

      <NaturalFoodResult
        isOpen={showNaturalResult}
        onClose={() => setShowNaturalResult(false)}
        result={currentNaturalResult}
      />

      <InfoModal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
      />

      {showNoProductModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-6 w-80 shadow-xl text-center space-y-4">
      
      <h2 className="text-lg font-semibold text-gray-900">
        No Data Available
      </h2>

      <p className="text-sm text-gray-600">
        No data available for this product.
        <br />
        Try scanning a different product or scan the ingredient list instead.
      </p>

      <button
        onClick={() => setShowNoProductModal(false)}
        className="w-full bg-green-500 text-white py-3 rounded-xl"
      >
        Back to Home
      </button>
    </div>
  </div>
)}

<TourGuide
  isOpen={showTour}
  onClose={() => setShowTour(false)}
  steps={steps}
  stepIndex={stepIndex}
  setStepIndex={setStepIndex}
/>
    </div>
  );
}
