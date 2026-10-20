import { profile } from '../data/profile'
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, YoutubeIcon } from './Icons'

const year = new Date().getFullYear()

export default function Footer() {
  const socials = [
    { href: profile.links.github, label: 'GitHub', Icon: GithubIcon },
    { href: profile.links.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
    { href: profile.links.youtube, label: 'YouTube', Icon: YoutubeIcon },
  ]

  return (
    <footer className="relative border-t border-line bg-bg-alt/60">
      <div className="container-page flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-heading">{profile.name}</p>
          <p className="mt-1 text-sm text-faint">
            © {year} — {profile.role}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid size-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent-border hover:text-accent"
            >
              <Icon />
            </a>
          ))}
          <a
            href={profile.links.email}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent-soft px-4 py-2.5 text-sm font-semibold text-accent-strong transition-colors hover:bg-accent/20"
          >
            Hire me
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
