import { profile, services } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { serviceIcons } from './iconMaps'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="About me"
            title="Frontend developer who ships real products"
            subtitle="I care about clean architecture, accessible interfaces and code that the next developer can actually maintain."
          />
        </Reveal>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {profile.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="card-glass group h-full rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-border">
                <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Summary + services */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="card-glass h-full rounded-2xl p-7">
              <h3 className="font-display text-lg font-semibold text-heading">
                Professional summary
              </h3>
              <p className="mt-4 leading-relaxed text-muted">{profile.summary}</p>

              <div className="mt-6 border-t border-line pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Languages
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Arabic — Native', 'English — Intermediate'].map((lang) => (
                    <span
                      key={lang}
                      className="rounded-lg border border-line bg-elevated px-3 py-1.5 text-xs text-body"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, i) => {
              const Icon = serviceIcons[service.icon]
              return (
                <Reveal key={service.title} delay={i * 90}>
                  <div className="card-glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-border">
                    <div className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent/20">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-heading">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
