import CompetitionCard from "@/components/ui/CompetitionCard";
import SectionHeader from "@/components/ui/SectionHeader";
import TagList from "@/components/ui/TagList";
import { competitions, otherEvents } from "@/lib/competitions";

export default function Competitions() {
  return (
    <section className="px-6 py-16 lg:px-12">
      <SectionHeader number="04" title="Competitions" size="compact" />

      <div className="grid grid-cols-2 gap-4">
        {competitions.map((competition) => (
          <CompetitionCard key={competition.id} competition={competition} />
        ))}
      </div>

      {otherEvents.length > 0 && (
        <div className="mt-6 border-t border-border pt-5">
          <p className="mb-3 text-[11px] uppercase tracking-wider text-foreground/45">
            Also competed
          </p>
          <TagList tags={otherEvents} />
        </div>
      )}
    </section>
  );
}
