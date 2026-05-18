// book-management-front/src/app/components/BookEditForm.tsx (RCC, 가산점: PUT 수정)
"use client";

import { useFormStatus } from "react-dom";
import { updateBook } from "@/app/libs/actions";
import type { Book } from "@/types/book";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-indigo-600 py-3 text-sm text-white disabled:opacity-60"
    >
      {pending ? "Saving..." : "Save"}
    </button>
  );
}

export default function BookEditForm({ book }: { book: Book }) {
  const action = updateBook.bind(null, book.id);

  return (
    <form action={action} className="mx-auto max-w-lg space-y-5">
      <Field label="Title" name="title" defaultValue={book.title} required />
      <Field label="Author" name="author" defaultValue={book.author} required />
      <Field label="Price" name="price" type="number" defaultValue={book.price ?? ""} />
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="available" defaultChecked={book.available} />
        Available
      </label>
      <SubmitButton />
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string | number;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="w-full rounded-lg border px-4 py-2 text-sm"
      />
    </div>
  );
}
