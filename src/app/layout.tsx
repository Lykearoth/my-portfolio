import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kearoth Ly - Developer Portfolio',
  description: 'Showcasing my projects and skills',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4 text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/education">Education</Link></li>
            <li><Link href="/experience">Experience</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        {children}
        <footer className="bg-gray-800 p-4 text-white text-center">
          © 2025 Your Name
        </footer>
      </body>
    </html>
  );
}