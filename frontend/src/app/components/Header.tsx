import { Info } from "lucide-react";

interface HeaderProps {
  onInfoClick: () => void;
  theme: string;
  setTheme: (theme: string) => void;
}

export function Header({ onInfoClick, theme, setTheme }: HeaderProps){
  return (
    <header className="py-6 px-4">
  <div className="flex items-center justify-between">

    {/* LEFT EMPTY (for spacing) */}
   {/* LEFT: SHOW ME BUTTON */}
<div>
  <button
    onClick={() => window.dispatchEvent(new Event("startTour"))}
    className="px-3 py-1 rounded-lg bg-green-100 text-green-700 text-sm"
  >
    Show Me
  </button>
</div>

    {/* CENTER TITLE */}
    <div className="flex items-center gap-2">
      <h1 className="text-2xl font-bold text-gray-900">
        BeforeYouEat
      </h1>
      <button
        onClick={onInfoClick}
        className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <Info className="w-5 h-5 text-gray-500 dark:text-gray-300" />
      </button>
    </div>

    {/* RIGHT CONTROLS */}
    <div className="flex items-center gap-2">
   
      {/* DARK MODE BUTTON */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-sm"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

    </div>
  </div>

  <p className="text-sm text-gray-600 mt-2 italic text-center">
    Know what you eat. Before you eat.
  </p>
</header>
  );
}
