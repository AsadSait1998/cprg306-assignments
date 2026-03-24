import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="space-y-4 text-slate-200">
      <h2 className="text-2xl font-bold text-white">Student Information</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200/10 bg-slate-900/70 p-5 shadow-[0_12px_30px_rgba(2,8,23,0.22)]">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Name</p>
          <p className="mt-2 text-lg font-semibold text-white">Asad Arif</p>
        </div>
        <div className="rounded-2xl border border-slate-200/10 bg-slate-900/70 p-5 shadow-[0_12px_30px_rgba(2,8,23,0.22)]">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">GitHub</p>
          <Link
            href="https://github.com/AsadSait1998"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-lg font-semibold text-cyan-200 underline decoration-cyan-300/50 underline-offset-4 hover:text-cyan-100"
          >
            AsadSait1998
          </Link>
        </div>
      </div>
    </div>
  );
}
