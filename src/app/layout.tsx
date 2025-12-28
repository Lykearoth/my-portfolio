import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Kearoth Ly — Developer Portfolio',
  description: 'Full-Stack Developer | Photography | Design | AI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold tracking-tight">Kearoth Ly</Link>
            <nav className="space-x-10 text-base font-medium">
              <Link href="#projects" className="hover:text-blue-600 transition">Projects</Link>
              <Link href="#about" className="hover:text-blue-600 transition">About</Link>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="pt-24">{children}</main>

        <footer className="border-t border-gray-200 py-10 mt-32 text-center text-sm text-gray-600">
          © 2025 Kearoth Ly. Built with Next.js + Tailwind.
        </footer>
      </body>
    </html>
  );
}