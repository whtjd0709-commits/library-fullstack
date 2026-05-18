"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="box">
      <b>오류 발생</b>
      <br />
      {error.message}
      <br />
      <br />
      <button type="button" onClick={reset}>
        다시시도
      </button>
    </div>
  );
}
