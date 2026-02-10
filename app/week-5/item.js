export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 flex justify-between items-center hover:bg-gray-700 transition">
      <div>
        <p className="font-medium text-sm">{name}</p>
        <p className="text-xs text-gray-400 capitalize">{category}</p>
      </div>

      <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-md">
        {quantity}
      </span>
    </li>
  );
}
