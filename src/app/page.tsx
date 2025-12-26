export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <img src="/public/kearoth ly.jpg" alt="Your Photo" className="w-32 h-32 rounded-full mb-4" />
      <h1 className="text-4xl font-bold">Kearoth Ly</h1>
      <p className="text-xl">Full-Stack Developer | AI Enthusiast</p>
      <p className="mt-4 max-w-md text-center">
        Bio: I'm a recent IT graduate with experience in Python, React, and Laravel. I've built real-world projects like a smart face-based attendance system to solve educational challenges.
      </p>
      <a href="/projects" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View Projects</a>
    </main>
  );
}

