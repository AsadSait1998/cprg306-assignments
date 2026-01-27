import Link from "next/link";



export default function Home() {
return (
<main className="p-10">
<h1 className="text-3xl font-bold mb-6">Assignments</h1>


<ul className="space-y-3">
<li>
<Link
href="/week-4"
className="text-blue-600 underline hover:text-blue-800"
>
Week 4 Assignment
</Link>
</li>
</ul>
</main>
);
}

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>

      <Link href="/week-2">Go to Week 2</Link>
    </main>
  );
}