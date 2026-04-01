import { motion } from "motion/react";

interface HealthScoreCircleProps {
  score: number;
}

export function HealthScoreCircle({ score }: HealthScoreCircleProps) {
  const getColor = () => {
    if (score >= 70) return { main: "#22C55E", light: "#86EFAC" };
    if (score >= 40) return { main: "#F59E0B", light: "#FCD34D" };
    return { main: "#EF4444", light: "#FCA5A5" };
  };

  const getMessage = () => {
    if (score >= 70) return "This product is a healthy choice!";
    if (score >= 40) return "This product is not ideal for frequent consumption.";
    return "Consider avoiding this product for better health.";
  };

  const colors = getColor();
  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center py-6">
      <div className="relative w-40 h-40">
        <svg className="transform -rotate-90 w-40 h-40">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#E5E7EB"
            strokeWidth="12"
            fill="none"
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            stroke={colors.main}
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold"
            style={{ color: colors.main }}
          >
            {score}
          </motion.span>
          <span className="text-sm text-gray-500">/ 100</span>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center text-sm text-gray-700 mt-4 px-6"
      >
        {getMessage()}
      </motion.p>
    </div>
  );
}
