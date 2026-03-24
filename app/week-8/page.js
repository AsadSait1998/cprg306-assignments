"use client";

import Link from "next/link";
import { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function Week8Page() {
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
    <main className="min-h-screen px-6 py-12 md:px-10">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-[var(--panel)] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur md:p-10">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Week 8</h1>

        {!user && (
          <div className="mt-8 rounded-[1.5rem] border border-cyan-300/15 bg-slate-950/55 p-6">
            <div className="mt-5 space-y-3">
              <button
                onClick={handleSignIn}
                className="rounded-full bg-cyan-400 px-5 py-2.5 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20"
              >
                Sign In with GitHub
              </button>
              {authError && (
                <p className="max-w-xl rounded border border-red-700 bg-red-950 px-3 py-2 text-sm text-red-200">
                  {authError}
                </p>
              )}
            </div>
          </div>
        )}

        {user && (
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-6">
            <p className="text-lg text-slate-200">
              Welcome, {user.displayName} ({user.email})
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link
                href="/week-8/shopping-list"
                className="rounded-full bg-white px-5 py-2.5 font-semibold text-slate-950"
              >
                Go to Shopping List
              </Link>
              <button
                onClick={handleSignOut}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-white"
              >
                Sign Out
              </button>
            </div>
            {authError && (
              <p className="mt-4 max-w-xl rounded border border-red-700 bg-red-950 px-3 py-2 text-sm text-red-200">
                {authError}
              </p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
