import { AlertTriangle, Flame, Baby } from "lucide-react";

interface HealthWarning {
  icon: React.ReactNode;
  label: string;
}

interface HealthWarningsProps {
  warnings: string[];
}

export function HealthWarnings({ warnings }: HealthWarningsProps) {
  const getWarningIcon = (warning: string) => {
    if (warning.toLowerCase().includes("sodium")) {
      return <AlertTriangle className="w-5 h-5 text-orange-600" />;
    }
    if (warning.toLowerCase().includes("processed")) {
      return <Flame className="w-5 h-5 text-orange-600" />;
    }
    if (warning.toLowerCase().includes("child")) {
      return <Baby className="w-5 h-5 text-orange-600" />;
    }
    return <AlertTriangle className="w-5 h-5 text-orange-600" />;
  };

  if (warnings.length === 0) return null;

  return (
    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
      <h3 className="font-semibold text-gray-900 mb-3 text-sm">⚠️ Health Warnings</h3>
      <div className="space-y-2">
        {warnings.map((warning, index) => (
          <div key={index} className="flex items-center gap-3">
            {getWarningIcon(warning)}
            <span className="text-sm text-gray-700">{warning}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
