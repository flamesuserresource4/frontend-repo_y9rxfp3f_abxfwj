import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleScrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section aria-label="Hero" className="relative min-h-[80vh] md:min-h-screen overflow-hidden bg-neutral-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28 flex flex-col items-start justify-center min-h-[80vh] md:min-h-screen">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200">
          UI/UX • Product Design • Research
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
          Zia
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-700 sm:text-xl">
          Empowering communities through thoughtful design
        </p>
        <div className="mt-8">
          <button
            onClick={handleScrollToWork}
            className="rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            aria-label="View my work"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
}
