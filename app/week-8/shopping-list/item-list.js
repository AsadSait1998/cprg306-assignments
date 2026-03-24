"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div className="w-full max-w-md rounded-[1.4rem] border border-slate-200/10 bg-slate-900/75 p-6 shadow-[0_18px_40px_rgba(2,8,23,0.28)]">
      <h2 className="text-xl font-bold text-white mb-4">Shopping List</h2>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1.5 text-sm text-white hover:border-sky-300/40 hover:bg-slate-700"
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1.5 text-sm text-white hover:border-sky-300/40 hover:bg-slate-700"
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
