"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="space-y-6">
      {/* Sort Buttons */}
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1.5 text-sm rounded-md transition ${
            sortBy === "name"
              ? "bg-indigo-600 text-white"
              : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1.5 text-sm rounded-md transition ${
            sortBy === "category"
              ? "bg-indigo-600 text-white"
              : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {/* Items */}
      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
