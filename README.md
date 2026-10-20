# Abdulrahman Awad — Portfolio Landing Page

A personal landing page / portfolio for **Abdulrahman Awad**, Frontend Developer.
Built with **React 19 + Vite 8 + Tailwind CSS 4**.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script            | Purpose                                  |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the dev server with HMR            |
| `npm run build`   | Production build into `dist/`            |
| `npm run preview` | Serve the production build locally       |
| `npm run lint`    | Run oxlint                               |

## Features

- **Dark / light mode** — toggle in the navbar (moon ☾ / sun ☀). The choice is saved in
  `localStorage` and applied before first paint, so there's no flash on reload. If the
  user has never chosen, the OS preference (`prefers-color-scheme`) is used.
- **YouTube section** — an embedded player for the featured lesson plus a channel card
  and a playlist of the latest lessons with thumbnails.
- **Scroll-reveal animations** with an `IntersectionObserver` + geometry fallback.
- **Scroll-spy navbar** — the active section is highlighted while scrolling.
- **Fully responsive** — sticky navbar, slide-in mobile drawer, fluid grids.
- **No UI libraries** — icons are inline SVG (`src/components/Icons.jsx`).

## Editing the content

**Almost everything lives in one file: [`src/data/profile.js`](src/data/profile.js).**

| Export        | What it controls                                            |
| ------------- | ----------------------------------------------------------- |
| `profile`     | Name, role, summary, contact details, social links, stats  |
| `youtube`     | Channel URL, channel id, featured video + video list       |
| `skills`      | The four skill cards in the Skills section                  |
| `experience`  | The timeline entries in the Experience section             |
| `projects`    | The cards in the Selected work section                     |
| `education`   | The Education section                                      |
| `services`    | The four "what I do" cards in the About section             |
| `navLinks`    | The navbar items and their anchor ids                      |

### Before you deploy — fill in these placeholders

In `src/data/profile.js`:

- `profile.links.github` → your GitHub URL
- `profile.links.linkedin` → your LinkedIn URL

Everything else (YouTube channel, email, phone, CV) is already filled in.

### Changing the theme colours

All colours are CSS variables in `src/index.css`, defined twice — once in `:root`
(dark) and once in `.light` (light):

```css
:root { --c-bg: #04070f; --c-heading: #ffffff; /* … */ }
.light { --c-bg: #f4f7fc; --c-heading: #0b1220; /* … */ }
```

Components never hard-code a colour — they use semantic utilities such as
`bg-bg`, `text-heading`, `text-muted`, `border-line`, `bg-accent-soft`, `card-glass`.
Change a variable and the whole site re-themes.

## Project structure

```
src/
├─ components/
│  ├─ Navbar.jsx        Sticky nav, mobile drawer, scroll-spy, theme toggle
│  ├─ Hero.jsx          Photo, headline, CTAs, tech marquee
│  ├─ About.jsx         Stats, summary, what-I-do cards
│  ├─ Skills.jsx        Skill groups
│  ├─ Experience.jsx    Vertical timeline
│  ├─ Projects.jsx      Project cards
│  ├─ Videos.jsx        YouTube player + channel + playlist
│  ├─ Education.jsx     Degree + continuous learning
│  ├─ Contact.jsx       CTA card + contact channels
│  ├─ Footer.jsx
│  ├─ Reveal.jsx        Scroll-reveal wrapper (IntersectionObserver + fallback)
│  ├─ SectionHeading.jsx
│  ├─ Icons.jsx         Inline SVG icon set (no icon library)
│  └─ iconMaps.js       Key → icon lookups
├─ hooks/
│  └─ useTheme.js       Dark/light state + localStorage persistence
├─ data/profile.js      ← all site content
├─ index.css            Theme tokens, utilities, animations
└─ App.jsx
```

## Deployment

The output is a static site in `dist/`, so it can be deployed anywhere:

```bash
npm run build
```

- **Netlify / Vercel / Cloudflare Pages** — build command `npm run build`, publish directory `dist`
- **GitHub Pages** — uncomment `base: '/'` in `vite.config.js` if you host at a sub-path
- **Any static host / nginx / Apache** — just copy the contents of `dist/`
