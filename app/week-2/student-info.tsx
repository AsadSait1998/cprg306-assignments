import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="space-y-4 text-slate-200">
      <h2 className="text-2xl font-bold text-white">Student Information</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Name</p>
          <p className="mt-2 text-lg font-semibold text-white">Asad Arif</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">GitHub</p>
          <Link
            href="https://github.com/AsadSait1998"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-lg font-semibold text-cyan-200 underline decoration-cyan-300/50 underline-offset-4"
          >
            AsadSait1998
          </Link>
        </div>
      </div>
      <p className="text-sm leading-7 text-slate-400">
        
      </p>
    </div>
  );
}
