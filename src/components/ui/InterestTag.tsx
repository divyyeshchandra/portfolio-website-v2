interface InterestTagProps {
  label: string;
}

export default function InterestTag({ label }: InterestTagProps) {
  return (
    <span
      className="tag-item
                 inline-flex items-center
                 px-2.5 py-1 sm:py-0.5
                 text-xs
                 rounded-sm
                 ring-1 ring-[var(--border)]
                 bg-neutral-50 dark:bg-neutral-900
                 text-[var(--muted-foreground)]
                 hover:bg-neutral-100 dark:hover:bg-neutral-800
                 hover:text-[var(--foreground)]
                 active:scale-95
                 transition-all duration-150
                 cursor-pointer select-none"
    >
      {label}
    </span>
  );
}
