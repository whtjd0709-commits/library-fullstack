// book-management-front/src/app/books/[id]/edit/page.tsx (RSC + RCC BookEditForm, 가산점: PUT)
import Link from "next/link";
import { notFound } from "next/navigation";
import BookEditForm from "@/app/components/BookEditForm";
import { fetchBook } from "@/app/libs/api";

export default async function BookEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const book = await fetchBook(id);
  if (!book) notFound();

  return (
    <section className="space-y-6">
      <div>
        <Link href={`/books/${book.id}`} className="text-sm text-indigo-600 hover:underline">
          Back
        </Link>
        <h1 className="mt-2 text-2xl font-bold">Edit Book</h1>
        <p className="text-sm text-slate-600">PUT + Server Actions</p>
      </div>
      <BookEditForm book={book} />
    </section>
  );
}
