import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Kearoth Ly — Creative Technologist',
  description: 'Developer | Designer | Photographer | AI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}