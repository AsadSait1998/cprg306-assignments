export default function Item({ item }) {
  return (
    <li className="bg-zinc-800 border border-zinc-700 p-3 rounded">
      <span className="font-semibold text-blue-300">{item.name}</span>{" "}
      <span className="text-gray-300">(x{item.quantity})</span> —{" "}
      <span className="capitalize text-gray-400">{item.category}</span>
    </li>
  );
}