"use client";

import { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={`scroll-top-btn
                  size-10 sm:size-11
                  rounded-full
                  flex items-center justify-center
                  ring-1 ring-[var(--border)]
                  bg-[var(--card)]/80 backdrop-blur-sm
                  text-[var(--muted-foreground)]
                  hover:text-[var(--foreground)]
                  hover:bg-[var(--card)]
                  hover:ring-[var(--foreground)]
                  active:scale-95
                  transition-all duration-150
                  shadow-md
                  ${visible ? "visible" : ""}`}
    >
      <RiArrowUpLine className="size-4 sm:size-5" />
    </button>
  );
}
