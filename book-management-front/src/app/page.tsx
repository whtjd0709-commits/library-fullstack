// book-management-front/src/app/page.tsx (RSC: 서버 컴포넌트)
import { Suspense } from "react";
import BookList from "@/app/components/BookList";
import BookListSkeleton from "@/app/components/BookListSkeleton";
import BookSearchBar from "@/app/components/BookSearchBar";

interface HomePageProps {
  searchParams: Promise<{ title?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { title } = await searchParams;

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">도서 목록</h1>
        <p className="mt-1 text-sm text-slate-600">
          서점 재고를 조회하고 검색할 수 있습니다.
        </p>
      </div>

      <Suspense fallback={<SearchBarFallback />}>
        <BookSearchBar />
      </Suspense>

      <Suspense key={title ?? "all"} fallback={<BookListSkeleton />}>
        <BookList title={title} />
      </Suspense>
    </section>
  );
}

function SearchBarFallback() {
  return <div className="h-11 animate-pulse rounded-lg bg-slate-200" />;
}
