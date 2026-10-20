const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function CodeIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6M13.5 4l-3 16" />
    </svg>
  )
}

export function LayersIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
    </svg>
  )
}

export function WrenchIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.2 9.2a2.1 2.1 0 0 1-3-3L16.7 10" />
      <path d="M14.7 6.3 18 3l3 3-3.3 3.3" />
    </svg>
  )
}

export function GlobeIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
    </svg>
  )
}

export function MonitorIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}

export function DashboardIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </svg>
  )
}

export function RocketIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 2c3.5 2.2 6 6 6 10l-3 3H9l-3-3c0-4 2.5-7.8 6-10Z" />
      <circle cx="12" cy="9" r="2" />
      <path d="M9 18c-1.5 1-2 3-2 4 1 0 3-.5 4-2M15 18c1.5 1 2 3 2 4-1 0-3-.5-4-2" />
    </svg>
  )
}

export function UsersIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M17.5 14.2A6.5 6.5 0 0 1 21.5 20" />
    </svg>
  )
}

export function MailIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2.5 6.5 9.5 6.5 9.5-6.5" />
    </svg>
  )
}

export function PhoneIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 3h4l2 5-2.5 1.5a12 12 0 0 0 5 5L14 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 5a2 2 0 0 1 2-2Z" />
    </svg>
  )
}

export function PinIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function GithubIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C16.5 4.7 17.5 5 17.5 5c.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  )
}

export function LinkedinIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.5h4v11H3v-11Zm7 0h3.8v1.5h.05a4.2 4.2 0 0 1 3.75-2c4 0 4.75 2.6 4.75 6v5.5h-4v-4.9c0-1.2-.02-2.7-1.7-2.7-1.7 0-1.95 1.3-1.95 2.6v5h-4v-11Z" />
    </svg>
  )
}

export function DownloadIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  )
}

export function ArrowUpRightIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function SparkIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function BriefcaseIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="2" y="7" width="20" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M2 12h20" />
    </svg>
  )
}

export function GraduationIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="m12 3 10 5-10 5L2 8l10-5Z" />
      <path d="M6 10.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5.5M22 8v6" />
    </svg>
  )
}

export function MenuIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

export function SunIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

export function MoonIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  )
}

export function YoutubeIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M23.5 6.9a3 3 0 0 0-2.1-2.1C19.5 4.3 12 4.3 12 4.3s-7.5 0-9.4.5A3 3 0 0 0 .5 6.9C0 8.8 0 12 0 12s0 3.2.5 5.1a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.1.5-5.1s0-3.2-.5-5.1ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  )
}

export function PlayIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M8 5.2v13.6a1 1 0 0 0 1.5.9l11-6.8a1 1 0 0 0 0-1.8l-11-6.8A1 1 0 0 0 8 5.2Z" />
    </svg>
  )
}
