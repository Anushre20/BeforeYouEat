import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles } from "lucide-react";

interface NaturalFoodData {
  name: string;
  nutrients: string[];
  benefits: string[];
}

interface NaturalFoodResultProps {
  isOpen: boolean;
  onClose: () => void;
  result: NaturalFoodData | null;
}

export function NaturalFoodResult({ isOpen, onClose, result }: NaturalFoodResultProps) {
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
            <div className="sticky top-0 bg-gradient-to-br from-green-50 to-emerald-50 px-6 py-6 flex items-center justify-between border-b border-green-100">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-green-600" />
                  <h2 className="font-bold text-xl text-gray-900">{result.name}</h2>
                </div>
                <p className="text-sm text-green-700 mt-1">Natural & Healthy</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/50 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1">
              <div className="px-6 py-6 space-y-6">
                {/* Nutrients */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-lg">🌟</span> Key Nutrients
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {(result.nutrients || []).map((nutrient, index) => (
                      <div
                        key={index}
                        className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-sm text-gray-700"
                      >
                        {nutrient}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-lg">💚</span> Health Benefits
                  </h3>
                  <div className="space-y-2">
                    {(result.benefits || []).map((benefit, index) => (
                      <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-start gap-3"
                      >
                        <span className="text-green-500 font-bold">✓</span>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
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
