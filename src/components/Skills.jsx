import { skills } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { skillIcons } from './iconMaps'

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/3 size-80 rounded-full bg-brand-700/15 blur-[120px]" />
      </div>

      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="My toolkit"
            subtitle="The stack I reach for most often to build responsive, maintainable interfaces."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => {
            const Icon = skillIcons[group.icon]
            return (
              <Reveal key={group.title} delay={i * 100}>
                <div className="card-glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-border">
                  {/* hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent/20">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-heading">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                        <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
