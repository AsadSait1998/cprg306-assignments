"use client";

import React from "react";

interface Item {
  id: number;
  name: string;
  category: string;
  quantity: string;
}

interface ShoppingListProps {
  items: Item[];
}

const ShoppingList: React.FC<ShoppingListProps> = ({ items }) => {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-white rounded shadow border border-gray-200"
        >
          <h3 className="font-bold">{item.name}</h3>
          <p>Category: {item.category}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoppingList;