export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="bg-black text-white p-4 rounded-lg shadow-md hover:bg-blue-800 cursor-pointer transition"
    >
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm text-gray-300">
        Quantity: {quantity} | Category: {category}
      </p>
    </li>
  );
}