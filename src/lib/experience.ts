export type Experience = {
  id: string;
  dateRange: string;
  org: string;
  logo: string;
  url?: string;
  role: string;
  description: string;
  isCurrent: boolean;
};

export const experiences: Experience[] = [
  {
    id: "kryptos",
    dateRange: "2023 — Present",
    org: "Kryptos",
    logo: "/images/logos/kryptos.png",
    url: "https://app.kryptos.io/",
    role: "Software Development Engineer, SDE-1",
    description:
      "Core integrations engineer at a crypto tax and portfolio tracking platform. Built and maintained 50+ exchange integrations covering Spot, Margin, Futures, and Earn account types, and added blockchain support across EVM chains, Solana, Cardano, and ICP. Developed backend pipelines for transaction ingestion, pricing, and tax report generation using Pub/Sub batch processing and Firestore, and later contributed to migrating the full stack to a PostgreSQL monorepo. Also owned OAuth connections for major exchanges, CI/CD on GCP, and deep reconciliation of balance and transaction discrepancies.",
    isCurrent: true,
  },
  {
    id: "dframe",
    dateRange: "2022 — 2023",
    org: "DFrame",
    logo: "/images/logos/dframe.png",
    role: "Software Engineering Intern",
    description:
      "Interned at an early-stage Web3 data startup, building an ERC-20 reward contract on Polygon that distributed DFT tokens to users for their data contributions. Also worked on AES encryption for a Kafka/MongoDB data pipeline, a production IPFS node for secure storage, and cross-chain bridging research between Polygon and other EVM networks.",
    isCurrent: false,
  },
  {
    id: "indie",
    dateRange: "2024 — Present",
    org: "Independent",
    logo: "/images/logos/indie.png",
    role: "Indie Developer",
    description:
      "Outside of work, I build and ship my own products. HyperBlitz, FreeMRR, and PolyBucket are the latest, all production-grade, solving real problems. Everything from design and backend to infra and deployment, built solo.",
    isCurrent: true,
  },
];
