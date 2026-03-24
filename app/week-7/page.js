"use client";

import { useState } from "react";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleItemSelect(item) {
    let cleanedName = item.name.split(",")[0];
    cleanedName = cleanedName
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "")
      .trim();

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Shopping List with Meal Ideas
      </h1>

      <div className="flex flex-col items-start justify-center gap-10 md:flex-row">
        <div className="flex flex-col gap-6">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
