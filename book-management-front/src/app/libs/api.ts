import type { Book } from "@/types/book";

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export async function fetchBooks(): Promise<Book[]> {
  const res = await fetch(`${API_URL}/api/books`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
}

export async function searchBooks(title: string): Promise<Book[]> {
  const res = await fetch(
    `${API_URL}/api/books/search?title=${encodeURIComponent(title)}`,
    { cache: "no-store" },
  );
  if (!res.ok) throw new Error("Failed to search");
  return res.json();
}

export async function fetchBook(id: string): Promise<Book | null> {
  const res = await fetch(`${API_URL}/api/books/${id}`, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch book");
  return res.json();
}
