import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-blue-100 p-10">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
          Shopping List
        </h1>

        <ItemList />
      </div>
    </main>
  );
}