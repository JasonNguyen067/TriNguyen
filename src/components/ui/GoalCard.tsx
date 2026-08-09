import Eyebrow from "@/components/ui/Eyebrow";
import type { Goal } from "@/types/goal";

type GoalCardProps = {
  goal: Goal;
};

export default function GoalCard({ goal }: GoalCardProps) {
  const { title, target, horizon, note } = goal;

  return (
    <article
      role="listitem"
      className="rounded-xl border border-border bg-background p-6 transition-colors hover:bg-background-elevated"
    >
      <Eyebrow className="mb-4 uppercase tracking-wider">{horizon}</Eyebrow>

      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-heading text-2xl text-foreground">{title}</h3>
        {target && (
          <span className="font-heading text-3xl text-orange-400">{target}</span>
        )}
      </div>

      {note && (
        <p className="mt-4 border-l border-orange-500/40 pl-4 text-xs leading-relaxed text-foreground/45">
          {note}
        </p>
      )}
    </article>
  );
}
