import { RiFolderLine } from "react-icons/ri";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import ScrollCTA from "@/components/ui/ScrollCTA";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen dot-pattern overflow-hidden
                 px-4 sm:px-6 lg:px-8 xl:px-10 3xl:px-12
                 pt-12 sm:pt-16 pb-12 sm:pb-16
                 scroll-mt-16 sm:scroll-mt-20
                 border-t border-[var(--border)]"
    >
      {/* top + bottom dot-to-background fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 hero-gradient-top" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 hero-gradient" />
      <div className="relative z-10 mx-auto flex flex-col gap-6 sm:gap-8
                      max-w-[1440px] 3xl:max-w-[1920px] 4xl:max-w-[2200px]">

        {/* ── Section heading ─────────────────────────────────────────── */}
        <div className="flex items-center gap-2.5">
          <RiFolderLine
            className="size-6 sm:size-7 3xl:size-8
                       text-[var(--muted-foreground)] shrink-0"
          />
          <h2
            className="font-domine text-2xl md:text-3xl 3xl:text-4xl
                       font-semibold text-[var(--foreground)]"
          >
            Projects
          </h2>
        </div>

        {/* ── Grid ────────────────────────────────────────────────────── */}
        {/*
          Layout rules:
          • xs/sm/md → 1 column
          • lg/xl/2xl → 2 columns; 3rd card spans full width (col-span-2)
          • 3xl+ → 3 columns; all cards equal width
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3
                        gap-3 sm:gap-4 xl:gap-5 3xl:gap-6">
          {projects.map((project, index) => {
            // On a 2-col grid, if total count is odd the last card goes full-width
            const isLastOdd =
              projects.length % 2 !== 0 && index === projects.length - 1;
            return (
              <ProjectCard
                key={project.id}
                project={project}
                fullWidth={isLastOdd}
              />
            );
          })}
        </div>

        {/* ── Scroll CTA ──────────────────────────────────────────────── */}
        <ScrollCTA label="See Experience" href="/#experience" />
      </div>
    </section>
  );
}
