"use client";
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="rounded-xl border border-rose-200 bg-rose-50 px-6 py-10 text-center">
      <h2 className="text-lg font-semibold text-rose-800">Error</h2>
      <p className="mt-2 text-sm text-rose-600">{error.message}</p>
      <button type="button" onClick={reset} className="mt-4 rounded-lg bg-rose-600 px-4 py-2 text-sm text-white">Retry</button>
    </div>
  );
}