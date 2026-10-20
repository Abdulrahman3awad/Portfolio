import { experience } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { ArrowUpRightIcon, BriefcaseIcon } from './Icons'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Work experience"
            subtitle="Production work, technical leadership and teaching — across agencies, platforms and education."
          />
        </Reveal>

        <div className="relative mt-16">
          {/* Timeline rail */}
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent/50 via-brand-700/25 to-transparent sm:block" />

          <div className="space-y-10">
            {experience.map((job, index) => (
              <Reveal key={`${job.company}-${job.period}`} delay={index * 60}>
                <div className="relative sm:pl-16">
                  {/* Node */}
                  <span className="absolute left-0 top-6 hidden size-10 place-items-center rounded-full border border-accent-border bg-bg sm:grid">
                    <span className="grid size-8 place-items-center rounded-full bg-accent-soft text-accent">
                      <BriefcaseIcon className="size-4" />
                    </span>
                  </span>

                  <div className="card-glass group rounded-2xl p-6 transition-all duration-300 hover:border-accent-border sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-heading">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-accent-strong">{job.company}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-lg border border-line bg-elevated px-3 py-1 text-xs text-muted">
                          {job.period}
                        </span>
                        <span className="rounded-lg border border-accent-border bg-accent-soft px-3 py-1 text-xs text-accent-strong">
                          {job.type}
                        </span>
                        <span className="rounded-lg border border-line bg-elevated px-3 py-1 text-xs text-muted">
                          {job.location}
                        </span>
                      </div>
                    </div>

                    {job.stack && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium text-body"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {job.highlights && (
                      <ul className="mt-5 space-y-2.5">
                        {job.highlights.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {job.projects && (
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {job.projects.map((project) => (
                          <div
                            key={project.name}
                            className="rounded-xl border border-line bg-surface-2 p-4 transition-colors hover:border-accent-border"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <h4 className="text-sm font-semibold text-heading">{project.name}</h4>
                              {project.link ? (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label={`Visit ${project.name}`}
                                  className="text-faint transition-colors hover:text-accent"
                                >
                                  <ArrowUpRightIcon className="size-4" />
                                </a>
                              ) : null}
                            </div>
                            <p className="mt-1 text-xs text-faint">{project.region}</p>
                            <p className="mt-2 text-sm leading-relaxed text-muted">
                              {project.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
