import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { HealthScoreCircle } from "./HealthScoreCircle";
import { IngredientCard } from "./IngredientCard";
import { HealthWarnings } from "./HealthWarnings";
import { AwarenessInsight } from "./AwarenessInsight";
import { BetterChoiceSuggestion } from "./BetterChoiceSuggestion";

interface Ingredient {
  name: string;
  risk: "safe" | "moderate" | "harmful";
  explanation: string;
}

interface ProductResult {
  productName: string;
  healthScore: number;
  ingredients: Ingredient[];
  warnings: string[];
  insight: string;
  betterChoice: string;
}

interface ResultBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  result: ProductResult | null;
}

export function ResultBottomSheet({ isOpen, onClose, result }: ResultBottomSheetProps) {
  if (!result) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl z-50 max-h-[85vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-lg text-gray-900">{result.productName}</h2>
                <p className="text-xs text-gray-500">AI Analysis</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1">
              <div className="px-6 pb-6">
                {/* Health Score */}
                <HealthScoreCircle score={result.healthScore} />

                {/* Warnings */}
                {result.warnings.length > 0 && (
                  <div className="mb-4">
                    <HealthWarnings warnings={result.warnings} />
                  </div>
                )}

                {/* Ingredient Breakdown */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">🧠 Ingredient Breakdown</h3>
                  <div className="space-y-2">
                    {result.ingredients.map((ingredient, index) => (
                      <IngredientCard key={index} {...ingredient} />
                    ))}
                  </div>
                </div>

                {/* Awareness Insight */}
                <div className="mb-4">
                  <AwarenessInsight insight={result.insight} />
                </div>

                {/* Better Choice */}
                <div className="mb-4">
                  <BetterChoiceSuggestion suggestion={result.betterChoice} />
                </div>

                {/* Footer */}
                <p className="text-xs text-center text-gray-500 mt-6">
                  AI-based analysis. For awareness purposes only.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
