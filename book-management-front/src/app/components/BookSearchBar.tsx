// book-management-front/src/app/components/BookSearchBar.tsx (RCC)
"use client";

import { FormEvent, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function BookSearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const currentTitle = searchParams.get("title") ?? "";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const title = String(new FormData(e.currentTarget).get("title") ?? "").trim();
    startTransition(() => {
      const params = new URLSearchParams();
      if (title) params.set("title", title);
      const q = params.toString();
      router.push(q ? `/?${q}` : "/");
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="search"
        name="title"
        defaultValue={currentTitle}
        placeholder="Search by title..."
        className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none ring-indigo-500 focus:ring-2"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-60"
        >
          {isPending ? "..." : "Search"}
        </button>
        <button
          type="button"
          onClick={() => startTransition(() => router.push("/"))}
          disabled={isPending}
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm hover:bg-slate-50"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
