import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-32 py-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          Hi, I’m Kearoth Ly
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Full-Stack Developer building modern web applications with React, Next.js, Python, and AI.
        </p>
        <div className="pt-6">
          <Link 
            href="#projects" 
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            View My Work
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-12">
        <h2 className="text-4xl font-bold text-center">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Project 1 */}
          <div className="border border-gray-200 rounded-xl p-8 hover:border-gray-400 transition">
            <h3 className="text-2xl font-semibold mb-3">Smart Face Attendance System</h3>
            <p className="text-gray-600 mb-6">
              Real-time facial recognition attendance tracker built with Python, OpenCV, and Flask.
            </p>
            <div className="flex gap-4 text-sm font-medium">
              <Link href="#" className="text-blue-600 hover:underline">Live Demo →</Link>
              <Link href="#" className="text-gray-600 hover:underline">GitHub →</Link>
            </div>
          </div>

          {/* Project 2 - Add more like this */}
          <div className="border border-gray-200 rounded-xl p-8 hover:border-gray-400 transition">
            <h3 className="text-2xl font-semibold mb-3">Personal Portfolio (This Site)</h3>
            <p className="text-gray-600 mb-6">
              Modern minimal portfolio built with Next.js 14, Tailwind CSS, and deployed on Vercel.
            </p>
            <div className="flex gap-4 text-sm font-medium">
              <Link href="https://github.com/Lykearoth/my-portfolio" className="text-gray-600 hover:underline">Source Code →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-8 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold">About</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Recent IT graduate from Cambodia passionate about creating impactful software. 
          Experienced in frontend (React/Next.js), backend (Python/Flask, Laravel), and machine learning.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Currently focused on building clean, performant web applications and exploring AI integration.
        </p>
      </section>
    </div>
  );
}