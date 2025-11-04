import React from 'react';

export default function AboutServices() {
  return (
    <section aria-label="About and Services" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">About Me</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              I'm Zia — an informatics researcher, UI/UX designer, and architect of a community-centered website. I focus on inclusive design, strategic communication, and translating research into interfaces that create real-world community impact.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              My practice blends user research with pragmatic product thinking, ensuring that every decision is shaped by evidence, accessibility, and the lived experiences of the people I'm designing for.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">Services</h3>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { title: 'UI/UX Design', desc: 'From wireframes to polished interfaces with a11y at the core.' },
                { title: 'User Research', desc: 'Interviews, studies, and synthesis to uncover actionable insights.' },
                { title: 'Strategic Documentation', desc: 'Clear product specs, roadmaps, and design systems.' },
                { title: 'Participatory Training', desc: 'Workshops that build local capacity and ownership.' },
              ].map((s) => (
                <li key={s.title} className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm">
                  <h4 className="text-lg font-semibold text-neutral-900">{s.title}</h4>
                  <p className="mt-2 text-sm text-neutral-700">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
