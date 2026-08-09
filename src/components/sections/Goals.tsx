import GoalCard from "@/components/ui/GoalCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { formatIndex } from "@/lib/format";
import { goalGroups } from "@/lib/goals";

export default function Goals() {
  return (
    <>
      {goalGroups.map((group, index) => (
        <section key={group.id} className="px-6 pb-24 lg:px-12">
          <SectionHeader
            number={formatIndex(index + 1)}
            title={group.title}
            blurb={group.blurb}
            size="compact"
          />

          <div role="list" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {group.goals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
