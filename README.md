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
npm run dev      # http://localhost:3300
```

Build & run production:

```bash
npm run build
npm start        # http://localhost:3300
```

> Port 3300 is intentional: Windows reserves `2980-3079` for Hyper-V/WSL, so binding `:3000`
> fails with `EACCES` regardless of privileges. Check the current reservations with
> `netsh int ipv4 show excludedportrange protocol=tcp` before picking another port.

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

- Latin: **JetBrains Mono** (body/mono) + **Syne** (display), self-hosted as latin variable
  subsets in `app/fonts/*.woff2` and wired through `next/font/local` in `app/layout.tsx`
  (`--font-jetbrains-mono`, `--font-syne`). No external font CSS — nothing blocks render.
- CJK: no webfont; text falls back to the system CJK face, so mixed 中/EN lines stay readable
  without a multi-megabyte download.

## Structure

```
app/            layout (fonts, providers, aurora), home page, blog routes, globals.css
components/ui/      glass atoms (Panel, Button, Pill, Specular, Aurora, toggles)
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
