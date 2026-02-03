import NewItem from "./new-item";

export default function Week4Page() {
  return (
    <main
      className="
        min-h-screen
        bg-gray-100
        flex
        flex-col
        items-center
        pt-16
      "
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
         Shopping List
      </h1>

      <NewItem />
    </main>
  );
}