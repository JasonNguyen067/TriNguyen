import type { Metadata } from "next";
import ExperienceTimeline from "@/components/ui/ExperienceTimeline";
import { involvementExperiences, workExperiences } from "@/lib/experience";
import { navNumber } from "@/lib/navigation";

export const metadata: Metadata = {
  description: "Where I've worked, and what I've helped run on campus.",
};

export default function ExperiencePage() {
  return (
    <main className="pt-24">
      <section className="px-6 py-24 lg:px-12">
        <span className="mb-1 block text-xs text-orange-400">
          {navNumber("/experience")}
        </span>
        <h1 className="mb-3 font-heading text-5xl text-foreground">
          Experience
        </h1>
        <p className="mb-16 max-w-xl text-sm leading-relaxed text-foreground/45">
          Four internships, plus the campus orgs where I&apos;ve owned projects
          from empty repo to shipped.
        </p>

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-[11px] uppercase tracking-wider text-foreground/45">
              Internships
            </h2>
            <ExperienceTimeline items={workExperiences} />
          </div>

          <div>
            <h2 className="mb-8 text-[11px] uppercase tracking-wider text-foreground/45">
              Involvement
            </h2>
            <ExperienceTimeline items={involvementExperiences} />
          </div>
        </div>

        <p className="mt-20 max-w-xl border-t border-border pt-8 text-sm leading-relaxed text-foreground/70">
          Currently looking for Winter, Spring, and Summer 2027 co-ops —
          primarily C++ backend and infrastructure roles. I also have enterprise
          Java experience from USAA, and most of what I&apos;ve shipped is
          full-stack, so I can work anywhere on the stack a team needs me.
        </p>
      </section>
    </main>
  );
}
