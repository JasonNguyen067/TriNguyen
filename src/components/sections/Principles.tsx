import PrincipleCard from "@/components/sections/PrincipleCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { principles } from "@/lib/principles";

export default function Principles() {
  return (
    <section className="px-6 py-24 lg:px-12">
      <SectionHeader
        number="02"
        title="Principles"
        blurb="What I try to model my life on."
      />

      <div
        role="list"
        className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2"
      >
        {principles.map((principle, index) => (
          <PrincipleCard
            key={principle.id}
            principle={principle}
            position={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
