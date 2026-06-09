"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — only render icon after mount
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="size-8 sm:size-9 rounded-full border border-[var(--border)]" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="nav-link size-8 sm:size-9 3xl:size-10 rounded-full
                 flex items-center justify-center
                 border border-[var(--border)]
                 bg-[var(--card)] text-[var(--foreground)]
                 hover:bg-[var(--accent)] transition-colors duration-150
                 cursor-pointer"
    >
      {isDark ? (
        <RiSunLine className="size-4 sm:size-[18px]" />
      ) : (
        <RiMoonLine className="size-4 sm:size-[18px]" />
      )}
    </button>
  );
}
