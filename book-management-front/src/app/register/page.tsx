// book-management-front/src/app/register/page.tsx (RCC: 'use client')
"use client";

import { useFormStatus } from "react-dom";
import { createBook } from "@/app/libs/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white disabled:opacity-60"
    >
      {pending ? "Saving..." : "Register"}
    </button>
  );
}

export default function RegisterPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Register Book</h1>
        <p className="text-sm text-slate-600">Server Actions</p>
      </div>
      <form action={createBook} className="mx-auto max-w-lg space-y-5">
        <Field label="Title" name="title" required />
        <Field label="Author" name="author" required />
        <Field label="Price" name="price" type="number" min={0} />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="available" defaultChecked className="h-4 w-4" />
          Available
        </label>
        <SubmitButton />
      </form>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        min={min}
        className="w-full rounded-lg border px-4 py-2 text-sm"
      />
    </div>
  );
}
