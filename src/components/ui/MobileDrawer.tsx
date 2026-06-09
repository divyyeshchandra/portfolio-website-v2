"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  RiCloseLine,
  RiFolderLine,
  RiBriefcaseLine,
  RiCodeSSlashLine,
  RiMailLine,
} from "react-icons/ri";

const NAV_LINKS = [
  { href: "/#projects",   label: "Projects",   icon: RiFolderLine },
  { href: "/#experience", label: "Experience",  icon: RiBriefcaseLine },
  { href: "/#skills",     label: "Skills",      icon: RiCodeSSlashLine },
  { href: "/#contact",    label: "Contact",     icon: RiMailLine },
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
          {NAV_LINKS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-xl
                         text-base font-medium text-[var(--foreground)]
                         hover:bg-[var(--accent)] transition-colors duration-150"
            >
              <Icon className="size-5 text-[var(--muted-foreground)] shrink-0" />
              {label}
            </Link>
          ))}
        </nav>

        {/* Footer of drawer */}
        <div className="mt-auto pt-6 border-t border-[var(--border)]">
          <p className="text-xs second-text font-jetbrains">
            © 2026 Portfolio
          </p>
        </div>
      </div>
    </>
  );
}
