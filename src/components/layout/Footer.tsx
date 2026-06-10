import {
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterXLine,
  RiMailLine,
} from "react-icons/ri";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/divyyeshchandra",
    icon: RiGithubLine,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/divyyesh-chandra-9426511a0/",
    icon: RiLinkedinLine,
  },
  {
    label: "Twitter / X",
    href: "https://x.com/realcryptoblitz",
    icon: RiTwitterXLine,
  },
];

const EMAIL = "divyyesh.bvp23@gmail.com";
const NAME  = "Divyyesh Chandra";
const YEAR     = new Date().getFullYear();
/* ─────────────────────────────────────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-50
                 mx-4 sm:mx-6 lg:mx-8 xl:mx-10 3xl:mx-12
                 mb-4 sm:mb-6
                 rounded-t-3xl
                 border border-[var(--border)]
                 bg-white/95 dark:bg-neutral-900/80
                 backdrop-blur-sm"
    >
      <div
        className="mx-auto
                   px-6 sm:px-8 xl:px-10 3xl:px-12
                   py-8 sm:py-10 3xl:py-12
                   max-w-[1440px] 3xl:max-w-[1920px] 4xl:max-w-[2200px]"
      >
        {/* ── Two-column layout on md+, single-col on mobile ─────────── */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12">

          {/* ── Left: Contact info ─────────────────────────────────────── */}
          <div className="flex flex-col gap-5">

            {/* Contact heading */}
            <div className="flex flex-col gap-1.5">
              <h2
                className="font-domine text-2xl sm:text-3xl 3xl:text-4xl
                           font-semibold text-[var(--foreground)]"
              >
                Contact Me
              </h2>
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-[var(--muted-foreground)]
                           hover:text-[var(--foreground)] transition-colors duration-150
                           inline-flex items-center gap-1.5 group"
              >
                <RiMailLine className="size-4 shrink-0 group-hover:text-[var(--foreground)] transition-colors" />
                {EMAIL}
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs second-text font-jetbrains mt-2">
              © {YEAR} {NAME}
            </p>
          </div>

          {/* ── Right: Social icon grid ────────────────────────────────── */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-jetbrains uppercase tracking-widest
                          text-[var(--muted-foreground)]">
              Find Me
            </p>
            <div className="grid grid-cols-4 md:grid-cols-2 gap-2">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="size-10 sm:size-11 3xl:size-12 rounded-full
                             flex items-center justify-center
                             ring-1 ring-[var(--border)]
                             bg-[var(--card)]
                             text-[var(--muted-foreground)]
                             hover:text-[var(--foreground)]
                             hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50
                             active:scale-95
                             transition-all duration-150"
                >
                  <Icon className="size-4 sm:size-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
