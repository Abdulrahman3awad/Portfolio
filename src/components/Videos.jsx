import { youtube } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { ArrowUpRightIcon, PlayIcon, YoutubeIcon } from './Icons'

export default function Videos() {
  const featured = youtube.featured

  return (
    <section id="videos" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-24 size-80 rounded-full bg-brand-600/15 blur-[120px]" />
      </div>

      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Videos"
            title="Watch me teach"
            subtitle="Six years of teaching, published weekly — explaining programming concepts in Arabic, step by step."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.45fr_1fr]">
          {/* Player */}
          <Reveal>
            <div className="card-glass overflow-hidden rounded-2xl p-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${featured.id}?rel=0&modestbranding=1`}
                  title={`${youtube.channelName} — ${featured.title}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 size-full"
                />
              </div>

              <div className="flex flex-wrap items-start justify-between gap-4 px-3 py-4">
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold text-heading">
                    {featured.title}
                  </h3>
                  <p className="mt-1 text-xs text-faint">{youtube.tagline}</p>
                </div>
                <a
                  href={youtube.channelUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-line bg-elevated px-3.5 py-2 text-sm font-semibold text-body transition-colors hover:border-accent-border hover:text-accent"
                >
                  <YoutubeIcon className="size-4 text-[#ff0033]" />
                  Channel
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Channel + playlist */}
          <Reveal delay={120}>
            <div className="card-glass flex h-full flex-col rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#ff0033]/15 text-[#ff0033]">
                  <YoutubeIcon className="size-6" />
                </span>
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-semibold text-heading">
                    {youtube.channelName}
                  </p>
                  <p className="text-xs text-faint">YouTube channel</p>
                </div>
              </div>

              <a
                href={youtube.channelUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff0033] px-5 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                <PlayIcon className="size-4" />
                Subscribe
              </a>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Latest lessons
              </p>

              <ul className="mt-3 flex-1 space-y-2">
                {youtube.videos.map((video) => (
                  <li key={video.id}>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-line bg-surface-2 p-2 transition-colors hover:border-accent-border"
                    >
                      <span className="relative shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                          alt=""
                          loading="lazy"
                          width={120}
                          height={68}
                          className="h-11 w-20 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="absolute inset-0 grid place-items-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                          <PlayIcon className="size-4 text-white" />
                        </span>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="line-clamp-2 block text-xs leading-relaxed text-body">
                          {video.title}
                        </span>
                        <span className="mt-0.5 block text-[0.65rem] text-faint">
                          {video.meta}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
