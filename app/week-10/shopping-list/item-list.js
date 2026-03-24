"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div className="w-full max-w-md rounded-xl bg-blue-900 p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold text-white">Shopping List</h2>

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setSortBy("name")}
          className="rounded bg-black px-3 py-1 text-white hover:bg-blue-800"
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className="rounded bg-black px-3 py-1 text-white hover:bg-blue-800"
        >
          Sort by Category
        </button>
      </div>

      {sortedItems.length === 0 ? (
        <p className="text-gray-300">No items yet. Add your first item above.</p>
      ) : (
        <ul className="space-y-3">
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
          ))}
        </ul>
      )}
    </div>
  );
}
