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
    <>
      <p>
        <Link href={`/books/${book.id}`}>&lt;&lt; 돌아가기</Link>
      </p>
      <h1>도서 수정 (id={book.id})</h1>
      <hr />
      <BookEditForm book={book} />
    </>
  );
}
