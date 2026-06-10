export type Skill = {
  name: string;
  iconKey: string;
  colorClass: string;
  years: string;
  category: string;
};

export const skillCategories: { label: string; skills: Skill[] }[] = [
  {
    label: "Languages",
    skills: [
      { name: "TypeScript",  iconKey: "typescript",  colorClass: "text-blue-600",    years: "3+ yrs",  category: "Languages" },
      { name: "JavaScript",  iconKey: "javascript",  colorClass: "text-yellow-400",  years: "4+ yrs",  category: "Languages" },
      { name: "Solidity",    iconKey: "solidity",    colorClass: "text-neutral-500", years: "2+ yrs",  category: "Languages" },
      { name: "Python",      iconKey: "python",      colorClass: "text-yellow-500",  years: "2 yrs",   category: "Languages" },
    ],
  },
  {
    label: "Backend & APIs",
    skills: [
      { name: "Node.js",     iconKey: "nodejs",      colorClass: "text-green-500",   years: "4+ yrs",  category: "Backend" },
      { name: "Express.js",  iconKey: "express",     colorClass: "text-neutral-400", years: "4+ yrs",  category: "Backend" },
      { name: "REST APIs",   iconKey: "api",         colorClass: "text-violet-500",  years: "4+ yrs",  category: "Backend" },
      { name: "GraphQL",     iconKey: "graphql",     colorClass: "text-pink-500",    years: "2+ yrs",  category: "Backend" },
      { name: "WebSockets",  iconKey: "websocket",   colorClass: "text-sky-500",     years: "3+ yrs",  category: "Backend" },
      { name: "PostgreSQL",  iconKey: "postgresql",  colorClass: "text-blue-500",    years: "3+ yrs",  category: "Backend" },
      { name: "MongoDB",     iconKey: "mongodb",     colorClass: "text-green-600",   years: "2+ yrs",  category: "Backend" },
      { name: "Redis",       iconKey: "redis",       colorClass: "text-red-500",     years: "2+ yrs",  category: "Backend" },
      { name: "Firebase",    iconKey: "firebase",    colorClass: "text-amber-500",   years: "2+ yrs",  category: "Backend" },
      { name: "Supabase",    iconKey: "supabase",    colorClass: "text-emerald-500", years: "1-2 yrs", category: "Backend" },
      { name: "Kafka",       iconKey: "kafka",       colorClass: "text-neutral-400", years: "1-2 yrs", category: "Backend" },
    ],
  },
  {
    label: "Web3 & Blockchain",
    skills: [
      { name: "EVM Chains",         iconKey: "ethereum",    colorClass: "text-indigo-400",  years: "3+ yrs",  category: "Web3" },
      { name: "Solana",             iconKey: "solana",      colorClass: "text-purple-500",  years: "1-2 yrs", category: "Web3" },
      { name: "DeFi",               iconKey: "defi",        colorClass: "text-emerald-400", years: "3+ yrs",  category: "Web3" },
      { name: "DApps",              iconKey: "dapp",        colorClass: "text-sky-400",     years: "3+ yrs",  category: "Web3" },
      { name: "Prediction Markets", iconKey: "prediction",  colorClass: "text-amber-400",   years: "2+ yrs",  category: "Web3" },
      { name: "Layer 2",            iconKey: "layer2",      colorClass: "text-violet-400",  years: "2+ yrs",  category: "Web3" },
      { name: "NFTs",               iconKey: "nft",         colorClass: "text-pink-400",    years: "2+ yrs",  category: "Web3" },
      { name: "Copy Trading",       iconKey: "copytrading", colorClass: "text-teal-400",    years: "1-2 yrs", category: "Web3" },
    ],
  },
  {
    label: "Exchange Systems",
    skills: [
      { name: "Spot Trading", iconKey: "spot",       colorClass: "text-green-400",   years: "3+ yrs",  category: "Exchange" },
      { name: "Futures",      iconKey: "futures",    colorClass: "text-amber-500",   years: "2+ yrs",  category: "Exchange" },
      { name: "Margin",       iconKey: "margin",     colorClass: "text-orange-400",  years: "2+ yrs",  category: "Exchange" },
      { name: "Earn",         iconKey: "transfer",   colorClass: "text-emerald-400", years: "2+ yrs",  category: "Exchange" },
      { name: "Order Books",  iconKey: "orderbook",  colorClass: "text-sky-400",     years: "3+ yrs",  category: "Exchange" },
      { name: "Liquidation",  iconKey: "liquidation",colorClass: "text-red-400",     years: "2+ yrs",  category: "Exchange" },
      { name: "Transfers",    iconKey: "transfer",   colorClass: "text-teal-500",    years: "3+ yrs",  category: "Exchange" },
    ],
  },
  {
    label: "Infrastructure & DevOps",
    skills: [
      { name: "Docker",       iconKey: "docker",     colorClass: "text-sky-500",     years: "3+ yrs",  category: "DevOps" },
      { name: "Cloud",         iconKey: "gcp",        colorClass: "text-red-400",     years: "2+ yrs",  category: "DevOps" },
      { name: "CI/CD",        iconKey: "cicd",       colorClass: "text-orange-500",  years: "2+ yrs",  category: "DevOps" },
      { name: "GitHub",       iconKey: "github",     colorClass: "text-purple-600",  years: "4+ yrs",  category: "DevOps" },
      { name: "Deployment",   iconKey: "vercel",     colorClass: "text-foreground",  years: "2+ yrs",  category: "DevOps" },
      { name: "System Design",iconKey: "system",     colorClass: "text-neutral-500", years: "3+ yrs",  category: "DevOps" },
    ],
  },
  {
    label: "AI & Tools",
    skills: [
      { name: "OpenAI",         iconKey: "openai",      colorClass: "text-emerald-500", years: "2+ yrs",  category: "AI" },
      { name: "Claude",         iconKey: "claude",      colorClass: "text-orange-400",  years: "1-2 yrs", category: "AI" },
      { name: "AI Agents",      iconKey: "agent",       colorClass: "text-violet-500",  years: "1-2 yrs", category: "AI" },
      { name: "Hermes Agent",   iconKey: "hermes",      colorClass: "text-amber-400",   years: "1-2 yrs", category: "AI" },
      { name: "OpenClaw",       iconKey: "openclaw",    colorClass: "text-sky-400",     years: "1-2 yrs", category: "AI" },
      { name: "OpenRouter",     iconKey: "openrouter",  colorClass: "text-indigo-400",  years: "1-2 yrs", category: "AI" },
      { name: "GLM",            iconKey: "glm",         colorClass: "text-blue-400",    years: "1-2 yrs", category: "AI" },
      { name: "MiniMax",        iconKey: "minimax",     colorClass: "text-purple-400",  years: "1-2 yrs", category: "AI" },
      { name: "Kimi",           iconKey: "kimi",        colorClass: "text-teal-400",    years: "1-2 yrs", category: "AI" },
    ],
  },
];
