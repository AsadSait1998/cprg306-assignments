import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-10">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-[var(--panel)] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur md:p-10">
        <p className="mb-3 text-sm uppercase tracking-[0.24em] text-amber-200">Week 2</p>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Shopping List Foundations</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          The early assignment page now has a proper hero section and a cleaner place for your
          student details.
        </p>
        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-6">
          <StudentInfo />
        </div>
      </div>
    </main>
  );
}
