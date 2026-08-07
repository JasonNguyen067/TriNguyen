import { Heart, Medal, Star, Trophy, type LucideIcon } from "lucide-react";
import type { Competition, CompetitionIcon } from "@/types/competition";

const icons: Record<CompetitionIcon, LucideIcon> = {
  trophy: Trophy,
  heart: Heart,
  medal: Medal,
  star: Star,
};

type CompetitionCardProps = {
  competition: Competition;
};

export default function CompetitionCard({ competition }: CompetitionCardProps) {
  const Icon = icons[competition.icon];

  return (
    <article className="flex flex-col items-center rounded-xl border border-border bg-background-elevated/60 p-6 text-center transition-colors hover:border-foreground/20">
      <Icon className="mb-4 h-7 w-7 text-orange-400" strokeWidth={1.5} />
      <h3 className="font-heading text-lg text-foreground">
        {competition.title}
      </h3>
      <p className="mt-1 text-[11px] text-foreground/45">{competition.event}</p>
    </article>
  );
}
