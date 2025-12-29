import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name | Developer Portfolio",
  description: "Modern developer portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen`}>
        <ThemeProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-6 py-24">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}