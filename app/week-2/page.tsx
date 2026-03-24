import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-10">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-[var(--panel)] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur md:p-10">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Shopping List</h1>
        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-6">
          <StudentInfo />
        </div>
      </div>
    </main>
  );
}
