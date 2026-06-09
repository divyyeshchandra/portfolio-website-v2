import { RiCodeSSlashLine } from "react-icons/ri";
import { skillCategories } from "@/lib/skills";
import SkillCard from "@/components/ui/SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen dot-pattern overflow-hidden
                 px-4 sm:px-6 lg:px-8 xl:px-10 3xl:px-12
                 pt-12 sm:pt-16 pb-16 sm:pb-20
                 scroll-mt-16 sm:scroll-mt-20 xl:scroll-mt-10
                 border-t border-[var(--border)]"
    >
      {/* top + bottom dot-to-background fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 hero-gradient-top" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 hero-gradient" />

      <div className="relative z-10 mx-auto flex flex-col gap-10 sm:gap-12
                      max-w-[1440px] 3xl:max-w-[1920px] 4xl:max-w-[2200px]">

        {/* ── Section heading ─────────────────────────────────────────── */}
        <div className="flex items-center gap-2.5">
          <RiCodeSSlashLine
            className="size-6 sm:size-7 3xl:size-8
                       text-[var(--muted-foreground)] shrink-0"
          />
          <h2
            className="font-domine text-2xl md:text-3xl 3xl:text-4xl
                       font-semibold text-[var(--foreground)]"
          >
            Skills
          </h2>
        </div>

        {/* ── Categories ──────────────────────────────────────────────── */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {skillCategories.map((cat) => (
            <div key={cat.label} className="flex flex-col gap-3 sm:gap-4">

              {/* Category sub-heading */}
              <div className="flex items-center gap-3">
                <h3
                  className="text-xs sm:text-sm font-medium
                             font-jetbrains uppercase tracking-widest
                             text-[var(--muted-foreground)]"
                >
                  {cat.label}
                </h3>
                {/* Decorative rule */}
                <div className="flex-1 h-px bg-[var(--border)]" />
              </div>

              {/*
                Grid column counts:
                  xs (320px)   → 2 col
                  sm (640px)   → 3 col
                  md (768px)   → 4 col
                  lg (1024px)  → 5 col
                  xl (1280px)  → 6 col
                  3xl (1920px) → 7 col
                  4xl (2560px) → 8 col
              */}
              <div
                className="grid gap-2 sm:gap-3 xl:gap-4 3xl:gap-5
                           grid-cols-2
                           sm:grid-cols-3
                           md:grid-cols-4
                           lg:grid-cols-5
                           xl:grid-cols-6
                           3xl:grid-cols-7
                           4xl:grid-cols-8"
              >
                {cat.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
