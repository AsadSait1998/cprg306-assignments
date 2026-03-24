import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h1>Student Information</h1>
      <p>Name: Asad Arif</p>
      <Link href="https://github.com/AsadSait1998" target="_blank" rel="noreferrer">
        GitHub Profile: AsadSait1998
      </Link>
    </div>
  );
}
