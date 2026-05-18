import { fetchBooks, searchBooks } from "@/app/libs/api";
import type { Book } from "@/types/book";
import Link from "next/link";

export default async function BookList({ title }: { title?: string }) {
  const books: Book[] = title ? await searchBooks(title) : await fetchBooks();

  if (!books.length) {
    return <p className="msg">데이터가 없습니다.</p>;
  }

  return (
    <table className="data">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>저자</th>
          <th>가격</th>
          <th>대여</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td style={{ textAlign: "center" }}>{book.id}</td>
            <td>
              <Link href={`/books/${book.id}`}>{book.title}</Link>
            </td>
            <td>{book.author}</td>
            <td style={{ textAlign: "right" }}>
              {book.price != null ? `${book.price.toLocaleString()}원` : "-"}
            </td>
            <td style={{ textAlign: "center" }}>
              {book.available ? (
                <span className="status-ok">가능</span>
              ) : (
                <span className="status-no">불가</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
