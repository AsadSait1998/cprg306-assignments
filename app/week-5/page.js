import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-8">Shopping List</h1>

      <ItemList />
    </main>
  );
}
