export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="cursor-pointer rounded-lg bg-black p-4 text-white shadow-md transition hover:bg-blue-800"
    >
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-300">
        Quantity: {quantity} | Category: {category}
      </p>
    </li>
  );
}
