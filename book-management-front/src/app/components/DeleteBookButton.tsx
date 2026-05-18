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
      className="btn-red"
      disabled={pending}
      onClick={() => {
        if (confirm(`"${bookTitle}" 삭제할까요?`)) {
          start(() => deleteBook(bookId));
        }
      }}
    >
      {pending ? "삭제중" : "삭제"}
    </button>
  );
}
