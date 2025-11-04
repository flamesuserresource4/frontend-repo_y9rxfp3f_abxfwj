import React from 'react';

const projects = [
  {
    title: 'Web',
    subtitle: 'Community Platform',
    description:
      'A digital platform for local community empowerment with resources, events, and participatory tools.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'UX Study',
    subtitle: 'Comparative Research',
    description:
      'Comparative study on design effectiveness of Traveloka vs Tiket.com with task success and heuristic analysis.',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Design System',
    subtitle: 'Accessible Library',
    description:
      'An accessible design library for civic apps, improving consistency and reducing delivery time.',
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-label="Featured Projects" className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-neutral-700">Selected work across web, research, and systems.</p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md focus-within:shadow-md">
              <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
                <img
                  src={p.image}
                  alt={`${p.title} – ${p.subtitle}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900">{p.title}</h3>
                <p className="text-sm text-emerald-700">{p.subtitle}</p>
                <p className="mt-3 text-sm text-neutral-700 leading-relaxed">{p.description}</p>
                <div className="mt-5">
                  <button
                    className="inline-flex items-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                    aria-label={`View details for ${p.title}`}
                  >
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
