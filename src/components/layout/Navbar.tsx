"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  RiFolderLine,
  RiBriefcaseLine,
  RiCodeSSlashLine,
  RiFileTextLine,
  RiMenuLine,
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterXLine,
} from "react-icons/ri";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileDrawer from "@/components/ui/MobileDrawer";

const NAV_LINKS = [
  { href: "/#projects",   label: "Projects",  icon: RiFolderLine },
  { href: "/#experience", label: "Experience", icon: RiBriefcaseLine },
  { href: "/#skills",     label: "Skills",     icon: RiCodeSSlashLine },
  { href: "/resume.pdf",  label: "Resume",     icon: RiFileTextLine, external: true },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const sections = ["projects", "experience", "skills"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Nav bar ───────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div
          className="mx-auto flex items-center justify-between
                     px-4 sm:px-6 xl:px-8 3xl:px-10
                     py-2 sm:py-2.5
                     max-w-[1440px] 3xl:max-w-[1920px]
                     bg-white/90 dark:bg-neutral-900/80
                     backdrop-blur-sm
                     border border-[var(--border)] border-t-0
                     rounded-b-3xl"
        >
          {/* ── Left: Logo ─────────────────────────────────────────────── */}
          <Link href="/" aria-label="Home" className="flex items-center shrink-0">
            {/* Placeholder logo — replace with real SVG in Milestone 9 */}
            <div
              className="size-5 sm:size-6 3xl:size-8 rounded-md
                         bg-[var(--foreground)] flex items-center justify-center"
            >
              <span className="text-[var(--background)] text-xs font-bold font-domine leading-none">
                D
              </span>
            </div>
          </Link>

          {/* ── Center: Nav links (hidden on xs, shown sm+) ────────────── */}
          <nav
            aria-label="Main navigation"
            className="hidden sm:flex items-center gap-1"
          >
            {NAV_LINKS.map(({ href, label, icon: Icon, external }) => {
              const sectionId = href.replace("/#", "");
              const isActive = !external && activeSection === sectionId;
              const cls = `nav-link size-9 3xl:size-10 rounded-full
                           flex items-center justify-center
                           transition-colors duration-150
                           ${isActive
                             ? "bg-neutral-200/70 dark:bg-neutral-800/70 text-[var(--foreground)]"
                             : "text-[var(--muted-foreground)] hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 hover:text-[var(--foreground)]"}`;
              return external ? (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={cls}>
                  <Icon className="size-4 sm:size-[18px] 3xl:size-5" />
                </a>
              ) : (
                <Link key={href} href={href} aria-label={label} className={cls}>
                  <Icon className="size-4 sm:size-[18px] 3xl:size-5" />
                </Link>
              );
            })}
          </nav>

          {/* ── Right: Controls ────────────────────────────────────────── */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Social links — hidden on xs, shown sm+ */}
            {[
              { href: "https://github.com/divyyeshchandra", label: "GitHub", Icon: RiGithubLine },
              { href: "https://www.linkedin.com/in/divyyesh-chandra-9426511a0/", label: "LinkedIn", Icon: RiLinkedinLine },
              { href: "https://x.com/realcryptoblitz", label: "Twitter / X", Icon: RiTwitterXLine },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="nav-link hidden sm:flex size-8 sm:size-9 3xl:size-10 rounded-full
                           items-center justify-center
                           border border-[var(--border)] bg-[var(--card)]
                           text-[var(--muted-foreground)]
                           hover:text-[var(--foreground)] hover:bg-[var(--accent)]
                           transition-colors duration-150"
              >
                <Icon className="size-4 sm:size-[18px]" />
              </a>
            ))}

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Hamburger — shown on xs only */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="nav-link sm:hidden size-8 rounded-full
                         flex items-center justify-center
                         border border-[var(--border)] bg-[var(--card)]
                         text-[var(--foreground)]
                         hover:bg-[var(--accent)] transition-colors duration-150"
            >
              <RiMenuLine className="size-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer (xs only) ─────────────────────────────────────── */}
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      {/* ── Spacer so page content starts below fixed nav ──────────────── */}
      <div className="h-12 sm:h-14" aria-hidden="true" />
    </>
  );
}
