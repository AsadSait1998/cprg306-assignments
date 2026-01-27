import Link from "next/link";

export default function Page() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <ul className="space-y-3">
        <li>
          <Link href="/week-4" className="text-blue-600 underline">
            Go to Week 4
          </Link>
        </li>
      </ul>
    </main>
  );
}