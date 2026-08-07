import type { Experience } from "@/types/experience";

type ExperienceTimelineItemProps = {
  item: Experience;
};

export default function ExperienceTimelineItem({
  item,
}: ExperienceTimelineItemProps) {
  return (
    <li className="relative pb-10 last:pb-0">
      {/* marker sits centred on the rail drawn by the parent list */}
      <span
        aria-hidden="true"
        className="absolute -left-8 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-orange-500 bg-background"
      />

      <p className="mb-2 text-[11px] uppercase tracking-wider text-foreground/45">
        {item.period}
      </p>
      <h3 className="mb-1 font-heading text-xl text-foreground">
        {item.company}
      </h3>
      <p className="mb-2 text-xs text-foreground/70">{item.role}</p>
      <p className="max-w-sm text-xs leading-relaxed text-foreground/45">
        {item.description}
      </p>
    </li>
  );
}
