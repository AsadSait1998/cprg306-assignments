import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">
          🛒 Shopping List
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <ItemList />
        </div>
      </div>
    </main>
  );
}