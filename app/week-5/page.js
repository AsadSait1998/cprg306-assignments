import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 py-12">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Shopping List
        </h1>

        <ItemList />
      </div>
    </main>
  );
}
