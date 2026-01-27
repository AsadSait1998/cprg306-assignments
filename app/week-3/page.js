import NewItem from "./new-item";

export default function Week3Page() {
  return (
    <main
      className="
        min-h-screen
        bg-linear-to-br
        from-gray-900
        via-gray-800
        to-black
        flex
        flex-col
        items-center
        pt-16
      "
    >
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-10 drop-shadow-lg">
         Shopping List
      </h1>

      <NewItem />
    </main>
  );
}