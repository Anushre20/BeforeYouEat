import { motion } from "motion/react";

interface UserTypeSelectorProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

const userTypes = ["Adult", "Child", "Diabetic", "Fitness"];

export function UserTypeSelector({ selectedType, onTypeChange }: UserTypeSelectorProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 mx-4 mb-4">
      <h3 className="text-sm font-medium text-gray-700 mb-3">I am a/an:</h3>
      <div className="flex flex-wrap gap-2">
        {userTypes.map((type) => (
          <motion.button
            key={type}
            onClick={() => onTypeChange(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedType === type
                ? "bg-green-500 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {type}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
