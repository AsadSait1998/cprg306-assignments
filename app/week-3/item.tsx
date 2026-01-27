interface ItemProps {
  name: string;
  quantity: number;
  category: string;
}

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="flex justify-between items-center bg-indigo-50 hover:bg-indigo-100 transition p-4 rounded-xl border border-indigo-100">
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500 capitalize">{category}</p>
      </div>

      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow">
        {quantity}
      </span>
    </li>
  );
}