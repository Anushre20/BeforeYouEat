import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface IngredientCardProps {
  name: string;
  risk: "safe" | "moderate" | "harmful";
  explanation: string;
}

export function IngredientCard({ name, risk, explanation }: IngredientCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getRiskStyle = () => {
  switch (risk) {
    case "safe":
      return { bg: "bg-green-50", text: "text-green-700", badge: "bg-green-500" };
    case "moderate":
      return { bg: "bg-orange-50", text: "text-orange-700", badge: "bg-orange-500" };
    case "harmful":
      return { bg: "bg-red-50", text: "text-red-700", badge: "bg-red-500" };
    default:
      return { bg: "bg-gray-50", text: "text-gray-700", badge: "bg-gray-500" }; // ✅ fallback
  }
};

  const style = getRiskStyle() || {
  bg: "bg-gray-50",
  text: "text-gray-700",
  badge: "bg-gray-500",
};

  return (
    <motion.div
      className={`${style.bg} rounded-xl p-4 cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
      layout
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
          <span className={`inline-block ${style.badge} text-white text-xs px-2 py-1 rounded-full mt-2`}>
            {risk.charAt(0).toUpperCase() + risk.slice(1)}
          </span>
        </div>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </motion.div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`${style.text} text-sm mt-3 leading-relaxed`}
          >
            {explanation}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
