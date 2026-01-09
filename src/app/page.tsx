import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="text-5xl font-bold">XScouting</h1>
      <div>
        <Link href="/supabase" className="hover:underline">supabase</Link>
      </div>
    </div>
  )
}
