import Image from "next/image";
import { RiExternalLinkLine, RiArrowRightUpLine } from "react-icons/ri";
import { type Project, type ProjectStatus } from "@/lib/projects";

/* ─── Status badge ───────────────────────────────────────────────────────── */
const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; classes: string }
> = {
  live: {
    label: "Live",
    classes:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  },
  "coming-soon": {
    label: "Coming Soon",
    classes:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  },
  wip: {
    label: "In Progress",
    classes:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
  },
};

interface ProjectCardProps {
  project: Project;
  /** When true the card spans full width (used for odd-count last card on 2-col grid) */
  fullWidth?: boolean;
}

function CardInner({ project, status }: { project: Project; status: { label: string; classes: string } }) {
  const hasUrl = !!project.url;
  return (
    <>
      {/* ── Image area ──────────────────────────────────────────────────── */}
      <div className="relative w-full aspect-video overflow-hidden
                      bg-neutral-100 dark:bg-neutral-800">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1920px) 50vw,
                 33vw"
          className="object-cover object-top
                     group-hover:scale-[1.03]
                     transition-transform duration-500"
        />
        <div className="absolute inset-0 -z-10
                        bg-gradient-to-br from-neutral-200 to-neutral-300
                        dark:from-neutral-700 dark:to-neutral-800
                        flex items-center justify-center">
          <span className="font-domine text-3xl font-bold
                           text-neutral-300 dark:text-neutral-600 select-none">
            {project.title[0]}
          </span>
        </div>

        {/* Status badge — overlaid top-right */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${status.classes}`}>
            {status.label}
          </span>
        </div>
      </div>

      {/* ── Card body ───────────────────────────────────────────────────── */}
      <div className="p-4 sm:p-5 xl:p-6 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5 min-w-0">
            <h3 className="font-domine text-xl sm:text-xl lg:text-2xl
                           font-medium lg:font-semibold
                           text-[var(--foreground)] leading-tight">
              {project.title}
            </h3>
            <p className="text-xs second-text font-jetbrains truncate">
              {project.year}
            </p>
          </div>
          <RiArrowRightUpLine
            className="size-5 shrink-0 mt-0.5
                       text-[var(--muted-foreground)]
                       group-hover:text-[var(--foreground)]
                       group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                       transition-all duration-200"
          />
        </div>

        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        <p className="hidden sm:block text-sm second-text leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded
                         bg-neutral-100 dark:bg-neutral-800
                         text-[var(--muted-foreground)]"
            >
              {t}
            </span>
          ))}
        </div>

        {hasUrl && (
          <div className="flex items-center gap-1 pt-1
                          text-xs second-text font-jetbrains
                          group-hover:text-[var(--foreground)] transition-colors">
            <RiExternalLinkLine className="size-3.5 shrink-0" />
            <span className="truncate">{project.url.replace(/^https?:\/\//, "")}</span>
          </div>
        )}
      </div>
    </>
  );
}

export default function ProjectCard({ project, fullWidth }: ProjectCardProps) {
  const status = STATUS_CONFIG[project.status];
  const hasUrl = !!project.url;

  const baseClass = `project-card group block
                     ring-1 ring-[var(--border)]
                     bg-white dark:bg-neutral-900
                     rounded-2xl md:rounded-3xl
                     overflow-hidden
                     transition-all duration-300
                     ${fullWidth ? "lg:col-span-2 3xl:col-span-1" : ""}`;

  if (hasUrl) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title}`}
        className={`${baseClass} hover:shadow-xl hover:bg-[var(--accent)]/50 hover:-translate-y-1.5 focus-visible:outline-2 focus-visible:outline-[var(--ring)]`}
      >
        <CardInner project={project} status={status} />
      </a>
    );
  }

  return (
    <div className={`${baseClass} cursor-default`}>
      <CardInner project={project} status={status} />
    </div>
  );
}
