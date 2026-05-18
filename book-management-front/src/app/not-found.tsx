import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>페이지 없음</h2>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <br />
      <Link href="/">메인으로</Link>
    </div>
  );
}
