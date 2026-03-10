"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Import your existing shopping list components and data
import ShoppingList from "../week-7/components/ShoppingList"; // adjust path if needed
import itemsData from "../week-7/data/items.json"; // adjust path if needed

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  // Redirect to landing page if not logged in
  useEffect(() => {
    if (!user) {
      router.push("/week-8");
    }
  }, [user, router]);

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
      router.push("/week-8");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!user) {
    // Optional: render nothing while redirecting
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Your Shopping List</h1>

      <div className="mb-6 flex flex-col items-center gap-2">
        <p className="text-lg">
          Logged in as {user.displayName} ({user.email})
        </p>
        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded font-semibold transition"
        >
          Logout
        </button>
      </div>

      {/* Render your Week 7 shopping list */}
      <div className="w-full max-w-2xl">
        <ShoppingList initialItems={itemsData} />
      </div>
    </div>
  );
}