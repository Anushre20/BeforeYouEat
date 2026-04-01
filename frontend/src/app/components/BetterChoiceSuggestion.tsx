import { TrendingUp } from "lucide-react";

interface BetterChoiceSuggestionProps {
  suggestion: string;
}

export function BetterChoiceSuggestion({ suggestion }: BetterChoiceSuggestionProps) {
  return (
    <div className="bg-green-50 rounded-xl p-5 border border-green-200">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-green-500 rounded-lg">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-green-900 mb-2">A Better Choice</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{suggestion}</p>
        </div>
      </div>
    </div>
  );
}
