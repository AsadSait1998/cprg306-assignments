import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Shopping List</h1>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur">
          <ItemList />
        </div>
      </div>
    </main>
  );
}
