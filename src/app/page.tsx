import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Full-Width Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-gradient-to-b from-white to-gray-50">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
          Hi, I’m Kearoth Ly
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl">
          Full-Stack Developer building modern web apps with React, Next.js, Python, and AI.
          Passionate about clean design, photography, and creative technology.
        </p>
        <Link
          href="#projects"
          className="bg-blue-600 text-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-blue-700 transition shadow-xl"
        >
          View My Work
        </Link>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-20">Selected Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Repeat this card for each project */}
          <div className="border border-gray-200 rounded-2xl p-10 hover:border-gray-400 hover:shadow-lg transition">
            <h3 className="text-3xl font-semibold mb-4">Smart Face Attendance System</h3>
            <p className="text-gray-600 mb-8">
              Real-time facial recognition using Python, OpenCV, and Flask.
            </p>
            <div className="flex gap-6 text-blue-600 font-medium">
              <Link href="#" className="hover:underline">Live Demo →</Link>
              <Link href="https://github.com/Lykearoth" className="hover:underline">GitHub →</Link>
            </div>
          </div>
          {/* Add more projects */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-12">About Me</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Creative technologist from Cambodia blending development, design, photography, and AI to solve real problems.
          </p>
        </div>
      </section>
    </>
  );
}