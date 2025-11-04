import React from 'react';
import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import Projects from './components/Projects';
import TestimonialsContact from './components/TestimonialsContact';

function App() {
  return (
    <div className="font-inter text-neutral-900 antialiased">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-emerald-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to work
      </a>
      <Hero />
      <AboutServices />
      <Projects />
      <TestimonialsContact />
    </div>
  );
}

export default App;
