import { useState } from "react";
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

export default function App() {
  const [selectedUserType, setSelectedUserType] = useState("Adult");
  const [isScanning, setIsScanning] = useState(false);
  const [showProductResult, setShowProductResult] = useState(false);
  const [showNaturalResult, setShowNaturalResult] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [currentProductResult, setCurrentProductResult] = useState<any>(null);
  const [showNoProductModal, setShowNoProductModal] = useState(false);
  const [currentNaturalResult, setCurrentNaturalResult] = useState<any>(null);
  const calculateHealthScore = (ingredients: any[]) => {
  let score = 100;

  ingredients.forEach((item) => {
    if (item.risk === "harmful") score -= 20;
    else if (item.risk === "moderate") score -= 10;
  });

  return Math.max(score, 0);
};

const generateWarnings = (ingredients: any[], userType: string) => {
  const warnings: string[] = [];

  ingredients.forEach((item) => {
    if (item.risk === "harmful") {
      warnings.push(`${item.name} may be harmful`);
    }

    // PERSONALIZATION LOGIC
    if (item.name.includes("sugar") && userType === "Diabetic") {
      warnings.push("High sugar is not suitable for diabetics");
    }

    if (item.name.includes("salt") && userType === "Adult") {
      warnings.push("High sodium may affect blood pressure");
    }

    if (item.name.includes("ins211") && userType === "Child") {
      warnings.push("Not recommended for children (hyperactivity risk)");
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
  const response = await fetch("http://localhost:5001/analyze", {
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
    const formattedIngredients = analyzed.map((item: any) => ({
  name: item.name,
  risk:
    item.risk === "high"
      ? "harmful"
      : item.risk === "medium"
      ? "moderate"
      : "safe",
  explanation: item.reason,
}));
const healthScore = calculateHealthScore(formattedIngredients);
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
      risk:
        item.risk === "high"
          ? "harmful"
          : item.risk === "medium"
          ? "moderate"
          : "safe",
      explanation: item.reason,
    }));

    const healthScore = calculateHealthScore(formattedIngredients);
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
    const response = await fetch("http://localhost:5001/natural-food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    if (!data.result) {
  setCurrentNaturalResult({
    name: query,
    nutrients: [],
    benefits: ["No data found"],
  });
} else {
  setCurrentNaturalResult(data.result);
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-blue-50/20">
      <div className="max-w-md mx-auto min-h-screen">
        <Header onInfoClick={() => setShowInfoModal(true)} />
        
        <UserTypeSelector
          selectedType={selectedUserType}
          onTypeChange={setSelectedUserType}
        />

        <ScanSection
          onScanIngredients={handleScanIngredients}
          onScanBarcode={handleScanBarcode}
        />

        <NaturalFoodMode onSearch={handleNaturalFoodSearch} />

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
    </div>
  );
}
