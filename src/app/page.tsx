"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const typingVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Home() {
  const roles = ["a Developer", "a Designer", "a Photographer", "an AI Enthusiast"];

  return (
    <>
      {/* Full-Width Hero Header */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center px-6 max-w-4xl">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I'm{" "}
            <motion.span variants={container} initial="hidden" animate="visible" className="text-blue-600">
              {roles[0].split("").map((char, i) => (
                <motion.span key={i} variants={typingVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          {/* Rotating Typing Effect */}
          <motion.div className="text-2xl md:text-4xl text-gray-700 h-16">
            {roles.map((role, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: index === 0 ? 1 : 0, y: index === 0 ? 0 : 20 }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 3, delay: index * 4 }}
                className="absolute"
              >
                {role}
              </motion.p>
            ))}
          </motion.div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-8">
            <a href="https://www.linkedin.com/in/kearorh-ly" className="text-3xl hover:text-blue-600 transition">
              LinkedIn
            </a>
            <a href="mailto:lykearoth@gmail.com" className="text-3xl hover:text-blue-600 transition">
              Email
            </a>
          </div>

          <Link
            href="/#projects"
            className="mt-16 inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition"
          >
            Explore My Work
          </Link>
        </div>
      </section>

      {/* Other Sections (Projects, About) - Keep consistent minimal style */}
      <section id="projects" className="py-32 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">Projects</h2>
        {/* Add your project cards here - same as previous design */}
      </section>

      <section id="about" className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-12">About Me</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Welcome! I'm Kearoth Ly, a passionate creative technologist blending development, photography, design, and AI...
          </p>
        </div>
      </section>
    </>
  );
}