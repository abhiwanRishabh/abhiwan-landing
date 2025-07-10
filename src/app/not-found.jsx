import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center text-white flex-col h-screen gap-2">
      <h2 className="text-3xl">Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <button className="cursor-pointer bg-white p-2 text-black px-3 rounded-sm mt-3">
          Home
        </button>
      </Link>
    </div>
  );
}
