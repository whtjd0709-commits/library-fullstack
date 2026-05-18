import Link from "next/link";
export default function NotFound() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
      <h2 className="text-xl font-bold">Not Found</h2>
      <Link href="/" className="mt-6 inline-block rounded-lg bg-indigo-600 px-5 py-2.5 text-sm text-white">Back</Link>
    </div>
  );
}