import './globals.css';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kearoth Ly - Portfolio',
  description: 'Full-Stack Developer | Photography | Design | AI Enthusiast',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Full-width Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Kearoth Ly
            </Link>
            <nav className="space-x-8 text-sm font-medium">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/#about" className="hover:text-blue-600 transition">About</Link>
              <Link href="/#projects" className="hover:text-blue-600 transition">Projects</Link>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="pt-20"> {/* Offset for fixed header */}
          {children}
        </main>

        <footer className="border-t border-gray-200 py-8 mt-32">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
            © 2025 Kearoth Ly • Built with Next.js & Tailwind
          </div>
        </footer>
      </body>
    </html>
  );
}