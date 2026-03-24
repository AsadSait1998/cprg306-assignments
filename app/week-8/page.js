"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Week8Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <main className="m-8">
      <h1 className="mb-4 text-2xl font-bold">Week 8</h1>

      {!user && (
        <button onClick={handleSignIn} className="rounded bg-blue-700 px-4 py-2 text-white">
          Sign In with GitHub
        </button>
      )}

      {user && (
        <div className="space-y-3">
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <div className="space-x-4">
            <Link href="/week-8/shopping-list" className="text-blue-700 underline">
              Go to Shopping List
            </Link>
            <button onClick={handleSignOut} className="rounded bg-gray-700 px-4 py-2 text-white">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
