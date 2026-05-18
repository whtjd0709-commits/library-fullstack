// book-management-front/src/app/components/BookListSkeleton.tsx (RSC)
export default function BookListSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <article key={i} className="animate-pulse rounded-xl border bg-white p-5">
          <div className="mb-3 h-5 w-3/4 rounded bg-slate-200" />
          <div className="mb-2 h-4 w-1/2 rounded bg-slate-200" />
          <div className="h-4 w-1/3 rounded bg-slate-200" />
        </article>
      ))}
    </div>
  );
}
