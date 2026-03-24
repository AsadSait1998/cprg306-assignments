export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="cursor-pointer rounded-xl border border-slate-700 bg-slate-800/90 p-4 text-white shadow-[0_10px_24px_rgba(2,8,23,0.2)] hover:border-sky-300/35 hover:bg-slate-700/90"
    >
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm text-slate-300">
        Quantity: {quantity} | Category: {category}
      </p>
    </li>
  );
}
