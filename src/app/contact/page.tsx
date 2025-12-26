import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, submit] = useForm("your-formspree-id"); // Get ID from formspree.io

  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={submit}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" className="border p-2 mb-2 w-full" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" className="border p-2 mb-2 w-full" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button type="submit" disabled={state.submitting} className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </main>
  );
}