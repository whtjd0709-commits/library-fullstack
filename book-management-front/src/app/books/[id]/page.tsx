// book-management-front/src/app/books/[id]/page.tsx (RSC + RCC DeleteBookButton)
import Link from "next/link";
import { notFound } from "next/navigation";
import DeleteBookButton from "@/app/components/DeleteBookButton";
import { fetchBook } from "@/app/libs/api";

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const book = await fetchBook(id);
  if (!book) notFound();

  return (
    <section className="mx-auto max-w-2xl">
      <Link href="/" className="text-sm text-indigo-600 hover:underline">
        Back
      </Link>
      <article className="mt-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-4 flex justify-between gap-4">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <span
            className={`rounded-full px-3 py-1 text-sm ${
              book.available
                ? "bg-emerald-100 text-emerald-700"
                : "bg-rose-100 text-rose-700"
            }`}
          >
            {book.available ? "Available" : "Out"}
          </span>
        </div>
        <dl className="space-y-3 text-sm">
          <div className="flex border-b pb-2">
            <dt className="w-20 text-slate-500">Author</dt>
            <dd>{book.author}</dd>
          </div>
          <div className="flex border-b pb-2">
            <dt className="w-20 text-slate-500">Price</dt>
            <dd>
              {book.price != null ? `${book.price.toLocaleString()} KRW` : "N/A"}
            </dd>
          </div>
          <div className="flex pb-2">
            <dt className="w-20 text-slate-500">ID</dt>
            <dd>{book.id}</dd>
          </div>
        </dl>
        <div className="mt-8 flex gap-3">
          <Link
            href={`/books/${book.id}/edit`}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white"
          >
            Edit
          </Link>
          <DeleteBookButton bookId={book.id} bookTitle={book.title} />
        </div>
      </article>
    </section>
  );
}
