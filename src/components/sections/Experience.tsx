import Image from "next/image";
import { RiBriefcaseLine } from "react-icons/ri";
import { experiences, type Experience } from "@/lib/experience";
import ScrollCTA from "@/components/ui/ScrollCTA";

/* ─── Single experience entry ────────────────────────────────────────────── */
function ExperienceEntry({ entry }: { entry: Experience }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6 xl:gap-8">

      {/* ── Date — badge on mobile, column on md+ ───────────────────── */}
      <div className="flex items-center gap-2 md:block md:w-32 lg:w-44 xl:w-56 3xl:w-64 shrink-0">
        {/* Active ping dot — only on current roles */}
        {entry.isCurrent && (
          <span className="relative flex size-2 shrink-0 md:hidden">
            <span className="animate-ping absolute inline-flex size-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-green-400" />
          </span>
        )}
        <span
          className="inline-block text-xs md:text-sm
                     font-jetbrains text-[var(--muted-foreground)]
                     bg-[var(--muted)] md:bg-transparent
                     px-2 py-0.5 md:px-0 md:py-0
                     rounded md:rounded-none
                     md:pt-1"
        >
          {entry.dateRange}
        </span>
      </div>

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">

        {/* Logo + org + role row */}
        <div className="flex items-start gap-3">

          {/* Org logo */}
          {entry.url ? (
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${entry.org}`}
              className="relative size-10 3xl:size-12 shrink-0
                         bg-white dark:bg-neutral-900
                         rounded-xl ring-1 ring-[var(--border)] shadow-sm
                         overflow-hidden hover:ring-2 hover:ring-[var(--foreground)]/20
                         transition-all duration-150"
            >
              <Image
                src={entry.logo}
                alt={`${entry.org} logo`}
                fill
                sizes="48px"
                className="object-contain p-1.5"
              />
              <div className="absolute inset-0 -z-10
                              bg-gradient-to-br from-neutral-100 to-neutral-200
                              dark:from-neutral-700 dark:to-neutral-800
                              flex items-center justify-center">
                <span className="text-xs font-bold text-[var(--muted-foreground)]">
                  {entry.org[0]}
                </span>
              </div>
            </a>
          ) : (
            <div className="relative size-10 3xl:size-12 shrink-0
                            bg-white dark:bg-neutral-900
                            rounded-xl ring-1 ring-[var(--border)] shadow-sm
                            overflow-hidden">
              <Image
                src={entry.logo}
                alt={`${entry.org} logo`}
                fill
                sizes="48px"
                className="object-contain p-1.5"
              />
              <div className="absolute inset-0 -z-10
                              bg-gradient-to-br from-neutral-100 to-neutral-200
                              dark:from-neutral-700 dark:to-neutral-800
                              flex items-center justify-center">
                <span className="text-xs font-bold text-[var(--muted-foreground)]">
                  {entry.org[0]}
                </span>
              </div>
            </div>
          )}

          {/* Org name + role + active indicator */}
          <div className="flex flex-col gap-0.5 min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg xl:text-xl font-semibold
                             text-[var(--foreground)] leading-tight">
                {entry.url ? (
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    {entry.org}
                  </a>
                ) : entry.org}
              </h3>

              {/* Active ping dot — desktop (md+) */}
              {entry.isCurrent && (
                <span className="hidden md:flex relative size-2 shrink-0">
                  <span className="animate-ping absolute inline-flex size-full
                                   rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-400" />
                </span>
              )}
            </div>

            <p className="text-sm sm:text-base text-[var(--muted-foreground)]
                          leading-snug">
              {entry.role}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-[var(--muted-foreground)]
                      leading-relaxed max-w-2xl">
          {entry.description}
        </p>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen
                 px-4 sm:px-6 lg:px-8 xl:px-10 3xl:px-12
                 pt-12 sm:pt-16 pb-12 sm:pb-16
                 scroll-mt-16 sm:scroll-mt-20 xl:scroll-mt-0
                 border-t border-[var(--border)]"
    >
      <div className="mx-auto flex flex-col gap-8 sm:gap-10
                      max-w-[1440px] 3xl:max-w-[1920px] 4xl:max-w-[2200px]">

        {/* ── Section heading ─────────────────────────────────────────── */}
        <div className="flex items-center gap-2.5">
          <RiBriefcaseLine
            className="size-6 sm:size-7 3xl:size-8
                       text-[var(--muted-foreground)] shrink-0"
          />
          <h2
            className="font-domine text-2xl md:text-3xl 3xl:text-4xl
                       font-semibold text-[var(--foreground)]"
          >
            Experience
          </h2>
        </div>

        {/* ── Entry list ──────────────────────────────────────────────── */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {experiences.map((entry, index) => (
            <div key={entry.id}>
              <ExperienceEntry entry={entry} />
              {/* Divider between entries (not after last) */}
              {index < experiences.length - 1 && (
                <div className="mt-8 sm:mt-10 border-t border-[var(--border)]" />
              )}
            </div>
          ))}
        </div>

        {/* ── Scroll CTA ──────────────────────────────────────────────── */}
        <ScrollCTA label="See Skills" href="/#skills" />
      </div>
    </section>
  );
}
