"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };
    console.log(item);

    alert(
      `Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-yellow-100
        border-4 border-yellow-500
        shadow-2xl
        rounded-2xl
        p-8
        max-w-md
        space-y-5
      "
    >
      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-purple-700">
        Add New Item
      </h2>

      {/* Name */}
      <div className="flex flex-col">
        <label className="font-bold text-lg text-gray-800 mb-1">
          Item Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
            border-2 border-blue-500
            bg-white
            p-3
            rounded-lg
            text-black
            font-semibold
            focus:ring-4 focus:ring-blue-400
          "
        />
      </div>

      {/* Quantity */}
      <div className="flex flex-col">
        <label className="font-bold text-lg text-gray-800 mb-1">
          Quantity
        </label>
        <input
          type="number"
          min="1"
          max="99"
          required
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="
            border-2 border-green-500
            bg-white
            p-3
            rounded-lg
            text-black
            font-semibold
            focus:ring-4 focus:ring-green-400
          "
        />
      </div>

      {/* Category */}
      <div className="flex flex-col">
        <label className="font-bold text-lg text-gray-800 mb-1">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
            border-2 border-purple-500
            bg-white
            p-3
            rounded-lg
            text-black
            font-semibold
            focus:ring-4 focus:ring-purple-400
          "
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="
          w-full
          bg-red-600
          hover:bg-red-700
          text-white
          font-bold
          py-3
          rounded-lg
          text-lg
          shadow-lg
          transition
        "
      >
        ➕ Add Item
      </button>
    </form>
  );
}