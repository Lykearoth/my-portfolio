import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-12">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Repeat this card for each project */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition">
          <div className="bg-gray-300 dark:bg-gray-700 h-48 rounded-lg mb-4" /> {/* Placeholder image */}
          <h3 className="text-2xl font-semibold mb-2">Project Title</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Short description...</p>
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 hover:underline">Live Demo</a>
            <a href="#" className="text-blue-600 hover:underline">GitHub</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}