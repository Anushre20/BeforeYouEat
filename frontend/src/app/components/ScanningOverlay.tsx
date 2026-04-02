import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
export function ScanningOverlay() {
  const messages = [
  "Reading label...",
  "Extracting ingredients...",
  "Analyzing health impact...",
  "Checking harmful additives...",
  "Generating health score...",
];
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  }, 1200); // change every 1.2 sec

  return () => clearInterval(interval);
}, []);
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
        <motion.p
  key={currentIndex}
  initial={{ opacity: 0, y: 5 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0 }}
  className="text-sm text-gray-600 mt-2"
>
  {messages[currentIndex]}
</motion.p>
      </motion.div>
    </motion.div>
  );
}
