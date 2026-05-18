import { Suspense } from "react";
import BookList from "@/app/components/BookList";
import BookSearchBar from "@/app/components/BookSearchBar";

interface HomePageProps {
  searchParams: Promise<{ title?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { title } = await searchParams;

  return (
    <>
      <h1>도서 목록</h1>
      <p>등록된 책을 조회합니다.</p>
      <hr />
      <BookSearchBar />
      <br />
      <Suspense key={title ?? "all"} fallback={<p className="loading-txt">로딩중...</p>}>
        <BookList title={title} />
      </Suspense>
    </>
  );
}
