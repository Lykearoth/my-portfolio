import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-20"
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-6">Hi, I'm Your Name</h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
        Full-Stack Developer | React & Next.js Expert
      </p>
      <p className="max-w-2xl mx-auto text-lg mb-12">
        I build modern, performant web applications with clean code and beautiful UI.
      </p>
      <Link
        href="/projects"
        className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View My Work
      </Link>
    </motion.section>
  );
}