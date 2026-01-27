interface ItemProps {
  name: string;
  quantity: number;
  category: string;
}

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm flex justify-between items-center hover:bg-blue-100 transition">
      <div>
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm text-gray-600 capitalize">{category}</p>
      </div>

      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
        x{quantity}
      </span>
    </li>
  );
}