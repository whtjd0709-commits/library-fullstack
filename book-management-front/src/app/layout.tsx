import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "도서관리",
  description: "book management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="site-header">
          <b>도서관리 프로그램</b>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link href="/">목록보기</Link>
          <Link href="/register">도서등록</Link>
        </div>
        <main className="site-main">{children}</main>
        <div className="site-footer">도서관리 프로그램</div>
      </body>
    </html>
  );
}
