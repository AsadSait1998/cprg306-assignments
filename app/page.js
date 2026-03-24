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
        <div className="mb-8 rounded-[2rem] border border-white/10 bg-[var(--panel)] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur md:p-10">
          <h1 className="text-4xl font-bold text-cyan-300 md:text-5xl">
            CPRG 306: Web Development 2 - Assignments
          </h1>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {weeks.map((week) => (
            <Link
              key={week.href}
              href={week.href}
              className="rounded-[1.3rem] border border-white/10 bg-[var(--panel-strong)] p-5 shadow-[0_12px_35px_rgba(0,0,0,0.18)] hover:border-white/20"
            >
              <h2 className={`text-xl font-semibold ${week.accent}`}>{week.label}</h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
