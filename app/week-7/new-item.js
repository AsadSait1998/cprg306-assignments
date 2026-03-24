"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-blue-400">Add New Item</h2>

      <input
        required
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded border border-zinc-700 bg-zinc-800 p-2 text-white"
      />

      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-full rounded border border-zinc-700 bg-zinc-800 p-2 text-white"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full rounded border border-zinc-700 bg-zinc-800 p-2 text-white"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen">Frozen</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
      </select>

      <button className="rounded bg-blue-500 px-4 py-2 font-semibold hover:bg-blue-600">
        Add Item
      </button>
    </form>
  );
}
