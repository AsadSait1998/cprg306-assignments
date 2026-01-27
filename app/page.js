import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-cyan-400">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <ul className="space-y-4 text-lg">
        <li>
          <Link
            href="/week-2"
            className="text-yellow-400 hover:text-yellow-300 underline"
          >
            Week 2 
          </Link>
        </li>

        <li>
          <Link
            href="/week-3"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Week 3 
          </Link>
        </li>

        <li>
          <Link
            href="/week-4"
            className="text-green-400 hover:text-green-300 underline"
          >
            Week 4 
          </Link>
        </li>
      </ul>
    </main>
  );
}