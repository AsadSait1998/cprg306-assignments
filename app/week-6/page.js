"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";

export default function Week6Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <main className="min-h-screen px-6 py-12 md:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <div className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur">
          <h1 className="mb-6 text-center text-4xl font-bold text-blue-300">
            Week 6 Shopping List
          </h1>

          <div className="mb-6 rounded-2xl bg-slate-950/55 p-5 shadow-lg">
            <NewItem onAddItem={handleAddItem} />
          </div>

          <div className="rounded-2xl bg-slate-950/55 p-5 shadow-lg">
            <ItemList items={items} />
          </div>
        </div>
      </div>
    </main>
  );
}
