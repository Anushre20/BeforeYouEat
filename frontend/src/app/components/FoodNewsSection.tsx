import { useEffect, useState } from "react";

export function FoodNewsSection() {
  const [news, setNews] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/food-news`)
      .then(res => res.json())
      .then(data => setNews(data.articles || []))
      .catch(() => setNews([]));
  }, []);

  return (
    <div className="px-4 mt-6">
      <h3 className="font-semibold text-gray-900 mb-3">
        📰 Food Awareness News
      </h3>

      {/* Horizontal Scroll */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {news.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(item)}
            className="min-w-[250px] bg-white border rounded-xl p-3 shadow cursor-pointer"
          >
            <p className="text-sm font-semibold line-clamp-2">
              {item.title}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              {item.source}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-xl w-80 space-y-3">
            <h2 className="font-semibold">{selected.title}</h2>

            <p className="text-sm text-gray-600">
              {selected.description || "No description available"}
            </p>

            <a
              href={selected.url}
              target="_blank"
              className="text-blue-500 text-sm"
            >
              Read full article →
            </a>

            <button
              onClick={() => setSelected(null)}
              className="w-full bg-green-500 text-white py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}