import ExperienceTimelineItem from "@/components/ui/ExperienceTimelineItem";
import type { Experience } from "@/types/experience";

type ExperienceTimelineProps = {
  items: Experience[];
};

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <ol className="relative pl-8">
      {/* the timeline rail */}
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-[5px] top-2 w-px bg-border"
      />

      {items.map((item) => (
        <ExperienceTimelineItem key={item.id} item={item} />
      ))}
    </ol>
  );
}
