import { type ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon: ReactNode;
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div
      className="flex flex-col gap-2
                 rounded-xl p-2.5 sm:p-3 xl:p-4
                 ring-1 ring-[var(--border)]
                 bg-neutral-50 dark:bg-neutral-900
                 hover:bg-neutral-100 dark:hover:bg-neutral-800
                 active:scale-[0.98]
                 transition-all duration-150
                 select-none"
    >
      {/* Icon */}
      <span className="text-[var(--muted-foreground)]">{icon}</span>

      {/* Value */}
      <span
        className="font-domine text-2xl lg:text-3xl
                   font-medium lg:font-semibold
                   text-[var(--foreground)] leading-none"
      >
        {value}
      </span>

      {/* Label */}
      <span className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-tight">
        {label}
      </span>
    </div>
  );
}
