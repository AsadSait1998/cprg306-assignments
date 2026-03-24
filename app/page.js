import Link from "next/link";

export default function Page() {
  const weeks = [
    { href: "/week-2", label: "Week 2", tone: "from-amber-300/20 to-orange-300/10", accent: "text-amber-200", note: "Starter shopping list and student info." },
    { href: "/week-3", label: "Week 3", tone: "from-sky-300/20 to-cyan-300/10", accent: "text-sky-200", note: "Static shopping list with cleaner presentation." },
    { href: "/week-4", label: "Week 4", tone: "from-emerald-300/20 to-lime-300/10", accent: "text-emerald-200", note: "Interactive new-item form and validation." },
    { href: "/week-5", label: "Week 5", tone: "from-fuchsia-300/20 to-pink-300/10", accent: "text-fuchsia-200", note: "Sorting and grouping improvements." },
    { href: "/week-6", label: "Week 6", tone: "from-violet-300/20 to-indigo-300/10", accent: "text-violet-200", note: "Stateful shopping list with item creation." },
    { href: "/week-7", label: "Week 7", tone: "from-orange-300/20 to-rose-300/10", accent: "text-orange-200", note: "Meal ideas paired with your shopping list." },
    { href: "/week-8", label: "Week 8", tone: "from-cyan-300/20 to-blue-300/10", accent: "text-cyan-200", note: "Authentication added with GitHub sign-in." },
    { href: "/week-10", label: "Week 10", tone: "from-teal-300/20 to-cyan-300/10", accent: "text-teal-200", note: "Cloud Firestore-backed shopping list." },
  ];

  return (
    <main className="min-h-screen px-6 py-10 md:px-10 lg:px-14">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8 rounded-[2rem] border border-white/10 bg-[var(--panel)] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur md:p-10">
          <p className="mb-3 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-1 text-sm tracking-[0.2em] text-cyan-100 uppercase">
            CPRG 306 Portfolio
          </p>
          <h1 className="max-w-3xl text-4xl font-bold text-white md:text-6xl">
            Web Development II assignments, organized into one polished hub.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Each week builds on the last, from the first shopping list screens to authenticated and
            Firestore-backed experiences. Use the cards below to jump into any assignment.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {weeks.map((week) => (
            <Link
              key={week.href}
              href={week.href}
              className={`group rounded-[1.7rem] border border-white/10 bg-gradient-to-br ${week.tone} p-[1px] shadow-[0_18px_55px_rgba(0,0,0,0.22)]`}
            >
              <div className="flex h-full flex-col justify-between rounded-[1.65rem] bg-[var(--panel-strong)] p-6 backdrop-blur">
                <div>
                  <p className={`mb-3 text-sm uppercase tracking-[0.2em] ${week.accent}`}>Assignment</p>
                  <h2 className="text-2xl font-bold text-white">{week.label}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{week.note}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className={`text-sm font-semibold ${week.accent}`}>Open page</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200 group-hover:border-white/20">
                    View
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
