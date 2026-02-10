"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  /*
    NORMAL SORTING (name or category)
  */
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  /*
    GROUPING USING REDUCE
  */
  const groupedItems = itemsData.reduce((groups, item) => {
    const category = item.category;

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(item);

    return groups;
  }, {});

  return (
    <div className="space-y-6">
      {/* Buttons */}
      <div className="flex gap-3 justify-center flex-wrap">
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

        <button
          onClick={() => setSortBy("group")}
          className={`px-3 py-1.5 text-sm rounded-md transition ${
            sortBy === "group"
              ? "bg-indigo-600 text-white"
              : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
          }`}
        >
          Group by Category
        </button>
      </div>

      {/* NORMAL LIST (name/category) */}
      {sortBy !== "group" && (
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
      )}

      {/* GROUPED LIST */}
      {sortBy === "group" && (
        <div className="space-y-5">
          {Object.keys(groupedItems)
            .sort((a, b) => a.localeCompare(b)) // sort categories
            .map((category) => (
              <div key={category}>
                {/* Category header */}
                <h2 className="text-xs font-semibold text-gray-400 mb-2 capitalize tracking-wide">
                  {category}
                </h2>

                <ul className="space-y-2">
                  {groupedItems[category]
                    .sort((a, b) => a.name.localeCompare(b.name)) // sort items
                    .map((item) => (
                      <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                      />
                    ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
