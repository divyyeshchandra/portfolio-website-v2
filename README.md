# Personal Portfolio Website v2

A modern, minimalist developer portfolio built with Next.js 15, Tailwind CSS v4, and TypeScript. Inspired by [emanueledipietro.com](https://www.emanueledipietro.com).

## Projects Featured

- **HyperBlitz** — [hyperblitz.xyz](https://www.hyperblitz.xyz)
- **FreeMRR** — Verified startup revenue directory & live MRR leaderboard
- **PolyBucket** — Production-grade Polymarket copy-trading system with 80% consensus algorithm

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Domine (display) + Geist (body) + JetBrains Mono
- **Theme:** Dark/Light mode via `next-themes`
- **Deployment:** Vercel

## Design Reference

Design system cloned from [emanueledipietro.com](https://www.emanueledipietro.com):

- Font: Domine (serif) for all headings + Geist (sans) for body
- Letter spacing: `tracking-tighter` (-0.05em) globally
- Background: subtle dot grid pattern with gradient section fades
- Nav/Footer: frosted glass pill (`backdrop-blur`, `bg-neutral-50/50`)
- Theme: full dark/light toggle, neutral palette

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, theme provider
│   ├── page.tsx          # Home page — composes all sections
│   └── globals.css       # CSS variables, dot pattern, Tailwind
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Fixed frosted glass nav
│   │   └── Footer.tsx    # Frosted glass footer
│   ├── sections/
│   │   ├── Hero.tsx      # Intro, bio, stats
│   │   ├── Projects.tsx  # Project cards grid
│   │   ├── Experience.tsx # Timeline
│   │   └── Skills.tsx    # Skills grid
│   └── ui/               # Reusable atoms
└── lib/
    ├── projects.ts       # Project data
    ├── experience.ts     # Work/education data
    └── skills.ts         # Skills data
```

## Build Plan

See [PLAN.md](./PLAN.md) for the full milestone-by-milestone implementation plan, design specs, and component architecture.

## Deployment

```bash
vercel --prod
```

## License

MIT
