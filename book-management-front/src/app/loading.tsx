// book-management-front/src/app/loading.tsx (RSC, 가산점: Skeleton UI)
import BookListSkeleton from "@/app/components/BookListSkeleton";

export default function Loading() {
  return (
    <section className="space-y-6">
      <div className="h-8 w-40 animate-pulse rounded bg-slate-200" />
      <div className="h-11 animate-pulse rounded bg-slate-200" />
      <BookListSkeleton />
    </section>
  );
}
