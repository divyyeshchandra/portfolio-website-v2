import { RiArrowDownLine } from "react-icons/ri";

interface ScrollCTAProps {
  label: string;
  href: string;
}

export default function ScrollCTA({ label, href }: ScrollCTAProps) {
  return (
    <a
      href={href}
      className="hidden sm:flex flex-col items-center gap-1
                 pt-[6%] sm:pt-[8%] lg:pt-[10%]
                 text-[var(--muted-foreground)]
                 hover:text-[var(--foreground)]
                 transition-colors duration-150
                 group"
      aria-label={`Scroll to ${label}`}
    >
      <span className="font-domine text-sm sm:text-base tracking-tight">
        {label}
      </span>
      <RiArrowDownLine
        className="size-4 sm:size-5 animate-bounce
                   group-hover:text-[var(--foreground)]"
      />
    </a>
  );
}
