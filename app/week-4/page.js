import NewItem from "./new-item";

export default function Week4Page() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.24em] text-emerald-200">Week 4</p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">New Item Form</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            The form stays front and center, but now sits inside a softer, more intentional page
            composition.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur">
          <NewItem />
        </div>
      </div>
    </main>
  );
}
