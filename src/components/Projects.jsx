import { projects } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { ArrowUpRightIcon } from './Icons'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0 mask-fade-x opacity-40" />
        <div className="absolute right-1/4 top-20 size-80 rounded-full bg-glow/10 blur-[120px]" />
      </div>

      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            subtitle="Production websites, dashboards and platforms — shipped for clients in Egypt and Saudi Arabia."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 90}>
              <article className="card-glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-border">
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 size-44 rounded-full bg-brand-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-lg border border-line bg-surface-2 px-2.5 py-1 text-[0.7rem] font-medium tracking-wide text-accent-strong">
                    {project.category}
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name}`}
                      className="grid size-8 shrink-0 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent-border hover:text-accent"
                    >
                      <ArrowUpRightIcon className="size-4" />
                    </a>
                  )}
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-heading">
                  {project.name}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
                  >
                    Visit site
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
