"use client";

import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xykyzzdo");  // Replace with your real ID later

  if (state.succeeded) {
    return (
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
        <p className="text-xl text-center text-green-600">Thanks for reaching out! I'll get back to you soon.</p>
      </main>
    );
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
        <div>
          <label htmlFor="email" className="block mb-2">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}