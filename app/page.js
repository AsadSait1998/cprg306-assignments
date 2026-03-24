import Link from "next/link";

export default function Page() {
  const weeks = [
    { href: "/week-2", label: "Week 2", accent: "text-amber-200" },
    { href: "/week-3", label: "Week 3", accent: "text-sky-200" },
    { href: "/week-4", label: "Week 4", accent: "text-emerald-200" },
    { href: "/week-5", label: "Week 5", accent: "text-fuchsia-200" },
    { href: "/week-6", label: "Week 6", accent: "text-violet-200" },
    { href: "/week-7", label: "Week 7", accent: "text-orange-200" },
    { href: "/week-8", label: "Week 8", accent: "text-cyan-200" },
    { href: "/week-10", label: "Week 10", accent: "text-teal-200" },
  ];

  return (
    <main className="min-h-screen px-6 py-10 md:px-10 lg:px-14">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-[2rem] border border-sky-200/10 bg-[var(--panel)] p-8 shadow-[0_24px_70px_rgba(2,8,23,0.34)] backdrop-blur md:p-10">
          <h1 className="text-4xl font-bold text-cyan-300 md:text-5xl">
            CPRG 306: Web Development 2 - Assignments
          </h1>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {weeks.map((week) => (
            <Link
              key={week.href}
              href={week.href}
              className="rounded-[1.35rem] border border-slate-200/10 bg-[var(--panel-strong)] p-5 shadow-[0_16px_40px_rgba(2,8,23,0.28)] hover:border-sky-200/25 hover:bg-slate-800/90"
            >
              <h2 className={`text-xl font-semibold ${week.accent}`}>{week.label}</h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
