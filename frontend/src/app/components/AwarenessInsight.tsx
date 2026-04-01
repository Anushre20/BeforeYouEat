import { Lightbulb } from "lucide-react";

interface AwarenessInsightProps {
  insight: string;
}

export function AwarenessInsight({ insight }: AwarenessInsightProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5 border border-blue-100">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-blue-500 rounded-lg">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-2">Before You Eat…</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{insight}</p>
        </div>
      </div>
    </div>
  );
}
