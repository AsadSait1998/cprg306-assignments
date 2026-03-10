"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div className="bg-blue-900 p-6 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold text-white mb-4">Shopping List</h2>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className="bg-black text-white px-3 py-1 rounded hover:bg-blue-800"
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className="bg-black text-white px-3 py-1 rounded hover:bg-blue-800"
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-3">
        {sortedItems.map((item, index) => (
          <Item
            key={index}
            {...item}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}