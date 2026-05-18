// book-management-front/src/app/components/DeleteBookButton.tsx (RCC)
"use client";

import { useTransition } from "react";
import { deleteBook } from "@/app/libs/actions";

export default function DeleteBookButton({
  bookId,
  bookTitle,
}: {
  bookId: number;
  bookTitle: string;
}) {
  const [pending, start] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        if (confirm(`Delete "${bookTitle}"?`)) {
          start(() => deleteBook(bookId));
        }
      }}
      className="rounded-lg border border-rose-300 px-4 py-2 text-sm text-rose-600 disabled:opacity-60"
    >
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}
