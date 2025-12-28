import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Full-Screen Split Hero */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Black Side */}
        <div className="lg:col-span-7 bg-black flex flex-col justify-between p-12 lg:p-20 relative">
          {/* Vertical Rotated Nav */}
          <nav className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-12 text-sm font-medium text-gray-500">
            <Link href="#projects" className="rotate-90 origin-left whitespace-nowrap hover:text-white transition">WORK</Link>
            <Link href="#about" className="rotate-90 origin-left whitespace-nowrap hover:text-white transition">ABOUT</Link>
            <Link href="/contact" className="rotate-90 origin-left whitespace-nowrap hover:text-white transition">CONTACT</Link>
          </nav>

          {/* Main Text Content */}
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-black leading-none text-white">
              Hi there,<br />
              I'm Kearoth Ly
            </h1>
            <p className="text-4xl md:text-6xl font-bold text-gray-400 mt-8">
              Creative Technologist
            </p>
            <p className="text-lg md:text-xl text-gray-500 mt-8 leading-relaxed">
              I am passionate about solving business problems through human-centered design.<br />
              Curious by nature and business-minded.
            </p>
          </div>

          {/* Yellow Button */}
          <Link
            href="/contact"
            className="bg-yellow-400 text-black px-12 py-6 rounded-full text-xl font-bold hover:bg-yellow-300 transition shadow-2xl"
          >
            Reach Out To Me
          </Link>
        </div>

        {/* Right Yellow Side */}
        <div className="lg:col-span-5 bg-yellow-400 flex flex-col items-center justify-between p-12 relative">
          {/* Avatar (Fun with laptop) */}
          <div className="w-80 h-80 md:w-96 md:h-96 mt-20">
            <Image
              src="/avatar.png" // Replace with your fun avatar image in /public
              alt="Kearoth Ly"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Purple Button */}
          <Link
            href="#projects"
            className="bg-purple-600 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-purple-500 transition shadow-2xl mb-20"
          >
            See My Work
          </Link>

          {/* Year */}
          <p className="absolute bottom-8 right-8 text-black text-lg font-medium">
            2025
          </p>
        </div>
      </section>

      {/* Add your Projects and About sections below in black or dark */}
    </>
  );
}