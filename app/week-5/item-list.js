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
      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-xl font-medium transition ${
            sortBy === "name"
              ? "bg-indigo-600 text-white"
              : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-xl font-medium transition ${
            sortBy === "category"
              ? "bg-indigo-600 text-white"
              : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {/* Items */}
      <ul className="space-y-3">
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
