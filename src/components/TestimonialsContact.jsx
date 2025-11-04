import React, { useState } from 'react';

const testimonials = [
  {
    quote:
      'Zia brings a rare mix of rigor and empathy. Our team finally understood our users and shipped with confidence.',
    author: 'Project Lead, Civic Lab',
  },
  {
    quote:
      'His participatory workshops shifted our approach—we now co-create with the community instead of for them.',
    author: 'Community Organizer',
  },
  {
    quote:
      'Clear documentation and accessible design raised our product quality across the board.',
    author: 'Head of Product, Startup X',
  },
];

function SocialIcon({ label, href, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 transition hover:border-emerald-400 hover:text-emerald-700"
    >
      {children}
    </a>
  );
}

export default function TestimonialsContact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thanks, ${name}! Your message has been sent.`);
    e.currentTarget.reset();
  };

  return (
    <section aria-label="Testimonials and Contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Testimonials</h2>
            <ul className="mt-8 space-y-6">
              {testimonials.map((t, i) => (
                <li key={i} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                  <blockquote className="text-neutral-800">“{t.quote}”</blockquote>
                  <p className="mt-3 text-sm text-neutral-600">— {t.author}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Contact</h2>
            <p className="mt-2 text-neutral-700">Have a project or a question? Let’s talk.</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-800">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-500 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-800">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-500 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-500 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                  placeholder="Tell me about your idea"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2.5 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Send
                </button>
                {status && (
                  <p className="text-sm text-emerald-700" role="status" aria-live="polite">
                    {status}
                  </p>
                )}
              </div>
            </form>

            <div className="mt-12 border-t border-neutral-200 pt-8">
              <div className="flex items-center justify-center gap-4">
                <SocialIcon label="LinkedIn" href="https://www.linkedin.com/">
                  {/* LinkedIn SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V24h-4V8.5z"/></svg>
                </SocialIcon>
                <SocialIcon label="GitHub" href="https://github.com/">
                  {/* GitHub SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.69.95.69 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
                </SocialIcon>
                <SocialIcon label="Behance" href="https://www.behance.net/">
                  {/* Behance SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.5 7H9c1.93 0 3.5 1.57 3.5 3.5 0 1.16-.57 2.2-1.44 2.83C12.15 13.86 13 15.09 13 16.5 13 18.43 11.43 20 9.5 20H2V7h2.5zM6 10v2h3c.55 0 1-.45 1-1s-.45-1-1-1H6zm0 5v3h3.5c.83 0 1.5-.67 1.5-1.5S10.33 15 9.5 15H6zM15 8h5v2h-5V8zm-.5 3H19c2.21 0 4 1.79 4 4v1h-6.5c.2.58.76 1 1.5 1 .65 0 1.2-.41 1.41-.98H22c-.39 1.73-1.93 3-4.03 3-2.26 0-4.1-1.84-4.1-4.1 0-2.21 1.79-4 4.1-4z"/></svg>
                </SocialIcon>
              </div>
              <p className="mt-4 text-center text-sm text-neutral-600">© {new Date().getFullYear()} Zia — All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
