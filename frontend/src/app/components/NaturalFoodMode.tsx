import { Apple, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface NaturalFoodModeProps {
  onSearch: (query: string) => void;
}

export function NaturalFoodMode({ onSearch }: NaturalFoodModeProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div id="natural-food" className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 mx-4 mb-4">
      <div className="flex items-center gap-2 mb-3">
        <Apple className="w-5 h-5 text-green-600" />
        <h3 className="font-semibold text-gray-900 dark:text-white">Check Natural Food</h3>
      </div>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try: Apple, Banana, Watermelon"
          className="w-full px-4 py-3 pr-12 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <motion.button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          <Search className="w-5 h-5" />
        </motion.button>
      </form>
    </div>
  );
}
