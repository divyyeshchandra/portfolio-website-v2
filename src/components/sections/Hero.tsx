import Image from "next/image";
import {
  RiVerifiedBadgeFill,
  RiCalendarLine,
  RiTwitterXLine,
  RiRobot2Line,
  RiGithubLine,
} from "react-icons/ri";
import StatCard from "@/components/ui/StatCard";
import InterestTag from "@/components/ui/InterestTag";
import ScrollCTA from "@/components/ui/ScrollCTA";

const INTERESTS = ["Coding", "Gym", "Traveling", "Crypto", "Trading"];

const STATS = [
  {
    value: "4+",
    label: "Years Experience",
    icon: <RiCalendarLine className="size-4 sm:size-5" />,
  },
  {
    value: "300+",
    label: "Followers on X",
    icon: <RiTwitterXLine className="size-4 sm:size-5" />,
    href: "https://x.com/realcryptoblitz",
  },
  {
    value: "CEX+DEX+AI",
    label: "Building in",
    icon: <RiRobot2Line className="size-4 sm:size-5" />,
  },
  {
    value: "1000+",
    label: "GitHub Contributions",
    icon: <RiGithubLine className="size-4 sm:size-5" />,
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

      <div className="relative z-10 mx-auto flex flex-col gap-3
                      max-w-[1440px] 3xl:max-w-[1920px] 4xl:max-w-[2200px]">

        {/* ── Photo stack ─────────────────────────────────────────────── */}
        <div className="flex items-end -space-x-5 sm:-space-x-6">
          {/* Secondary — golden jacket, behind, tilts left */}
          <div className="-rotate-[6deg] relative
                          size-20 sm:size-24 md:size-28 lg:size-36 xl:size-44 3xl:size-48
                          rounded-2xl ring-2 ring-[var(--border)]/50 shadow-lg
                          overflow-hidden bg-neutral-200 dark:bg-neutral-800 shrink-0">
            <Image
              src="/images/photo-secondary.jpg"
              alt="Divyyesh Chandra"
              fill
              sizes="(max-width: 640px) 80px, (max-width: 768px) 96px,
                     (max-width: 1024px) 112px, (max-width: 1280px) 144px, 176px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-100 to-amber-200
                            dark:from-neutral-700 dark:to-neutral-800" />
          </div>

          {/* Primary — white tee, front, tilts right */}
          <div className="rotate-[4deg] relative z-10
                          size-20 sm:size-24 md:size-28 lg:size-36 xl:size-44 3xl:size-48
                          rounded-2xl ring-2 ring-[var(--border)]/50 shadow-lg
                          overflow-hidden bg-neutral-200 dark:bg-neutral-800 shrink-0">
            <Image
              src="/images/profile.jpg"
              alt="Divyyesh Chandra"
              fill
              sizes="(max-width: 640px) 80px, (max-width: 768px) 96px,
                     (max-width: 1024px) 112px, (max-width: 1280px) 144px, 176px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-200 to-neutral-300
                            dark:from-neutral-600 dark:to-neutral-700" />
          </div>
        </div>

        {/* ── Name + tags ─────────────────────────────────────────────── */}
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <p className="font-domine font-medium
                        text-sm sm:text-base 3xl:text-lg
                        leading-snug">
            <span className="second-text">Hey! </span>
            <a
              href="https://www.linkedin.com/in/divyyesh-chandra-9426511a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4
                         text-[var(--foreground)] inline-flex items-center gap-1.5 flex-wrap"
            >
              I&apos;m Divyyesh Chandra
              <RiVerifiedBadgeFill className="size-3.5 sm:size-4 text-blue-500 shrink-0" />
            </a>
          </p>

          {/* Interest tags */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {INTERESTS.map((tag) => (
              <InterestTag key={tag} label={tag} />
            ))}
          </div>
        </div>

        {/* ── Bio ─────────────────────────────────────────────────────── */}
        <p className="font-domine font-medium mt-3 sm:mt-5
                      text-lg sm:text-xl lg:text-2xl 3xl:text-3xl
                      leading-snug max-w-3xl 3xl:max-w-5xl">
          Backend engineer
          <span className="second-text"> from India </span>
          building across Web2 and Web3
          <span className="second-text"> for 4 years. </span>
          I ship products, break things,
          <span className="second-text"> and share what I learn about </span>
          crypto and AI.
        </p>

        {/* ── Stats grid ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mt-3 sm:mt-5">
          {STATS.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              href={stat.href}
            />
          ))}
        </div>

        {/* ── GitHub Activity ─────────────────────────────────────────── */}
        <div className="rounded-2xl ring-1 ring-[var(--border)]
                        bg-white dark:bg-neutral-900 overflow-hidden">
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
