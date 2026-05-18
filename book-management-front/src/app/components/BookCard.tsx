// book-management-front/src/app/components/BookCard.tsx (RSC)
import Link from "next/link";
import type { Book } from "@/types/book";

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link
      href={`/books/${book.id}`}
      className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
    >
      <div className="mb-2 flex justify-between gap-2">
        <h2 className="text-lg font-semibold text-slate-900">{book.title}</h2>
        <span
          className={`rounded-full px-2 py-0.5 text-xs ${
            book.available
              ? "bg-emerald-100 text-emerald-700"
              : "bg-rose-100 text-rose-700"
          }`}
        >
          {book.available ? "OK" : "OUT"}
        </span>
      </div>
      <p className="text-sm text-slate-600">{book.author}</p>
      <p className="mt-2 font-medium text-indigo-600">
        {book.price != null ? `${book.price.toLocaleString()} KRW` : "N/A"}
      </p>
    </Link>
  );
}
