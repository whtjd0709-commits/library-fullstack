// book-management-front/src/app/components/BookList.tsx (RSC)
import BookCard from "@/app/components/BookCard";
import { fetchBooks, searchBooks } from "@/app/libs/api";
import type { Book } from "@/types/book";

export default async function BookList({ title }: { title?: string }) {
  const books: Book[] = title ? await searchBooks(title) : await fetchBooks();

  if (!books.length) {
    return <p className="py-12 text-center text-slate-600">No books found.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
