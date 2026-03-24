import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.24em] text-sky-200">Week 3</p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">Shopping List</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            A more refined static list layout with calmer spacing and a cleaner presentation shell.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur">
          <ItemList />
        </div>
      </div>
    </main>
  );
}
