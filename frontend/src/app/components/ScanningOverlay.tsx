import { motion } from "motion/react";
import { Loader2 } from "lucide-react";

export function ScanningOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-8 mx-4 text-center"
      >
        <Loader2 className="w-12 h-12 text-green-500 animate-spin mx-auto mb-4" />
        <p className="text-lg font-semibold text-gray-900">Analyzing...</p>
        <p className="text-sm text-gray-600 mt-2">Processing ingredients with AI</p>
      </motion.div>
    </motion.div>
  );
}
