"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];

  sortedItems.sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div>
      <div className="mb-4 flex gap-3">
        <button
          onClick={() => setSortBy("name")}
          className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-2">
        {sortedItems.map((item, index) => (
          <Item key={item.name + index} item={item} />
        ))}
      </ul>
    </div>
  );
}