import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceTimeline from "@/components/ui/ExperienceTimeline";
import { workExperiences } from "@/lib/experience";

export default function Experience() {
  return (
    <section className="px-6 py-16 lg:px-12">
      <SectionHeader number="03" title="Experience" size="compact">
        <Link
          href="/experience"
          className="group flex items-center gap-2 text-[11px] uppercase tracking-wider text-orange-400 transition-colors hover:text-orange-300"
        >
          View all experience
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </SectionHeader>

      <ExperienceTimeline items={workExperiences} />
    </section>
  );
}
