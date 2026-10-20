import { profile } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon, YoutubeIcon } from './Icons'

const channels = [
  {
    key: 'email',
    label: 'Email',
    value: profile.email,
    href: profile.links.email,
    icon: MailIcon,
  },
  {
    key: 'phone',
    label: 'Phone',
    value: profile.phone,
    href: profile.links.phone,
    icon: PhoneIcon,
  },
  {
    key: 'location',
    label: 'Location',
    value: profile.location,
    href: null,
    icon: PinIcon,
  },
]

export default function Contact() {
  const socials = [
    { href: profile.links.github, label: 'GitHub', Icon: GithubIcon },
    { href: profile.links.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
    { href: profile.links.youtube, label: 'YouTube', Icon: YoutubeIcon },
  ]

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 size-[34rem] -translate-x-1/2 rounded-full bg-brand-600/15 blur-[130px]" />
      </div>

      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together"
            subtitle="Available for internships and frontend roles. If you have a product in mind, I'd love to hear about it."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* CTA card */}
          <Reveal>
            <div className="card-glass relative h-full overflow-hidden rounded-2xl p-8 sm:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-brand-500/10 blur-3xl" />

              <h3 className="font-display text-2xl font-bold text-heading">
                {profile.availability}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                I respond to every message. Whether it's a full-time role, a freelance
                project or a question about my work — let's talk.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={profile.links.email}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:brightness-110"
                >
                  <MailIcon className="size-4" />
                  {profile.email}
                </a>
                <a
                  href={profile.links.phone}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-line-strong bg-elevated px-6 py-3.5 text-sm font-semibold text-body transition-all hover:border-accent-border hover:text-heading"
                >
                  <PhoneIcon className="size-4 text-accent" />
                  {profile.phone}
                </a>
              </div>

              {/* Socials */}
              <div className="mt-9 flex items-center gap-3 border-t border-line pt-7">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-xl border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-accent-border hover:text-accent"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
                <span className="ml-2 text-sm text-faint">Find me on GitHub, LinkedIn &amp; YouTube</span>
              </div>
            </div>
          </Reveal>

          {/* Channel list */}
          <div className="space-y-4">
            {channels.map((channel, i) => {
              const Icon = channel.icon
              const Wrapper = channel.href ? 'a' : 'div'
              return (
                <Reveal key={channel.key} delay={i * 100}>
                  <Wrapper
                    {...(channel.href ? { href: channel.href } : {})}
                    className="card-glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-border"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent/20">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-faint">{channel.label}</p>
                      <p className="truncate font-medium text-heading">{channel.value}</p>
                    </div>
                  </Wrapper>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
