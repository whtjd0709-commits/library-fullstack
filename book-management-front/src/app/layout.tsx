// book-management-front/src/app/layout.tsx (RSC)
import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "도서 관리 시스템",
  description: "더조은 강남 풀스택 2단계 통합 평가 - Book Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geist.variable} h-full`}>
      <body className="min-h-full bg-slate-50 text-slate-900 antialiased">
        <header className="border-b border-slate-200 bg-white shadow-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-lg font-bold text-indigo-700">
              📚 Book Management
            </Link>
            <nav className="flex items-center gap-4 text-sm font-medium">
              <Link href="/" className="text-slate-700 hover:text-indigo-600">
                도서 목록
              </Link>
              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              >
                도서 등록
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl flex-1 px-4 py-8">{children}</main>

        <footer className="mt-auto border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
          더조은 강남 · Java & Cloud Fullstack · 2단계 통합 평가
        </footer>
      </body>
    </html>
  );
}
