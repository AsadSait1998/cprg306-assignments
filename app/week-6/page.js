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
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">
        Shopping List
      </h1>

      <div className="bg-zinc-900 p-6 rounded-xl shadow-lg mb-8">
        <NewItem onAddItem={handleAddItem} />
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
        <ItemList items={items} />
      </div>
    </main>
  );
}