import { type ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon: ReactNode;
  href?: string;
}

export default function StatCard({ value, label, icon, href }: StatCardProps) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex flex-col gap-2
                 rounded-xl p-2.5 sm:p-3 xl:p-4
                 ring-1 ring-[var(--border)]
                 bg-white dark:bg-neutral-900
                 hover:bg-neutral-100 dark:hover:bg-neutral-800
                 active:scale-[0.98]
                 transition-all duration-150
                 select-none"
    >
      {/* Icon */}
      <span className="text-[var(--muted-foreground)]">{icon}</span>

      {/* Value */}
      <span
        className="font-domine text-xl lg:text-2xl
                   font-semibold
                   text-[var(--foreground)] leading-tight break-words"
      >
        {value}
      </span>

      {/* Label */}
      <span className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-tight">
        {label}
      </span>
    </Tag>
  );
}
