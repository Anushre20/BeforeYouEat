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

export default function App() {
  const [selectedUserType, setSelectedUserType] = useState("Adult");
  const [isScanning, setIsScanning] = useState(false);
  const [showProductResult, setShowProductResult] = useState(false);
  const [showNaturalResult, setShowNaturalResult] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [currentProductResult, setCurrentProductResult] = useState<any>(null);
  const [currentNaturalResult, setCurrentNaturalResult] = useState<any>(null);

  const handleScanIngredients = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setCurrentProductResult(mockProductData["instant-noodles"]);
      setShowProductResult(true);
    }, 2000);
  };

  const handleScanBarcode = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setCurrentProductResult(mockProductData["barcode-scan"]);
      setShowProductResult(true);
    }, 2000);
  };

  const handleNaturalFoodSearch = (query: string) => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      const searchKey = query.toLowerCase();
      const result = mockNaturalFoodData[searchKey] || {
        name: query.charAt(0).toUpperCase() + query.slice(1),
        nutrients: ["Vitamins", "Minerals", "Fiber", "Antioxidants"],
        benefits: [
          "Natural source of nutrients",
          "Supports overall health",
          "Low in processed ingredients",
          "Part of a balanced diet",
        ],
      };
      setCurrentNaturalResult(result);
      setShowNaturalResult(true);
    }, 2000);
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
    </div>
  );
}
