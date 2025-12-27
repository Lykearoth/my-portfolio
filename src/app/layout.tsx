import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Kearoth Ly — Developer',
  description: 'Full-Stack Developer | React, Next.js, Python, AI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Kearoth Ly
            </Link>
            <nav className="space-x-8 text-sm font-medium">
              <Link href="#projects" className="text-gray-600 hover:text-black transition">Projects</Link>
              <Link href="#about" className="text-gray-600 hover:text-black transition">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-black transition">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow max-w-4xl mx-auto px-6 py-12 w-full">
          {children}
        </main>

        <footer className="border-t border-gray-200 py-8 mt-16">
          <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-500">
            © 2025 Kearoth Ly. Built with Next.js + Tailwind.
          </div>
        </footer>
      </body>
    </html>
  );
}