import {
  SiTypescript, SiJavascript, SiGo, SiRust, SiSolidity, SiPython,
  SiNodedotjs, SiPostgresql, SiRedis, SiSupabase,
  SiEthereum, SiPolygon,
  SiDocker, SiGooglecloud, SiGithub, SiVercel, SiStripe, SiFigma, SiOpenai,
  SiNextdotjs, SiReact, SiTailwindcss,
  SiFirebase, SiExpress, SiMongodb, SiApachekafka, SiGraphql, SiPrisma,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import {
  RiCodeSSlashLine,
  RiExchangeLine,
  RiArrowUpDownLine,
  RiBarChartLine,
  RiFlashlightLine,
  RiSendPlaneLine,
  RiBookOpenLine,
  RiRobot2Line,
  RiGlobalLine,
  RiSettings4Line,
  RiDatabase2Line,
  RiAppsLine,
  RiLineChartLine,
  RiStackLine,
  RiCoinLine,
  RiRepeatLine,
  RiRouteLine,
  RiBrainLine,
  RiMoonLine,
  RiCpuLine,
  RiMagicLine,
} from "react-icons/ri";
import type { Skill } from "@/lib/skills";

// Icon registry: iconKey -> component
const ICONS: Record<string, React.ElementType> = {
  // Languages
  typescript:   SiTypescript,
  javascript:   SiJavascript,
  go:           SiGo,
  rust:         SiRust,
  solidity:     SiSolidity,
  python:       SiPython,

  // Backend
  nodejs:       SiNodedotjs,
  express:      SiExpress,
  postgresql:   SiPostgresql,
  mongodb:      SiMongodb,
  redis:        SiRedis,
  firebase:     SiFirebase,
  supabase:     SiSupabase,
  kafka:        SiApachekafka,
  graphql:      SiGraphql,
  prisma:       SiPrisma,
  api:          RiCodeSSlashLine,
  websocket:    RiArrowUpDownLine,

  // Web3
  ethereum:     SiEthereum,
  solana:       RiGlobalLine,
  ethers:       SiEthereum,
  polygon:      SiPolygon,
  defi:         RiFlashlightLine,
  dapp:         RiAppsLine,
  prediction:   RiLineChartLine,
  layer2:       RiStackLine,
  nft:          RiCoinLine,
  copytrading:  RiRepeatLine,

  // Exchange
  spot:         RiExchangeLine,
  futures:      RiBarChartLine,
  margin:       RiBarChartLine,
  orderbook:    RiDatabase2Line,
  liquidation:  RiFlashlightLine,
  transfer:     RiSendPlaneLine,

  // DevOps
  docker:       SiDocker,
  gcp:          SiGooglecloud,
  cicd:         RiSettings4Line,
  github:       SiGithub,
  vercel:       SiVercel,
  system:       RiBookOpenLine,

  // AI & Tools
  openai:       SiOpenai,
  claude:       RiRobot2Line,
  agent:        RiRobot2Line,
  stripe:       SiStripe,
  figma:        SiFigma,
  vscode:       VscCode,
  hermes:       RiMagicLine,
  openclaw:     RiBrainLine,
  openrouter:   RiRouteLine,
  glm:          RiCpuLine,
  minimax:      RiRobot2Line,
  kimi:         RiMoonLine,

  // Frontend (kept from earlier)
  nextjs:       SiNextdotjs,
  react:        SiReact,
  tailwind:     SiTailwindcss,
};

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const Icon = ICONS[skill.iconKey] ?? RiCodeSSlashLine;

  return (
    <div
      className="flex flex-col items-center justify-center gap-1.5 text-center
                 rounded-xl p-2.5 sm:p-3 3xl:p-4
                 ring-1 ring-[var(--border)]
                 bg-white dark:bg-neutral-900
                 hover:bg-neutral-100 dark:hover:bg-neutral-800
                 active:scale-95
                 transition-all duration-150
                 select-none group"
    >
      <Icon
        className={`size-5 sm:size-6 3xl:size-7 shrink-0
                    ${skill.colorClass}
                    group-hover:scale-110 transition-transform duration-150`}
      />

      <span className="text-xs sm:text-sm font-medium text-[var(--foreground)] leading-tight">
        {skill.name}
      </span>

      <span className="hidden sm:block text-xs text-[var(--muted-foreground)]">
        {skill.years}
      </span>
    </div>
  );
}
