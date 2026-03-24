"use client";

import Link from "next/link";
import { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function Week10Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
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

  return (
    <main className="m-8">
      <h1 className="mb-4 text-2xl font-bold">Week 10</h1>

      {!user && (
        <div className="space-y-3">
          <button onClick={handleSignIn} className="rounded bg-blue-700 px-4 py-2 text-white">
            Sign In with GitHub
          </button>
          {authError && (
            <p className="max-w-xl rounded border border-red-700 bg-red-950 px-3 py-2 text-sm text-red-200">
              {authError}
            </p>
          )}
        </div>
      )}

      {user && (
        <div className="space-y-3">
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <div className="space-x-4">
            <Link href="/week-10/shopping-list" className="text-blue-700 underline">
              Go to Shopping List
            </Link>
            <button onClick={handleSignOut} className="rounded bg-gray-700 px-4 py-2 text-white">
              Sign Out
            </button>
          </div>
          {authError && (
            <p className="max-w-xl rounded border border-red-700 bg-red-950 px-3 py-2 text-sm text-red-200">
              {authError}
            </p>
          )}
        </div>
      )}
    </main>
  );
}
