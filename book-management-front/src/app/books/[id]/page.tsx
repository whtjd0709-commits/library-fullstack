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
    <>
      <p>
        <Link href="/">&lt;&lt; 목록으로</Link>
      </p>
      <h1>도서 상세정보</h1>
      <hr />
      <table className="data form-table">
        <tbody>
          <tr>
            <td>번호</td>
            <td>{book.id}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td>
              <b>{book.title}</b>
            </td>
          </tr>
          <tr>
            <td>저자</td>
            <td>{book.author}</td>
          </tr>
          <tr>
            <td>가격</td>
            <td>
              {book.price != null ? `${book.price.toLocaleString()}원` : "-"}
            </td>
          </tr>
          <tr>
            <td>대여</td>
            <td>
              {book.available ? (
                <span className="status-ok">대여가능</span>
              ) : (
                <span className="status-no">대여불가</span>
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <Link href={`/books/${book.id}/edit`}>[수정]</Link>
      &nbsp;
      <DeleteBookButton bookId={book.id} bookTitle={book.title} />
    </>
  );
}
