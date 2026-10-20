import { education } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { GraduationIcon } from './Icons'

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic background"
            subtitle="Engineering fundamentals that shaped how I approach problem solving."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 100}>
              <div className="card-glass group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-border">
                <div className="pointer-events-none absolute -left-12 -top-12 size-40 rounded-full bg-brand-600/15 blur-2xl" />

                <div className="flex items-start gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-soft to-brand-700/10 text-accent-strong">
                    <GraduationIcon className="size-6" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold text-heading">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent-strong">{item.school}</p>
                    <p className="mt-3 text-sm text-muted">Graduated in {item.period}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={120}>
            <div className="card-glass flex h-full flex-col justify-center rounded-2xl p-7">
              <h3 className="font-display text-lg font-semibold text-heading">
                Continuous learning
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Six years of teaching Python, web fundamentals, React and Next.js keep my
                knowledge sharp — and teaching is the fastest way to truly master a stack.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Python', 'React', 'Next.js', 'HTML', 'CSS', 'JavaScript'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-line bg-elevated px-3 py-1.5 text-xs text-body"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
