"use client";

import { useForm } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("your-formspree-id");

  if (state.succeeded) {
    return <p className="text-center text-2xl">Thanks! I'll get back to you soon.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto py-16 text-center space-y-12">
      <h1 className="text-5xl font-bold">Get in Touch</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={6}
          required
          className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}