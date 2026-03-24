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
    <main className="min-h-screen px-6 py-12 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.24em] text-orange-200">Week 7</p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">Shopping List with Meal Ideas</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            A calmer dashboard layout makes the list and meal suggestions feel more connected while
            keeping the interaction simple.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur">
          <div className="flex flex-col items-start justify-center gap-10 md:flex-row">
            <div className="flex flex-col gap-6">
              <NewItem onAddItem={handleAddItem} />
              <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>

            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}
