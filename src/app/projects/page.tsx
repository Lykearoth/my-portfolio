import Link from 'next/link';

export default function Projects() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded">
          <h2 className="text-2xl">Smart Face Attendance System</h2>
          <p>Tech: Python, OpenCV, Flask. Automated attendance for education.</p>
          <p>From 0 to Complete: See step-by-step in README.</p>
          <Link href="https://github.com/yourusername/face-attendance" className="text-blue-500">GitHub</Link>
          <Link href="https://your-hosted-demo.vercel.app" className="text-blue-500 ml-2">Live Demo</Link>
        </div>
        {/* Add more project cards */}
      </div>
    </main>
  );
}