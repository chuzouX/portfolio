# Liquid Glass — Personal Homepage

A bilingual (中文 / English), dark-and-light personal homepage & portfolio built with a
**liquid-glass** aesthetic: frosted translucent panels, an animated aurora background that the
glass refracts, pointer-tracking specular highlights, and motion-driven scroll reveals.

## Tech stack

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS v4** (CSS-first tokens in `app/globals.css`)
- **Framer Motion** — entrance / scroll / hover motion (respects `prefers-reduced-motion`)
- **next-themes** — dark / light toggle (default: dark)
- Lightweight **i18n** — `{ en, zh }` content + a context toggle (no URL routing)
- **next-mdx-remote** — bilingual MDX blog posts
- **lucide-react** — SVG icons

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Build & run production:

```bash
npm run build
npm start
```

> Note: if `lucide-react` / `framer-motion` resolve to a newer major than pinned in
> `package.json`, that's fine — they're app deps, not libraries.

## Where to edit your content

All page content lives in `content/` as `{ en, zh }` objects — replace the placeholders:

| File | What |
|------|------|
| `content/profile.ts` | Name, role, tagline, bio, location, email, socials, focus areas |
| `content/projects.ts` | Projects (+ categories). `cover` is a CSS gradient — swap for `next/image` |
| `content/experience.ts` | Work & education timeline |
| `content/skills.ts` | Skill groups |
| `content/posts.ts` | Blog posts (body is MDX, **avoid backticks** in the strings) |

UI labels (nav, buttons, form…) live in `lib/i18n/dictionaries.ts`.

## Design system

Tokens are CSS variables in `app/globals.css`, swapped per theme via `:root/.dark` and `.light`:

- **Colors** — `--bg-base`, `--text`, `--text-muted`, `--accent` (+ `-2/-3` for the iridescent ramp)
- **Glass** — `--glass-bg`, `--glass-border`, `--glass-highlight`, `--blur`, `--saturate`
  (the `.glass` / `.glass-strong` recipes, with a `@supports` fallback for browsers without
  `backdrop-filter`)
- **Aurora** — `--aurora-1..4`; rendered by `components/ui/AuroraBackground.tsx`

To re-skin, change `--accent*` and `--aurora*`. The filled buttons use a fixed indigo→violet
gradient so white text keeps ≥4.5:1 contrast in **both** themes.

### Fonts

- Latin: **Space Grotesk** (display) + **Inter** (body) via `next/font`.
- CJK: **Noto Sans SC** via a Google Fonts `<link>` in `app/layout.tsx` (unicode-range subsetting
  keeps the download small). The font stacks fall back so mixed 中/EN text renders correctly.

## Structure

```
app/            layout (fonts, providers, aurora), home page, blog routes, globals.css
components/ui/      glass atoms (Panel, Button, Pill, Specular, Aurora, toggles)
components/motion/  Reveal + shared variants
components/sections/ Navbar, Hero, About, Projects, SkillsExperience, BlogTeaser, Contact, Footer, blog views
content/        bilingual data
lib/            cn() util + i18n (provider, dictionaries, config)
```

## Accessibility & performance notes

- Body text uses solid (non-translucent) colors over glass for contrast; focus rings are visible.
- All motion respects `prefers-reduced-motion` (aurora freezes, reveals become static).
- `backdrop-filter` is GPU-heavy — the number of stacked glass layers is kept small.
- Touch targets are ≥44px; the contact form validates on submit and falls back to `mailto:`.

## Deploy

Works out of the box on **Vercel** (`vercel`) or any Node host (`npm run build && npm start`).
