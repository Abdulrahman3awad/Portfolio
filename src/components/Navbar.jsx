import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile'
import useTheme from '../hooks/useTheme'
import { CloseIcon, GithubIcon, LinkedinIcon, MenuIcon, MoonIcon, SunIcon, YoutubeIcon } from './Icons'

function ThemeToggle({ theme, onToggle, className = '' }) {
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Dark mode' : 'Light mode'}
      className={`group relative grid size-9 place-items-center overflow-hidden rounded-lg border border-line text-muted transition-colors hover:border-accent-border hover:text-accent ${className}`}
    >
      <span
        className={`absolute transition-all duration-300 ${
          isLight
            ? 'translate-y-0 opacity-100 rotate-0'
            : '-translate-y-6 opacity-0 -rotate-90'
        }`}
      >
        <SunIcon />
      </span>
      <span
        className={`absolute transition-all duration-300 ${
          isLight
            ? 'translate-y-6 opacity-0 rotate-90'
            : 'translate-y-0 opacity-100 rotate-0'
        }`}
      >
        <MoonIcon />
      </span>
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean)

      const marker = window.scrollY + window.innerHeight * 0.32
      let current = sections[0]?.id ?? 'home'

      for (const section of sections) {
        if (section.offsetTop <= marker) current = section.id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const socialLinks = [
    { href: profile.links.github, label: 'GitHub', Icon: GithubIcon },
    { href: profile.links.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
    { href: profile.links.youtube, label: 'YouTube', Icon: YoutubeIcon },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-nav backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-18 items-center justify-between py-4">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="relative grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-base font-bold text-white shadow-lg shadow-brand-600/30 transition-transform duration-300 group-hover:scale-105">
            AA
            <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-heading sm:block">
            Abdulrahman<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === link.id ? 'text-accent-strong' : 'text-muted hover:text-heading'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:flex">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent-border hover:text-accent"
            >
              <Icon />
            </a>
          ))}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a
            href="#contact"
            className="ml-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-primary-hover hover:shadow-brand-500/40"
          >
            Hire me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="grid size-10 place-items-center rounded-lg border border-line text-body lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line bg-nav backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'bg-accent-soft text-accent-strong'
                    : 'text-muted hover:bg-elevated hover:text-heading'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex items-center gap-2 border-t border-line pt-4">
            <a
              href={profile.links.email}
              onClick={() => setOpen(false)}
              className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get in touch
            </a>
            <ThemeToggle theme={theme} onToggle={toggleTheme} className="size-10" />
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-lg border border-line text-body"
              >
                <Icon />
              </a>
            ))}
          </li>
        </ul>
      </div>
    </header>
  )
}
