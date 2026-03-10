"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  // redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push("/week-8");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    await firebaseSignOut();
    router.push("/week-8");
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <p className="mb-4">
        Welcome, {user.displayName}
      </p>

      <button
        onClick={handleLogout}
        className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 mb-6"
      >
        Logout
      </button>

      <p>Your shopping list will appear here.</p>
    </main>
  );
}