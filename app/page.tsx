import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-2xl">
      <h1 className="">ETH Hackthon</h1>
      <Link href="/signin" className="m-4 border border-white px-4">
        Login
      </Link>
    </div>
  );
}
