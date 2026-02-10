export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center">
      <div>
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm text-gray-500 capitalize">{category}</p>
      </div>

      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-medium">
        Qty: {quantity}
      </span>
    </li>
  );
}
