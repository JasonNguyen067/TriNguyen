import type { Metadata } from "next";
import ProjectEntry from "@/components/ui/ProjectEntry";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Jason Nguyen",
  description: "Projects I've built, and what came out of them.",
};

const formatIndex = (position: number) =>
  String(position + 1).padStart(2, "0");

export default function ProjectsPage() {
  return (
    <main className="pt-24">
      <section className="px-6 py-24 lg:px-12">
        <span className="mb-1 block text-xs text-orange-400">02</span>
        <h1 className="mb-3 font-heading text-5xl text-foreground">Work</h1>
        <p className="mb-20 max-w-xl text-sm leading-relaxed text-foreground/45">
          Things I&apos;ve built — open source, hackathons, and a personal
          project or two. Numbers where there are numbers.
        </p>

        <div>
          {projects.map((project, position) => (
            <ProjectEntry
              key={project.id}
              project={project}
              index={formatIndex(position)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
