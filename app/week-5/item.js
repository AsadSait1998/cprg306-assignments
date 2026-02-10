export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex justify-between items-center shadow-lg">
      <div>
        <p className="font-semibold text-lg text-gray-100">{name}</p>
        <p className="text-sm text-gray-400 capitalize">{category}</p>
      </div>

      <span className="bg-indigo-600 text-white px-3 py-1 rounded-lg font-medium">
        Qty: {quantity}
      </span>
    </li>
  );
}
