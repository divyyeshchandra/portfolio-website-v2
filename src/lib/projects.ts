export type ProjectStatus = "live" | "coming-soon" | "wip";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;         // path under /public
  url: string;
  tech: string[];
  status: ProjectStatus;
  year: string;
};

export const projects: Project[] = [
  {
    id: "hyperblitz",
    title: "HyperBlitz",
    tagline: "Direct Intelligence for the Hyperliquid Ledger.",
    description:
      "The most transparent and high-performance L1 gateway for the Hyperliquid ecosystem. Search any wallet address or transaction hash, track real-time positions, PnL, trade history, live funding rates, and open interest — all on-chain.",
    image: "/images/projects/hyperblitz.png",
    url: "https://www.hyperblitz.xyz",
    tech: ["Next.js", "TypeScript", "Hyperliquid API", "WebSockets", "Tailwind CSS"],
    status: "live",
    year: "2026",
  },
  {
    id: "freemrr",
    title: "FreeMRR",
    tagline: "A zero-friction verified startup revenue directory and live MRR leaderboard.",
    description:
      "Stripe-verified MRR leaderboard for startups. Founders connect Stripe in under 2 minutes — no forced account creation. Real-time revenue data, anti-gaming safeguards, and SEO-optimised server-rendered leaderboard.",
    image: "/images/projects/freemrr.png",
    url: "https://freemrr.com",
    tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "Framer Motion"],
    status: "live",
    year: "2026",
  },
  {
    id: "polybucket",
    title: "PolyBucket",
    tagline: "The first production-grade Polymarket copy-trading system with 80% consensus.",
    description:
      "Groups 5–10 expert wallets by niche and executes trades only when 80%+ of the bucket agrees. Sub-150ms execution, non-custodial key management, paper trading simulation, and a Telegram bot interface.",
    image: "/images/projects/polybucket.png",
    url: "",
    tech: ["Go", "Next.js", "PostgreSQL", "Redis", "Polygon", "WebSocket"],
    status: "coming-soon",
    year: "2026",
  },
  {
    id: "nexussstudio",
    title: "NexussStudio",
    tagline: "Premium development collective for Web3, SaaS, and cutting-edge digital products.",
    description:
      "A next-gen software studio helping forward-thinking founders ship products fast, solve complex problems, and scale globally. Full-stack builds from design to deployment — Web3, SaaS, and beyond.",
    image: "/images/projects/nexussstudio.png",
    url: "https://www.nexussstudio.com",
    tech: ["Next.js", "TypeScript", "Web3", "Tailwind CSS", "Framer Motion"],
    status: "live",
    year: "2026",
  },
];
