import { profile } from '../data/profile'
import { ArrowUpRightIcon, DownloadIcon, GithubIcon, PinIcon, SparkIcon, YoutubeIcon } from './Icons'

const tech = ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Git', 'REST APIs', 'Supabase']

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0 mask-fade-x opacity-70" />
        <div className="absolute -top-32 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[130px]" />
        <div className="absolute right-0 top-40 size-72 rounded-full bg-glow/10 blur-[100px]" />
        <div className="absolute left-0 bottom-0 size-80 rounded-full bg-brand-700/15 blur-[110px]" />
      </div>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* ------------------------------- Text ------------------------------- */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <div className="animate-slide-up inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-soft px-4 py-1.5 text-xs font-medium text-accent-strong">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </div>

          <h1
            className="animate-slide-up mt-7 font-display text-4xl font-bold leading-[1.08] tracking-tight text-heading sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '80ms' }}
          >
            Hi, I'm{' '}
            <span className="text-gradient">Abdulrahman Awad</span>
          </h1>

          <p
            className="animate-slide-up mt-3 font-display text-xl font-medium text-accent-strong sm:text-2xl"
            style={{ animationDelay: '140ms' }}
          >
            {profile.role}
          </p>

          <p
            className="animate-slide-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted lg:mx-0"
            style={{ animationDelay: '200ms' }}
          >
            {profile.summary}
          </p>

          <div
            className="animate-slide-up mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
            style={{ animationDelay: '260ms' }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-600/25 transition-all hover:shadow-brand-500/40 hover:brightness-110"
            >
              View my work
              <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.cvFile}
              download
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-line-strong bg-elevated px-6 py-3.5 text-sm font-semibold text-body transition-all hover:border-accent-border hover:text-heading"
            >
              <DownloadIcon className="size-4 text-accent transition-transform group-hover:translate-y-0.5" />
              Download CV
            </a>
          </div>

          <div
            className="animate-slide-up mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted lg:justify-start"
            style={{ animationDelay: '320ms' }}
          >
            <span className="inline-flex items-center gap-2">
              <PinIcon className="size-4 text-accent" />
              {profile.location}
            </span>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent-strong"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={profile.links.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent-strong"
            >
              <YoutubeIcon className="size-4" />
              YouTube
            </a>
          </div>
        </div>

        {/* ------------------------------- Photo ------------------------------ */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Glow + orbit ring */}
            <div className="animate-pulse-glow absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-brand-600/25 via-glow/10 to-transparent blur-2xl" />
            <div
              className="animate-orbit absolute -inset-3 rounded-[2rem] border border-accent-border"
              style={{ animationDuration: '26s' }}
            >
              <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_14px_4px_rgba(77,163,255,0.65)]" />
            </div>

            {/* Photo card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-2 shadow-2xl shadow-black/30">
              <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/70 to-transparent" />
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt={`${profile.name} — ${profile.role}`}
                width={1200}
                height={1200}
                className="w-full rounded-[1.6rem] object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/15" />
            </div>

            {/* Floating chips */}
            <div className="absolute -left-3 top-12 hidden animate-float items-center gap-2 rounded-xl border border-line bg-surface px-3.5 py-2.5 shadow-xl shadow-black/30 backdrop-blur sm:flex">
              <SparkIcon className="size-4 text-glow" />
              <span className="text-xs font-semibold text-body">React &amp; Next.js</span>
            </div>

            <div
              className="animate-float-slow absolute -right-2 bottom-16 hidden items-center gap-2 rounded-xl border border-line bg-surface px-3.5 py-2.5 shadow-xl shadow-black/30 backdrop-blur sm:flex"
            >
              <span className="grid size-7 place-items-center rounded-lg bg-accent-soft text-[0.65rem] font-bold text-accent-strong">
                3+
              </span>
              <span className="text-xs font-semibold text-body">Years experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------- Tech marquee --------------------------- */}
      <div className="container-page mt-20">
        <div className="mask-fade-x relative overflow-hidden">
          <div className="animate-marquee flex w-max gap-3">
            {[...tech, ...tech].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="shrink-0 rounded-full border border-line bg-elevated px-5 py-2 text-sm font-medium text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
