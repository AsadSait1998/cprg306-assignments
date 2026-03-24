import Link from "next/link";

export default function Week7Page() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
        <h1 className="mb-4 text-4xl font-bold text-orange-400">Week 7</h1>
        <p className="mb-6 text-lg text-slate-200">
          This route is now configured correctly for deployment and no longer returns a 404.
        </p>
        <p className="mb-8 text-slate-300">
          If you want, we can still add your full Week 7 assignment content here next.
        </p>
        <Link href="/" className="text-orange-300 underline hover:text-orange-200">
          Back to Assignments
        </Link>
      </div>
    </main>
  );
}
