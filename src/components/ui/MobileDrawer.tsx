"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  RiCloseLine,
  RiFolderLine,
  RiBriefcaseLine,
  RiCodeSSlashLine,
  RiFileTextLine,
  RiMailLine,
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterXLine,
} from "react-icons/ri";

const NAV_LINKS = [
  { href: "/#projects",   label: "Projects",   icon: RiFolderLine,    external: false },
  { href: "/#experience", label: "Experience",  icon: RiBriefcaseLine, external: false },
  { href: "/#skills",     label: "Skills",      icon: RiCodeSSlashLine,external: false },
  { href: "/#contact",    label: "Contact",     icon: RiMailLine,      external: false },
  { href: "/resume.pdf",  label: "Resume",      icon: RiFileTextLine,  external: true  },
];

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-xs
                    transition-opacity duration-300
                    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 z-50 h-full w-64
                    bg-[var(--background)] border-l border-[var(--border)]
                    flex flex-col p-6 gap-2
                    transition-transform duration-300 ease-in-out
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="size-9 rounded-full flex items-center justify-center
                       border border-[var(--border)] bg-[var(--card)]
                       hover:bg-[var(--accent)] transition-colors"
          >
            <RiCloseLine className="size-5 text-[var(--foreground)]" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label, icon: Icon, external }) => {
            const cls = "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors duration-150";
            return external ? (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" onClick={onClose} className={cls}>
                <Icon className="size-5 text-[var(--muted-foreground)] shrink-0" />
                {label}
              </a>
            ) : (
              <Link key={href} href={href} onClick={onClose} className={cls}>
                <Icon className="size-5 text-[var(--muted-foreground)] shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Footer of drawer */}
        <div className="mt-auto pt-6 border-t border-[var(--border)] flex flex-col gap-4">
          {/* Social links */}
          <div className="flex items-center gap-2">
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
                className="size-9 rounded-full flex items-center justify-center
                           border border-[var(--border)] bg-[var(--card)]
                           text-[var(--muted-foreground)]
                           hover:text-[var(--foreground)] hover:bg-[var(--accent)]
                           transition-colors duration-150"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
          <p className="text-xs second-text font-jetbrains">
            © 2026 Divyyesh Chandra
          </p>
        </div>
      </div>
    </>
  );
}
