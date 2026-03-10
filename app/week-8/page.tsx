"use client";

import { useUserAuth, AuthProvider } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Import your existing shopping list components and data
import ShoppingList from "../week-7/components/ShoppingList";
import itemsData from "../week-7/data/items.json";

export default function ShoppingListPage() {
  const { user, login } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) login("Guest"); // simple default login for demo
  }, [user, login]);

  return (
    <AuthProvider>
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">Week 8 Shopping List</h1>
        <ShoppingList items={itemsData} />
      </div>
    </AuthProvider>
  );
}