"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { addItem, getItems } from "../_services/shopping-list-service";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";

function cleanIngredientName(name) {
  return name.split(",")[0].trim().replace(/[^\x20-\x7E]/g, "").trim();
}

export default function ShoppingListPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [authError, setAuthError] = useState("");
  const [dataError, setDataError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadItems() {
      if (!user?.uid) {
        setItems([]);
        return;
      }

      setIsLoading(true);
      setDataError("");

      try {
        const userItems = await getItems(user.uid);
        setItems(userItems);
      } catch (error) {
        console.error("Failed to load items:", error);
        setDataError(error?.message || "Failed to load shopping list items.");
      } finally {
        setIsLoading(false);
      }
    }

    loadItems();
  }, [user]);

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

  const handleAddItem = async (item) => {
    if (!user?.uid) {
      return;
    }

    setDataError("");

    try {
      const id = await addItem(user.uid, item);
      setItems((currentItems) => [...currentItems, { id, ...item }]);
    } catch (error) {
      console.error("Failed to add item:", error);
      setDataError(error?.message || "Failed to add item.");
    }
  };

  const handleItemSelect = (item) => {
    setSelectedItemName(cleanIngredientName(item.name));
  };

  return (
    <main className="min-h-screen px-6 py-12 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-[var(--panel)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.24em] text-teal-200">Week 10</p>
            <h1 className="text-3xl font-bold text-white">Shopping List</h1>
            <p className="mt-2 max-w-2xl text-slate-300">
              Your list is now stored in Cloud Firestore and loaded per signed-in user.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/week-10" className="text-cyan-300 underline hover:text-cyan-200">
              Back to Week 10
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
              GitHub authentication is required before accessing the Week 10 assignment.
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

            {dataError && (
              <p className="rounded border border-red-700 bg-red-950 px-3 py-2 text-sm text-red-200">
                {dataError}
              </p>
            )}

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
              <div className="space-y-6">
                <div className="rounded-2xl bg-slate-900 p-5 shadow-xl">
                  <NewItem onAddItem={handleAddItem} />
                </div>
                {isLoading ? (
                  <div className="rounded-2xl bg-slate-900 p-5 text-slate-300 shadow-xl">
                    Loading items...
                  </div>
                ) : (
                  <ItemList items={items} onItemSelect={handleItemSelect} />
                )}
              </div>

              <MealIdeas ingredient={selectedItemName} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
