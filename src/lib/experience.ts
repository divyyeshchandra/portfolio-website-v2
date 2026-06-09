export type Experience = {
  id: string;
  dateRange: string;
  org: string;
  logo: string;
  role: string;
  description: string;
  isCurrent: boolean;
};

export const experiences: Experience[] = [
  {
    id: "kryptos",
    dateRange: "2022 — Present",
    org: "Kryptos",
    logo: "/images/logos/kryptos.png",
    role: "Software Development Engineer — SDE-1",
    description:
      "3 years building the core exchange engine at a crypto fintech startup. Owned the backend architecture for spot trading, futures, margin, and internal transfer systems. Worked deep in order book logic, position management, liquidation flows, and real-time WebSocket feeds. Also contributed to DeFi integrations across EVM chains and Solana.",
    isCurrent: true,
  },
  {
    id: "dframe",
    dateRange: "2021 — 2022",
    org: "dFrame",
    logo: "/images/logos/dframe.png",
    role: "Software Engineering Intern",
    description:
      "1-year internship during college at an early-stage Web3 startup. Worked on backend services, REST APIs, and contributed to blockchain integrations. Got my first real exposure to production systems and crypto infrastructure while still in college.",
    isCurrent: false,
  },
  {
    id: "indie",
    dateRange: "2024 — Present",
    org: "Independent",
    logo: "/images/logos/logo-placeholder.png",
    role: "Indie Developer",
    description:
      "Alongside my full-time role, I build and ship my own products. HyperBlitz, FreeMRR, and PolyBucket are my latest — all production-grade, real users, real problems solved. Design, backend, infra, deployment — all me.",
    isCurrent: true,
  },
];
