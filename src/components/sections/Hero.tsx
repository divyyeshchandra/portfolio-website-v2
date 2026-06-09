import Image from "next/image";
import {
  RiVerifiedBadgeFill,
  RiCalendarLine,
  RiCodeBoxLine,
  RiExchangeLine,
  RiAppsLine,
  RiGithubLine,
} from "react-icons/ri";
import StatCard from "@/components/ui/StatCard";
import InterestTag from "@/components/ui/InterestTag";
import ScrollCTA from "@/components/ui/ScrollCTA";

const INTERESTS = ["Web3", "DeFi", "Building", "Crypto", "Trading", "Travel"];

const STATS = [
  {
    value: "4+",
    label: "Years Experience",
    icon: <RiCalendarLine className="size-4 sm:size-5" />,
  },
  {
    value: "3",
    label: "Products Shipped",
    icon: <RiAppsLine className="size-4 sm:size-5" />,
  },
  {
    value: "CEX+DEX",
    label: "Exchange Expert",
    icon: <RiExchangeLine className="size-4 sm:size-5" />,
  },
  {
    value: "Web2+3",
    label: "Full Stack",
    icon: <RiCodeBoxLine className="size-4 sm:size-5" />,
  },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[calc(100svh-3.5rem)] sm:min-h-[calc(100svh-3.75rem)]
                 px-4 sm:px-6 lg:px-8 xl:px-10 3xl:px-12
                 pt-6 sm:pt-8 pb-12 sm:pb-16
                 dot-pattern overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 hero-gradient" />

      <div className="relative z-10 mx-auto flex flex-col gap-5 sm:gap-6
                      max-w-[1440px] 3xl:max-w-[1920px] 4xl:max-w-[2200px]">

        {/* ── Photo stack + name row ───────────────────────────────────── */}
        <div className="flex items-center justify-between gap-4">

          {/* Photo stack */}
          <div className="flex items-center -space-x-3 sm:-space-x-4 shrink-0">
            {/* Secondary photo — golden jacket, behind, tilts left */}
            <div className="-rotate-3 sm:-rotate-5 relative
                            size-16 sm:size-20 md:size-24 lg:size-32 xl:size-40 3xl:size-48
                            rounded-xl ring-2 sm:ring-3 ring-[var(--border)]/50 shadow-md
                            overflow-hidden bg-neutral-200 dark:bg-neutral-800 shrink-0">
              <Image
                src="/images/photo-secondary.jpg"
                alt="Divyyesh Chandra"
                fill
                sizes="(max-width: 640px) 64px, (max-width: 768px) 80px,
                       (max-width: 1024px) 96px, (max-width: 1280px) 128px, 160px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-100 to-amber-200
                              dark:from-neutral-700 dark:to-neutral-800" />
            </div>

            {/* Primary profile photo — white tee, front, tilts right */}
            <div className="rotate-3 sm:rotate-5 relative z-10
                            size-16 sm:size-20 md:size-24 lg:size-32 xl:size-40 3xl:size-48
                            rounded-xl ring-2 sm:ring-3 ring-[var(--border)]/50 shadow-md
                            overflow-hidden bg-neutral-200 dark:bg-neutral-800 shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Divyyesh Chandra"
                fill
                sizes="(max-width: 640px) 64px, (max-width: 768px) 80px,
                       (max-width: 1024px) 96px, (max-width: 1280px) 128px, 160px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-200 to-neutral-300
                              dark:from-neutral-600 dark:to-neutral-700" />
            </div>
          </div>

          {/* ── Name + verification ──────────────────────────────────── */}
          <div className="flex-1 flex items-center justify-between gap-2 min-w-0">
            <div className="flex flex-col gap-1 min-w-0">
              <p className="font-domine font-medium text-base sm:text-lg xl:text-xl 3xl:text-2xl
                            leading-snug">
                <span className="second-text">Hey! </span>
                <a
                  href="https://x.com/realcryptoblitz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline underline-offset-4
                             text-[var(--foreground)] inline-flex items-center gap-1.5 flex-wrap"
                >
                  I&apos;m&nbsp;Divyyesh Chandra
                  <RiVerifiedBadgeFill className="size-4 sm:size-5 text-blue-500 shrink-0" />
                </a>
              </p>

              {/* Interest tags */}
              <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-0.5">
                {INTERESTS.map((tag) => (
                  <InterestTag key={tag} label={tag} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bio ─────────────────────────────────────────────────────── */}
        <p className="font-domine font-medium
                      text-xl sm:text-2xl lg:text-3xl 3xl:text-4xl
                      leading-snug max-w-3xl 3xl:max-w-5xl">
          <span className="second-text">Backend engineer with </span>
          4 years
          <span className="second-text"> building at the intersection of </span>
          Web2 and Web3.
          <span className="second-text"> Spent 3 years deep inside </span>
          exchange infrastructure
          <span className="second-text"> — </span>
          spot, futures, margin.
          <span className="second-text"> Now I ship my own products.</span>
        </p>

        {/* ── Stats grid ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 xl:gap-4">
          {STATS.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* ── GitHub Activity ─────────────────────────────────────────── */}
        <div className="rounded-2xl ring-1 ring-[var(--border)]
                        bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
          {/* Header row */}
          <div className="flex items-center gap-2 px-4 sm:px-5 pt-3.5 pb-2">
            <RiGithubLine className="size-4 text-[var(--muted-foreground)] shrink-0" />
            <span className="text-xs font-jetbrains text-[var(--muted-foreground)]">
              1,190 contributions in the last year
            </span>
          </div>

          {/* Full contribution graph — natural 1852×450 aspect ratio, no crop */}
          <Image
            src="/images/github-contributions.png"
            alt="GitHub contribution graph — 1,190 contributions in the last year"
            width={1852}
            height={450}
            className="w-full h-auto"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />
        </div>

        {/* ── Scroll CTA ──────────────────────────────────────────────── */}
        <ScrollCTA label="See Projects" href="/#projects" />
      </div>
    </section>
  );
}
