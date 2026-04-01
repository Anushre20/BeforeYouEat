import { Camera, Scan } from "lucide-react";
import { motion } from "motion/react";

interface ScanSectionProps {
  onScanIngredients: () => void;
  onScanBarcode: () => void;
}

export function ScanSection({ onScanIngredients, onScanBarcode }: ScanSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mx-4 mb-4">
      <div className="space-y-3">
        <motion.button
          onClick={onScanIngredients}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Camera className="w-6 h-6" />
          <span className="font-semibold">Scan ingredient list</span>
        </motion.button>

        <motion.button
          onClick={onScanBarcode}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Scan className="w-6 h-6" />
          <span className="font-semibold">Scan product barcode</span>
        </motion.button>
      </div>
    </div>
  );
}
