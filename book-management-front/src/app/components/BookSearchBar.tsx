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
    <form onSubmit={handleSubmit}>
      제목검색 :&nbsp;
      <input
        type="text"
        name="title"
        defaultValue={currentTitle}
        className="wide"
        placeholder="제목 입력"
      />
      &nbsp;
      <button type="submit" className="btn-blue" disabled={isPending}>
        {isPending ? "..." : "검색"}
      </button>
      &nbsp;
      <button
        type="button"
        className="btn-gray"
        disabled={isPending}
        onClick={() => startTransition(() => router.push("/"))}
      >
        전체보기
      </button>
    </form>
  );
}
