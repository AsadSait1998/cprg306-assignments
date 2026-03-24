"use client";

import { useState } from "react";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import itemsData from "./items.json";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";

function cleanIngredientName(name) {
  return name.split(",")[0].trim().replace(/[^\x20-\x7E]/g, "").trim();
}

export default function ShoppingListPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [authError, setAuthError] = useState("");

  const handleSignIn = async () => {
    try {
      setAuthError("");
      await gitHubSignIn();
    } catch (error) {
      console.error("Sign in failed:", error);
      setAuthError(error?.message || "GitHub sign-in failed.");
    }
  };

  const handleSignOut = async () => {
    try {
      setAuthError("");
      await firebaseSignOut();
    } catch (error) {
      console.error("Sign out failed:", error);
      setAuthError(error?.message || "Sign out failed.");
    }
  };

  const handleAddItem = (item) => {
    setItems((currentItems) => [...currentItems, item]);
  };

  const handleItemSelect = (item) => {
    setSelectedItemName(cleanIngredientName(item.name));
  };

  return (
    <main className="min-h-screen px-6 py-12 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-[var(--panel)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.24em] text-cyan-200">Week 8</p>
            <h1 className="text-3xl font-bold text-white">Shopping List</h1>
            <p className="mt-2 max-w-2xl text-slate-300">
              Add items, sort the list, and click an ingredient to load meal ideas.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/week-8" className="text-cyan-300 underline hover:text-cyan-200">
              Back to Week 8
            </Link>
            {user && (
              <button onClick={handleSignOut} className="rounded bg-gray-700 px-4 py-2 text-white">
                Sign Out
              </button>
            )}
          </div>
        </div>

        {!user && (
          <div className="rounded-[1.7rem] border border-white/10 bg-[var(--panel)] p-8 shadow-xl backdrop-blur">
            <h2 className="mb-3 text-2xl font-semibold">Sign in to view your shopping list</h2>
            <p className="mb-5 text-slate-300">
              GitHub authentication is required before accessing the Week 8 assignment.
            </p>
            <button onClick={handleSignIn} className="rounded bg-blue-700 px-4 py-2 text-white">
              Sign In with GitHub
            </button>
            {authError && (
              <p className="mt-4 rounded border border-red-700 bg-red-950 px-3 py-2 text-sm text-red-200">
                {authError}
              </p>
            )}
          </div>
        )}

        {user && (
          <div className="space-y-6">
            <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              Signed in as {user.displayName || "GitHub User"} ({user.email})
            </p>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
              <div className="space-y-6">
                <div className="rounded-2xl bg-slate-900 p-5 shadow-xl">
                  <NewItem onAddItem={handleAddItem} />
                </div>
                <ItemList items={items} onItemSelect={handleItemSelect} />
              </div>

              <MealIdeas ingredient={selectedItemName} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
