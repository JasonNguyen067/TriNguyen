import type { ProjectStat } from "@/types/project";

type StatGridProps = {
  stats: ProjectStat[];
};

/** the figure-over-label row used under project write-ups */
export default function StatGrid({ stats }: StatGridProps) {
  if (stats.length === 0) return null;

  return (
    <dl className="flex flex-wrap gap-x-10 gap-y-5">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="font-heading text-2xl text-orange-400">
            {stat.value}
          </dt>
          <dd className="mt-1 text-[11px] uppercase tracking-wider text-foreground/45">
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
