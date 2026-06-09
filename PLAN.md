# Portfolio Website — Full Build Plan

**Reference:** [emanueledipietro.com](https://www.emanueledipietro.com)  
**Projects to showcase:** HyperBlitz · FreeMRR · PolyBucket  
**Stack:** Next.js 15 (App Router) · Tailwind CSS v4 · TypeScript  

---

## Research Summary

### Reference Site Analysis (emanueledipietro.com)

| Property | Value |
|---|---|
| Framework | Next.js (App Router) + Turbopack |
| CSS | Tailwind CSS v4 |
| Fonts | Domine (display/headings serif) + Geist (body sans) + Geist Mono + JetBrains Mono |
| Theme | Light/Dark toggle (default: Light) |
| Max-width | 1440px, centered |
| Section height | `min-h-screen` per section |
| Letter spacing | `tracking-tighter` (-0.05em) globally |
| Border radius base | 0.625rem (10px) |
| Deployment | Vercel |

### Projects Researched

#### HyperBlitz (hyperblitz.xyz)
- Site is a JavaScript SPA — content not publicly crawlable
- **Action needed:** User to provide description, tagline, tech stack, screenshots
- Placeholder content used until user provides details

#### FreeMRR (nexussstudio.com/portfolio/freemrr)
- **What:** Verified startup revenue directory + live MRR leaderboard
- **Tagline:** "A zero-friction verified startup revenue directory and live MRR leaderboard."
- **Tech:** Next.js 14, TypeScript, TailwindCSS, Framer Motion, Supabase, Stripe Connect, AES-256
- **Design aesthetic:** Bloomberg terminal style — neon-blue accents on dark palette
- **Status:** Live at freemrr.com

#### PolyBucket (nexussstudio.com/portfolio/polybucket)
- **What:** Production-grade Polymarket copy-trading system with 80% consensus algorithm
- **Tagline:** "The first production-grade Polymarket copy-trading system implementing an 80% consensus algorithm."
- **Tech:** Go, Next.js, Fly.io, Vercel Edge, Supabase PostgreSQL 16, Upstash Redis, Polygon mainnet, Alchemy RPC, EIP-712
- **Status:** Coming Soon

---

## Breakpoint System

### Tailwind v4 Custom Breakpoints

All standard Tailwind breakpoints are kept, plus three new ones added for large monitors and TVs:

```css
/* globals.css — @theme block */
@theme {
  --breakpoint-xs:  320px;   /* smallest phones (iPhone SE 1st gen) */
  --breakpoint-sm:  640px;   /* default Tailwind sm */
  --breakpoint-md:  768px;   /* default Tailwind md */
  --breakpoint-lg:  1024px;  /* default Tailwind lg */
  --breakpoint-xl:  1280px;  /* default Tailwind xl */
  --breakpoint-2xl: 1536px;  /* default Tailwind 2xl */
  --breakpoint-3xl: 1920px;  /* Full HD monitors / large TVs */
  --breakpoint-4xl: 2560px;  /* 2K / QHD monitors */
  --breakpoint-5xl: 3840px;  /* 4K UHD TVs */
}
```

### Screen Size Targets

| Name | Range | Devices |
|---|---|---|
| `xs` | 320–374px | iPhone SE (1st/2nd gen), budget Androids |
| `sm` (mobile) | 375–639px | iPhone 14, Galaxy S series, standard phones |
| `md` (tablet-sm) | 640–767px | Large phones landscape, iPad Mini portrait |
| `lg` (tablet) | 768–1023px | iPad, iPad Air, iPad Pro 11", tablets |
| `xl` (laptop) | 1024–1279px | MacBook Air 13", Surface Pro, small laptops |
| `2xl` (desktop) | 1280–1535px | MacBook Pro 14", standard laptop monitors |
| `3xl` (large) | 1536–1919px | iMac 24", Dell 27", large desktop monitors |
| `4K / 3xl+` | 1920–2559px | Full HD 27"+ monitors, 1080p TVs |
| `2K / 4xl` | 2560–3839px | QHD / 2K monitors, MacBook Pro 16" Liquid Retina |
| `4K / 5xl` | 3840px+ | 4K UHD TVs, studio monitors |

### Container Strategy

```
All sections use:  w-full  (full viewport width)
Inner wrapper:     max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 3xl:px-16
```

At 3xl+ (1920px+) the max-width cap lifts to `max-w-[1920px]` so the layout breathes on large monitors without leaving massive dead space.

At 4xl+ (2560px+) max-width lifts to `max-w-[2200px]` and base font sizes scale up.

```css
/* Fluid font scaling for very large screens */
@media (min-width: 1920px) {
  html { font-size: 18px; }  /* scales all rem values up ~12% */
}
@media (min-width: 2560px) {
  html { font-size: 20px; }  /* scales all rem values up ~25% */
}
@media (min-width: 3840px) {
  html { font-size: 24px; }  /* scales all rem values up ~50% for 4K */
}
```

---

## Color System (Exact Match)

### Light Mode (`:root`)

```css
--background: #ffffff;
--foreground: #0a0a0a;
--card: #ffffff;
--cards-background: #f8f8f8;
--primary: #171717;
--primary-foreground: #fafafa;
--secondary: #f5f5f5;
--muted: #f5f5f5;
--muted-foreground: #737373;
--accent: #f5f5f5;
--border: #e5e5e5;
--input: #e5e5e5;
--ring: #a1a1a1;
--radius: 0.625rem;
```

### Dark Mode (`.dark`)

```css
--background: #0a0a0a;
--foreground: #fafafa;
--card: #171717;
--muted: #262626;
--muted-foreground: #a1a1a1;
--border: rgba(255,255,255,0.1);
--secondary: #262626;
--accent: #262626;
```

### Background Pattern

```css
/* Light */
background-image: radial-gradient(circle at .75px .75px, #78787821 .75px, transparent 0);
background-size: 10px 10px;

/* Dark */
background-image: radial-gradient(circle at .75px .75px, #c8c8c80d .75px, transparent 0);
background-size: 10px 10px;
```

### Section Gradient Overlays

```css
.hero-gradient {
  background: linear-gradient(to bottom, transparent 0%, transparent 40%, var(--background) 100%);
}
.hero-gradient-top {
  background: linear-gradient(to top, transparent 0%, transparent 40%, var(--background) 100%);
}
```

---

## Typography System (Exact Match)

### Font Families

| Variable | Font | Usage |
|---|---|---|
| `--font-geist-sans` | Geist | Body, UI elements, nav links |
| `--font-geist-mono` | Geist Mono | Monospace code snippets |
| `--font-jetbrains-mono` | JetBrains Mono | Labels, metadata |
| `--font-domine` | Domine | All section headings, stats numbers, hero bio, project titles |

### Responsive Font Size Scale

| Element | xs/sm (mobile) | md (tablet) | lg/xl (laptop) | 2xl/3xl (desktop) | 4K+ |
|---|---|---|---|---|---|
| Hero name | `text-base` (16px) | `text-lg` (18px) | `text-lg` (18px) | `text-xl` (20px) | `text-2xl` (24px) |
| Hero bio | `text-xl` (20px) | `text-2xl` (24px) | `text-3xl` (30px) | `text-3xl` (30px) | `text-4xl` (36px) |
| Section h2 | `text-2xl` (24px) | `text-2xl` (24px) | `text-3xl` (30px) | `text-3xl` (30px) | `text-4xl` (36px) |
| Stat numbers | `text-2xl` (24px) | `text-2xl` (24px) | `text-3xl` (30px) | `text-3xl` (30px) | `text-4xl` (36px) |
| Project titles | `text-xl` (20px) | `text-xl` (20px) | `text-2xl` (24px) | `text-2xl` (24px) | `text-3xl` (30px) |
| Body/desc | `text-sm` (14px) | `text-sm` (14px) | `text-sm` (14px) | `text-base` (16px) | `text-lg` (18px) |
| Labels/tags | `text-xs` (12px) | `text-xs` (12px) | `text-xs` (12px) | `text-xs` (12px) | `text-sm` (14px) |

### Global Rules

```css
body {
  font-family: var(--font-geist-sans);
  letter-spacing: -0.05em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## Responsive Padding & Spacing Scale

| Breakpoint | Section padding | Inner px | Gap |
|---|---|---|---|
| xs/sm (mobile) | `p-4` (16px) | `px-4` | `gap-3` |
| md (tablet) | `p-5` (20px) | `px-5` | `gap-4` |
| lg (tablet-lg) | `p-6` (24px) | `px-6` | `gap-4` |
| xl (laptop) | `p-6` (24px) | `px-8` | `gap-4` |
| 2xl (desktop) | `p-8` (32px) | `px-10` | `gap-5` |
| 3xl+ (large) | `p-10` (40px) | `px-12` | `gap-6` |
| 4K+ | `p-12` (48px) | `px-16` | `gap-8` |

Tailwind shorthand per section wrapper:
```
className="p-4 sm:p-5 md:p-6 xl:p-8 3xl:p-10"
```

---

## Component Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout: font loading, theme provider, meta
│   ├── page.tsx            # Home: composes all sections
│   └── globals.css         # Tailwind @theme + CSS variables + patterns
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed frosted glass nav pill
│   │   └── Footer.tsx      # Frosted glass footer, social links
│   ├── sections/
│   │   ├── Hero.tsx        # Photos, name, tags, bio, stats grid, scroll CTA
│   │   ├── Projects.tsx    # Responsive project cards grid
│   │   ├── Experience.tsx  # Timeline entries
│   │   └── Skills.tsx      # Responsive skills grid
│   └── ui/
│       ├── StatCard.tsx    # Reusable stat card
│       ├── ProjectCard.tsx # Reusable project card
│       ├── SkillCard.tsx   # Reusable skill card
│       ├── InterestTag.tsx # Pill-shaped interest tag
│       ├── ThemeToggle.tsx # Dark/light mode button
│       └── ScrollCTA.tsx   # Bouncing arrow + label
├── lib/
│   ├── fonts.ts            # next/font configuration
│   ├── projects.ts         # Project data
│   ├── experience.ts       # Work/education data
│   └── skills.ts           # Skills data
└── public/
    ├── images/
    │   ├── profile.jpg
    │   ├── projects/
    │   └── logos/
    └── logo.svg
```

---

## Milestones

---

### Milestone 1 — Project Setup & Design System

**Goal:** Scaffold the Next.js project with the exact font, color, spacing, and breakpoint system.

**Tasks:**

1. **Initialize project**
   ```bash
   npx create-next-app@latest . --typescript --tailwind --app --src-dir --no-import-alias
   ```

2. **Install dependencies**
   ```bash
   npm install geist next-themes
   ```

3. **Configure fonts in `src/lib/fonts.ts`**
   - Geist Sans → `next/font/google` or bundled `geist` package
   - Geist Mono → same
   - JetBrains Mono → `next/font/google`
   - Domine → `next/font/google`
   - Each exports a CSS variable name

4. **Write `src/app/globals.css`**
   ```css
   @import "tailwindcss";

   @theme {
     /* Custom breakpoints */
     --breakpoint-xs:  320px;
     --breakpoint-3xl: 1920px;
     --breakpoint-4xl: 2560px;
     --breakpoint-5xl: 3840px;

     /* Font families */
     --font-sans:         var(--font-geist-sans);
     --font-mono:         var(--font-geist-mono);
     --font-domine:       var(--font-domine);
     --font-jetbrains:    var(--font-jetbrains-mono);

     /* Max widths per tier */
     --container-max-desktop: 1440px;
     --container-max-large:   1920px;
     --container-max-2k:      2200px;
   }

   /* Light mode tokens */
   :root {
     --background: #ffffff;
     --foreground: #0a0a0a;
     --card: #ffffff;
     --cards-background: #f8f8f8;
     --primary: #171717;
     --primary-foreground: #fafafa;
     --secondary: #f5f5f5;
     --muted: #f5f5f5;
     --muted-foreground: #737373;
     --accent: #f5f5f5;
     --border: #e5e5e5;
     --ring: #a1a1a1;
     --radius: 0.625rem;
   }

   /* Dark mode tokens */
   .dark {
     --background: #0a0a0a;
     --foreground: #fafafa;
     --card: #171717;
     --muted: #262626;
     --muted-foreground: #a1a1a1;
     --border: rgba(255, 255, 255, 0.1);
     --secondary: #262626;
     --accent: #262626;
   }

   /* Dot grid background */
   .dot-pattern {
     background-image: radial-gradient(circle at .75px .75px, #78787821 .75px, transparent 0);
     background-size: 10px 10px;
   }
   .dark .dot-pattern {
     background-image: radial-gradient(circle at .75px .75px, #c8c8c80d .75px, transparent 0);
   }

   /* Gradient overlays */
   .hero-gradient {
     background: linear-gradient(to bottom, transparent 0%, transparent 40%, var(--background) 100%);
   }
   .hero-gradient-top {
     background: linear-gradient(to top, transparent 0%, transparent 40%, var(--background) 100%);
   }

   /* Muted filler-word text */
   .second-text { color: var(--muted-foreground); }

   /* Global base */
   html { scroll-behavior: smooth; }
   body {
     font-family: var(--font-geist-sans), sans-serif;
     letter-spacing: -0.05em;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     background-color: var(--background);
     color: var(--foreground);
   }

   /* Fluid base font for large screens */
   @media (min-width: 1920px) { html { font-size: 18px; } }
   @media (min-width: 2560px) { html { font-size: 20px; } }
   @media (min-width: 3840px) { html { font-size: 24px; } }
   ```

5. **Set up `src/app/layout.tsx`**
   - Apply font CSS variables to `<html>`
   - Wrap with `ThemeProvider` from `next-themes` (`attribute="class"`, `defaultTheme="light"`)
   - Set metadata: title, description, viewport
   - Viewport meta: `width=device-width, initial-scale=1` (ensures correct scaling on all devices)

**Deliverable:** `npm run dev` shows blank page with correct fonts, dot pattern, and dark/light toggle working across all screen sizes.

---

### Milestone 2 — Navigation Component

**Goal:** Build the frosted glass nav pill that works from 320px phones to 4K TVs.

#### Responsive Behavior

| Screen | Behavior |
|---|---|
| xs (320–374px) | Logo only + hamburger menu icon; nav links hidden behind drawer |
| sm (375–639px) | Logo + 3 icon links + theme toggle; no hamburger |
| md+ (768px+) | Logo + 3 icon links + theme toggle + social icon |
| 3xl+ (1920px+) | Slightly larger icon sizes; nav pill widens with max-width container |
| 4K+ | Icons scale up via `rem` fluid sizing; no layout change |

#### Design Spec

```
Position:     fixed top-0 left-0 right-0 z-50
Background:   bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm
Border:       border border-border border-t-0
Shape:        rounded-b-3xl
Padding:      px-4 py-2  sm:px-6  xl:px-8  3xl:px-10
Max-width:    max-w-[1440px] mx-auto  3xl:max-w-[1920px]
Layout:       flex justify-between items-center w-full
```

#### Left — Logo
```
Size:   size-5  sm:size-6  3xl:size-8
Src:    /logo.svg (light) / /logo-white.svg (dark) — theme-aware
```

#### Center — Nav Links (hidden xs, shown sm+)
```
Links:  hidden sm:flex gap-1
Each:   p-2 rounded-full text-muted-foreground
        hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors
Icon:   size-4  sm:size-5  3xl:size-6
Active: bg-neutral-200/70 dark:bg-neutral-800/70 text-foreground
```

#### Right — Controls
```
ThemeToggle:  size-8 sm:size-9 3xl:size-10 rounded-full
Social icon:  hidden sm:flex — same sizing as theme toggle
Hamburger:    flex sm:hidden — opens mobile drawer
```

#### Mobile Drawer (xs only)
```
Overlay:  fixed inset-0 bg-black/40 backdrop-blur-xs z-40
Panel:    fixed top-0 right-0 h-full w-64 bg-background border-l border-border p-6
          slide-in from right, transition-transform duration-300
Links:    full text labels (not icon-only) at text-base
Close:    X button top-right
```

**Tasks:**
1. `src/components/layout/Navbar.tsx` — full responsive nav
2. `src/components/ui/ThemeToggle.tsx` — `next-themes` toggle
3. `src/components/ui/MobileDrawer.tsx` — xs drawer
4. Add `scroll-mt-16 sm:scroll-mt-20` to all anchor sections (accounts for nav height)

**Deliverable:** Nav renders perfectly at 320px, 375px, 768px, 1440px, 1920px, and 3840px. Mobile drawer opens/closes smoothly.

---

### Milestone 3 — Hero Section

**Goal:** Build the full hero section with every sub-component fully responsive across all screens.

#### Section-Level Spec

```
Height:     min-h-screen
Padding:    p-4 sm:p-5 md:p-6 xl:p-8 3xl:p-10
Max-width:  max-w-[1440px] mx-auto 3xl:max-w-[1920px] 4xl:max-w-[2200px]
Pattern:    dot-pattern with hero-gradient overlay at bottom
```

---

#### 3a. Photo Stack

| Screen | Width | Offset | Rotation |
|---|---|---|---|
| xs | `w-16` each | `-space-x-3` | `-rotate-3` / `rotate-3` |
| sm | `w-20` each | `-space-x-4` | `-rotate-5` / `rotate-5` |
| md | `w-24` each | `-space-x-4` | same |
| lg+ | `w-32 md:w-40` each | `-space-x-4` | same |
| 3xl+ | `w-48` each | `-space-x-5` | same |
| 4K+ | Scales via `rem` fluid sizing | same | same |

```
Each image:   rounded-xl ring-2 sm:ring-3 ring-border/50 shadow-md aspect-square object-cover
```

---

#### 3b. Name + Verification Line

| Screen | Font size | Layout |
|---|---|---|
| xs/sm | `text-base` | flex-col (QR button wraps below on xs) |
| md+ | `text-lg` | flex-row with QR on right |
| 3xl+ | `text-xl` | same as md+ |
| 4K+ | `text-2xl` (fluid via rem scale) | same |

```
Font:      font-domine font-medium
Name:      hover:underline
Checkmark: size-4 sm:size-5 text-blue-500
QR button: hidden xs:flex (hidden on 320px only)
```

---

#### 3c. Interest Tags

| Screen | Behavior |
|---|---|
| xs/sm | Wrap freely; `flex flex-wrap gap-1.5` |
| md+ | Same, but tags are slightly larger |
| 3xl+ | Larger gap `gap-2`, font stays `text-xs` |

```
Each tag:   ring-1 ring-border/50 bg-neutral-50 dark:bg-neutral-900 rounded-sm
            text-xs px-2.5 py-0.5 select-none cursor-pointer
            hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors
            active:scale-95 (touch feedback on mobile)
```

---

#### 3d. Bio Paragraph

| Screen | Font size |
|---|---|
| xs | `text-lg` (18px) |
| sm | `text-xl` (20px) |
| md | `text-2xl` (24px) |
| lg/xl | `text-3xl` (30px) |
| 2xl+ | `text-3xl` (30px) |
| 3xl+ | `text-4xl` (36px) via fluid rem |
| 4K+ | `text-5xl` via fluid rem |

```
Font:    font-domine font-medium
Pattern: [.second-text filler words] [foreground key nouns]
```

---

#### 3e. Stats Grid

| Screen | Columns | Card padding |
|---|---|---|
| xs | 2-col | `p-2.5` |
| sm | 2-col | `p-3` |
| md | 2-col | `p-3` |
| lg | 4-col | `p-3` |
| xl+ | 4-col | `p-4` |
| 3xl+ | 4-col | `p-5` |
| 4K+ | 4-col (wider) | scales via rem |

```
Grid:   grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4
Card:   ring-1 ring-border/50 bg-neutral-50 dark:bg-neutral-900 rounded-xl
        hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors
        active:scale-98 (touch feedback)
Number: font-domine text-2xl sm:text-2xl lg:text-3xl font-medium lg:font-semibold
Label:  text-xs sm:text-sm text-muted-foreground
```

---

#### 3f. Scroll CTA

```
Layout: flex flex-col items-center gap-1 pt-[5%] sm:pt-[8%] lg:pt-[10%]
Font:   font-domine text-sm sm:text-base text-muted-foreground
Arrow:  animate-bounce size-4 sm:size-5
Hidden: hidden sm:flex (completely hidden on xs — not enough space)
```

**Tasks:**
1. `src/components/ui/StatCard.tsx`
2. `src/components/ui/InterestTag.tsx`
3. `src/components/ui/ScrollCTA.tsx`
4. `src/components/sections/Hero.tsx`
5. Test at 320px, 375px, 430px, 768px, 1024px, 1440px, 1920px, 2560px, 3840px

**Deliverable:** Hero looks correct on every listed breakpoint. No horizontal overflow at 320px.

---

### Milestone 4 — Projects Section

**Goal:** Build the project cards grid that adapts from 1 column to 3 columns.

#### Section-Level Spec

```
id="projects"
Padding:    p-4 sm:p-5 md:p-6 xl:p-8 3xl:p-10
scroll-mt:  scroll-mt-16 sm:scroll-mt-20
```

#### Grid Layout

| Screen | Columns | Card gap |
|---|---|---|
| xs/sm | 1-col | `gap-3` |
| md | 1-col | `gap-4` |
| lg | 2-col | `gap-4` |
| xl/2xl | 2-col | `gap-4` |
| 3xl+ | 3-col | `gap-5` |
| 4K+ | 3-col (wider) | `gap-6` |

```
Grid: grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-3 sm:gap-4 3xl:gap-5
```

#### Project Card Spec

```
Container:   ring-1 ring-border/50 bg-neutral-50 dark:bg-neutral-900
             rounded-2xl md:rounded-3xl overflow-hidden
             hover:shadow-lg hover:bg-accent/50 hover:-translate-y-1.5
             transition-all duration-300 cursor-pointer
             focus-visible:outline-2 focus-visible:outline-ring (keyboard accessible)

Image area:  w-full aspect-video sm:aspect-[16/9] object-cover
             bg-neutral-100 dark:bg-neutral-800 (placeholder bg)

Body:        p-3 sm:p-4 xl:p-5 3xl:p-6

Title:       font-domine text-xl sm:text-xl lg:text-2xl font-medium lg:font-semibold

Description: text-xs sm:text-sm text-muted-foreground mt-1

Tech tags:   flex flex-wrap gap-1 mt-2
             Each: text-xs px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700
                   text-muted-foreground

Status badge:"Live" (green) / "Coming Soon" (yellow) / "WIP" (blue)
             text-xs px-2 py-0.5 rounded-full font-medium
```

#### Last Card on Odd Count (3 projects → 2-col grid)
At `lg` (2-col), the 3rd project card is full-width:
```
Last child when grid is 2-col:  lg:col-span-2  (stretches across both columns)
At 3xl (3-col):                  reset to normal col-span-1
```

**Tasks:**
1. `src/components/ui/ProjectCard.tsx`
2. `src/components/sections/Projects.tsx`
3. `src/lib/projects.ts` — typed data file

**Deliverable:** 3 cards render correctly at all breakpoints, last card full-width on 2-col desktop, status badges visible, hover animations working.

---

### Milestone 5 — Experience Section

**Goal:** Build the timeline with a layout that collapses gracefully on small screens.

#### Section-Level Spec

```
id="experience"
Padding:    p-4 sm:p-5 md:p-6 xl:p-8 3xl:p-10
scroll-mt:  scroll-mt-16 sm:scroll-mt-20
```

#### Entry Layout

| Screen | Layout |
|---|---|
| xs/sm | Stacked: date on top in badge, then logo + org + role below |
| md | Side-by-side: date column left (`w-32`), content right |
| lg+ | Side-by-side: date column wider (`w-44`), content right |
| xl+ | Side-by-side: date column (`w-56`), content right |
| 3xl+ | Side-by-side: date column (`w-64`), more spacious |
| 4K+ | Scales via rem |

```
Container (mobile xs/sm):
  flex flex-col gap-1
  Date badge: inline-block text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground font-mono

Container (md+):
  flex flex-row items-start gap-4 lg:gap-6
  Date column: w-32 md:w-44 lg:w-56 shrink-0
               text-sm text-muted-foreground font-mono pt-1

Content column:
  Logo:        size-8 3xl:size-10 bg-white dark:bg-neutral-900 p-1.5 rounded-lg
               ring-2 ring-background shadow-sm
  Org name:    text-lg sm:text-xl font-semibold
  Role:        text-sm sm:text-base text-muted-foreground
  Description: text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed
  Active ping: relative flex size-2 sm:size-2.5
               bg-green-400 animate-ping (outer) + bg-green-400 (inner static dot)
```

**Tasks:**
1. `src/components/sections/Experience.tsx`
2. `src/lib/experience.ts`
3. Test stacked layout at 320px, side-by-side at 768px+

**Deliverable:** Timeline renders in stacked mode on phones and side-by-side on tablets/desktops. No date overflow at 320px.

---

### Milestone 6 — Skills Section

**Goal:** Build the skills grid that scales from 2 columns on phones to 8 columns on 4K TVs.

#### Section-Level Spec

```
id="skills"
Padding:    p-4 sm:p-5 md:p-6 xl:p-8 3xl:p-10
scroll-mt:  scroll-mt-16 sm:scroll-mt-20
```

#### Grid Columns by Screen

| Screen | Columns |
|---|---|
| xs (320px) | 2-col |
| sm (375–639px) | 3-col |
| md (640–767px) | 4-col |
| lg (768–1023px) | 5-col |
| xl (1024–1279px) | 6-col |
| 2xl (1280–1535px) | 6-col |
| 3xl (1536–1919px) | 7-col |
| 4K+ (1920px+) | 8-col |

```
Grid: grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4
      lg:grid-cols-5 xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8
      gap-2 sm:gap-3 md:gap-4 3xl:gap-5
```

#### Skill Card Spec

```
Container:   ring-1 ring-border/50 bg-neutral-50 dark:bg-neutral-900 rounded-xl
             p-2.5 xs:p-3 3xl:p-4 inset-shadow-sm
             hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors
             active:scale-95 (touch)
             flex flex-col items-center gap-1.5 text-center

Icon:        size-5 sm:size-6 3xl:size-8 (colored per technology)
Name:        text-xs sm:text-sm font-medium leading-tight
Years:       text-xs text-muted-foreground (hidden on xs to save space, shown xs:hidden sm:block)
```

#### Subsection Layout

Each category (Frontend, Backend, Tools, etc.) has:
```
Sub-heading: text-base sm:text-xl font-semibold font-domine mb-2 sm:mb-3
             text-muted-foreground uppercase tracking-wide text-xs (alternative style)
Divider:     border-t border-border mb-3 sm:mb-4
```

**Skill icon colors (exact):**
| Tech | Color class | Hex |
|---|---|---|
| Go | `text-cyan-400` | #22d3ee |
| TypeScript | `text-blue-600` | #155dfc |
| JavaScript | `text-yellow-400` | #fac800 |
| React/Next.js | `text-cyan-500` | #00b7d7 |
| Tailwind | `text-cyan-600` | #0092b5 |
| PostgreSQL | `text-blue-500` | #3b82f6 |
| Supabase | `text-emerald-500` | #10b981 |
| Redis | `text-red-500` | #ef4444 |
| Figma | `text-pink-500` | #f6339a |
| GitHub | `text-purple-600` | #9810fa |
| Stripe | `text-indigo-600` | #4f39f6 |

**Tasks:**
1. `src/components/ui/SkillCard.tsx`
2. `src/components/sections/Skills.tsx`
3. `src/lib/skills.ts`
4. Source SVG icons (use `react-icons` or inline SVGs)

**Deliverable:** 2-col at 320px, 8-col at 1920px+. Card text doesn't overflow at any size.

---

### Milestone 7 — Footer

**Goal:** Build the frosted glass footer that mirrors the nav pill shape at all screen sizes.

#### Design Spec

```
Element:    <footer>
Background: bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm
Border:     border border-border
Shape:      rounded-t-3xl
Padding:    px-4 py-6  sm:px-6 sm:py-8  xl:px-8  3xl:px-10 3xl:py-10
```

#### Layout by Screen

| Screen | Layout |
|---|---|
| xs/sm | Single column — contact info stacked, socials below |
| md+ | Two columns — contact left, socials right |
| 3xl+ | Two columns, more spacing |

```
Mobile (single col):
  "Contact Me" heading — font-domine text-2xl sm:text-3xl font-semibold mb-1
  Email — text-sm sm:text-base hover:underline
  "Find Me" heading — font-domine text-base sm:text-lg mt-4 mb-2
  Social icon buttons row — flex flex-wrap gap-2
  Copyright — text-xs text-muted-foreground mt-4

Desktop (two col):
  Left:  Contact info (same as mobile)
  Right: Social grid-cols-2 gap-2

Social button:
  size-8 sm:size-9 3xl:size-10 rounded-full
  ring-1 ring-border/50 bg-transparent
  hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors
  flex items-center justify-center
  Icon: size-4 sm:size-4.5
```

**Tasks:**
1. `src/components/layout/Footer.tsx`
2. Add to `src/app/layout.tsx`
3. Test on 320px — ensure no overflow

**Deliverable:** Footer matches nav's frosted glass style, scales from single-col on phones to two-col on tablets+.

---

### Milestone 8 — Animations & Polish

**Goal:** Add all micro-interactions, ensure smooth experience across all devices.

#### Animation Inventory

| Animation | Element | CSS | Touch note |
|---|---|---|---|
| Bounce | Scroll CTA arrow | `animate-bounce` | Shown sm+ only |
| Ping | Active exp dot | `animate-ping` | All screens |
| Card lift | Project cards hover | `hover:-translate-y-1.5 hover:shadow-lg duration-300` | `active:scale-98` on touch |
| Color fade | All hover states | `transition-colors duration-150` | — |
| Scale press | Tags, stat cards | `active:scale-95` | Touch-only feedback |
| Slide-in | Mobile nav drawer | `translate-x-full → translate-x-0 duration-300` | Mobile only |
| Theme flash prevention | `<html>` | `next-themes` suppressHydrationWarning | — |

#### Responsive-specific Polish

**Touch devices (pointer: coarse):**
```css
@media (pointer: coarse) {
  /* Increase tap targets to 44px minimum (WCAG 2.5.5) */
  .nav-link     { min-width: 44px; min-height: 44px; }
  .skill-card   { min-height: 64px; }
  .interest-tag { min-height: 32px; }

  /* Remove hover-only styles that don't work on touch */
  .project-card:hover { transform: none; }
}
```

**Reduced motion:**
```css
@media (prefers-reduced-motion: reduce) {
  .animate-bounce, .animate-ping { animation: none; }
  * { transition-duration: 0.01ms !important; }
}
```

**Large screen polish (3xl+):**
- Max-width container widens to 1920px
- Base font scales up via `html { font-size: 18px }`
- Card gaps widen
- Nav/footer padding increases
- All spacing scales proportionally via rem

**4K TV polish (5xl, 3840px+):**
- `html { font-size: 24px }` → all rem values scale 1.5×
- The entire layout proportionally enlarges
- No hard-coded `px` values → everything in `rem`/Tailwind spacing
- Max-width: `max-w-[2400px]` so content doesn't look tiny on a 75" TV

**Image optimization:**
```tsx
// All images use next/image
<Image
  src="/images/profile.jpg"
  alt="[User name] profile photo"
  width={200}
  height={200}
  sizes="(max-width: 640px) 80px, (max-width: 1024px) 120px, 160px"
  className="rounded-xl object-cover"
  priority  // hero images only
/>
```

**Accessibility checklist:**
- [ ] All icon-only buttons have `aria-label`
- [ ] Color contrast ≥ 4.5:1 on all text (verify with Lighthouse)
- [ ] Focus rings visible on all interactive elements
- [ ] Skip-to-main-content link (visually hidden, shown on focus)
- [ ] All images have meaningful `alt` text
- [ ] Mobile drawer traps focus when open
- [ ] Keyboard navigation: Tab through all links, Enter/Space activate buttons

**Tasks:**
1. Audit all interactive elements for touch target size (min 44×44px)
2. Add `@media (pointer: coarse)` overrides
3. Add `@media (prefers-reduced-motion)` block
4. Test on real devices: iPhone SE (320px), iPhone 14 Pro (393px), iPad Pro (1024px)
5. Run Lighthouse audit at 1440px and 375px
6. Verify no horizontal scroll at any breakpoint

**Deliverable:** Lighthouse ≥ 90 on Performance, Accessibility, Best Practices, SEO. Zero horizontal overflow from 320px to 3840px.

---

### Milestone 9 — Content Population

**Goal:** Replace all placeholder content with real information.

**Information needed from user:**

| Category | Items |
|---|---|
| Personal | Full name, tagline, bio paragraph, profile photo, secondary photo |
| Hero tags | 5–6 interest/personality tags |
| Hero stats | 4 key metrics with icons |
| HyperBlitz | Description, tech stack, screenshots (1920×1080 ideal), live URL, role |
| FreeMRR | Screenshots, your specific role/contribution |
| PolyBucket | Screenshots, your specific role/contribution |
| Experience | All entries: date range, org name, logo (URL or file), role, description, isCurrent |
| Skills | Full list with categories and approximate years |
| Contact | Email, GitHub URL, LinkedIn URL, Twitter/X URL, any others |
| Logo | Personal logo SVG — two variants: dark version + white version |
| SEO | OG image (1200×630px), meta description (150 chars) |

**Tasks:**
1. Populate `src/lib/projects.ts`
2. Populate `src/lib/experience.ts`
3. Populate `src/lib/skills.ts`
4. Replace metadata in `src/app/layout.tsx`
5. Add all images to `public/images/` as `.webp` where possible

**Deliverable:** Zero placeholders, all real content, OG preview correct.

---

### Milestone 10 — Deployment

**Goal:** Ship to Vercel, verify on all target screens.

**Tasks:**

1. **Pre-deploy checklist**
   - [ ] `npm run build` passes with zero errors
   - [ ] No TypeScript errors (`tsc --noEmit`)
   - [ ] All images have `alt` text
   - [ ] Lighthouse scores ≥ 90 locally

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

3. **Custom domain**
   - Add domain in Vercel dashboard
   - Set CNAME or A record at DNS provider
   - Wait for SSL

4. **Post-deploy verification**
   - Test on physical iPhone (mobile)
   - Test on physical iPad or emulate (tablet)
   - Test at 1440px (desktop)
   - Test at 1920px (large monitor)
   - Verify dark/light mode persists on refresh
   - Check OG tags: paste URL into Twitter/LinkedIn debug tools
   - Submit to Google Search Console

5. **Optional**
   - Enable Vercel Analytics (free)
   - Add `vercel.json` for `/github`, `/linkedin` redirect shortcuts
   - Add `robots.txt` and `sitemap.xml` via `next-sitemap`

**Deliverable:** Live URL, Lighthouse ≥ 90, correct display on every tested device.

---

## Responsive Quick Reference

### Component Grid Summary

| Component | xs (320) | sm (375) | md (640) | lg (768) | xl (1024) | 2xl (1280) | 3xl (1920) | 4K (2560) |
|---|---|---|---|---|---|---|---|---|
| Nav | Logo + hamburger | Full icon nav | Full icon nav | + social icon | Same | Same | Wider | Font scales |
| Hero photos | `w-16` | `w-20` | `w-24` | `w-32` | `w-40` | `w-40` | `w-48` | Fluid |
| Hero stats | 2-col | 2-col | 2-col | 4-col | 4-col | 4-col | 4-col wider | Fluid |
| Projects | 1-col | 1-col | 1-col | 2-col | 2-col | 2-col | 3-col | Fluid |
| Experience | Stacked | Stacked | Side-by-side | Side-by-side | Side-by-side | Wider date | Wider | Fluid |
| Skills | 2-col | 3-col | 4-col | 5-col | 6-col | 6-col | 7-col | 8-col |
| Footer | 1-col | 1-col | 2-col | 2-col | 2-col | 2-col | 2-col wider | Fluid |

### Key Tailwind Classes Per Screen

```
Container wrapper (applied to every section's inner div):
  className="w-full max-w-[1440px] 3xl:max-w-[1920px] 4xl:max-w-[2200px] mx-auto
             px-4 sm:px-6 lg:px-8 xl:px-10 3xl:px-12"

Section padding:
  className="py-16 sm:py-20 lg:py-24 3xl:py-28"

Section heading:
  className="font-domine text-2xl md:text-3xl 3xl:text-4xl font-semibold mb-6 sm:mb-8"
```

---

## File-by-File Spec

### `src/app/globals.css`
- Tailwind v4 `@import "tailwindcss"`
- `@theme` block: custom breakpoints (3xl/4xl/5xl), font vars, container max-widths
- `:root` + `.dark` CSS custom properties
- `.dot-pattern`, `.hero-gradient`, `.hero-gradient-top`, `.second-text`
- `html { scroll-behavior: smooth }`
- Fluid font-size media queries (1920px, 2560px, 3840px)
- `@media (pointer: coarse)` touch overrides
- `@media (prefers-reduced-motion)` animation overrides

### `src/lib/projects.ts`
```typescript
export type Project = {
  id: string
  title: string
  description: string
  image: string
  url: string
  tech: string[]
  status: 'live' | 'coming-soon' | 'wip'
  year: string
}
export const projects: Project[] = []
```

### `src/lib/experience.ts`
```typescript
export type Experience = {
  dateRange: string
  org: string
  logo: string
  role: string
  description: string
  isCurrent: boolean
}
export const experiences: Experience[] = []
```

### `src/lib/skills.ts`
```typescript
export type Skill = {
  name: string
  iconKey: string      // maps to icon component
  colorClass: string   // Tailwind color class e.g. "text-blue-600"
  years: string        // e.g. "2-3 years"
  category: string     // e.g. "Backend"
}
export const skills: Skill[] = []
```

---

## Tech Stack Decision

| Choice | Why |
|---|---|
| Next.js 15 (App Router) | Matches reference; Vercel-native; `next/font` + `next/image` built-in |
| Tailwind CSS v4 | `@theme` block for custom breakpoints; CSS-var-driven design tokens |
| TypeScript | Type-safe data files |
| `next-themes` | SSR-safe dark mode; no flash of wrong theme |
| `next/font` | Self-hosted, zero layout shift |
| `next/image` | Lazy loading, WebP, `sizes` prop for responsive images |
| `react-icons` | Comprehensive icon library for skill + nav icons |
| Vercel | Free tier; zero-config; edge network for fast global delivery |

---

## Timeline Estimate

| Milestone | Effort |
|---|---|
| 1 — Setup & Design System | 2–3 h |
| 2 — Navigation | 2–3 h |
| 3 — Hero Section | 3–4 h |
| 4 — Projects Section | 2–3 h |
| 5 — Experience Section | 2–3 h |
| 6 — Skills Section | 2–3 h |
| 7 — Footer | 1–2 h |
| 8 — Animations & Polish | 3–4 h |
| 9 — Content Population | 1–2 h |
| 10 — Deployment | 1 h |
| **Total** | **~19–28 hours** |

---

## Content Checklist (User Action Required)

- [ ] HyperBlitz: description, tech stack, screenshot, URL
- [ ] Full name + tagline
- [ ] Bio paragraph (2–3 sentences, will be styled with `.second-text` pattern)
- [ ] 5–6 interest tags
- [ ] 4 hero stats (label + number + icon)
- [ ] Profile photo (square, min 400×400)
- [ ] Secondary photo (square, min 400×400)
- [ ] Work/education experience entries
- [ ] Skills list with categories and years
- [ ] Email address
- [ ] Social links (GitHub, LinkedIn, Twitter/X, others)
- [ ] Personal logo SVG (dark variant + light/white variant)
- [ ] Project screenshots (1920×1080 or 16:9 ratio, `.webp` preferred)
- [ ] OG image (1200×630px)
