import { Info } from "lucide-react";

interface HeaderProps {
  onInfoClick: () => void;
}

export function Header({ onInfoClick }: HeaderProps) {
  return (
    <header className="text-center py-6 px-4">
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-2xl font-bold text-gray-900">BeforeYouEat</h1>
        <button
          onClick={onInfoClick}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="App information"
        >
          <Info className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <p className="text-sm text-gray-600 mt-2 italic">
        Know what you eat. Before you eat.
      </p>
    </header>
  );
}
