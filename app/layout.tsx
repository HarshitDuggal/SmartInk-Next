// app/layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Next Blog',
  description: 'Simple blog built with Next.js App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="p-6">
        <nav className="mb-4 space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
