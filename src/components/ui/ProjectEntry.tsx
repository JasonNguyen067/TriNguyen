import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import StatGrid from "@/components/ui/StatGrid";
import TagList from "@/components/ui/TagList";
import type { Project } from "@/types/project";

type ProjectEntryProps = {
  project: Project;
  /** the "01", "02" … marker down the left edge */
  index: string;
};

function AwardBadge({ award }: { award: string }) {
  return (
    <span className="inline-block rounded-full border border-orange-500/40 px-3 py-1 text-[11px] text-orange-400">
      {award}
    </span>
  );
}

function ProjectLinks({ links }: { links: Project["links"] }) {
  if (!links || links.length === 0) return null;

  return (
    <div className="mt-8 flex flex-wrap gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-orange-400 transition-colors hover:text-orange-300"
        >
          {link.label}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      ))}
    </div>
  );
}

export default function ProjectEntry({ project, index }: ProjectEntryProps) {
  return (
    <article className="grid gap-8 border-t border-border py-14 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-16">
      <div className="flex flex-col gap-3">
        <span className="text-xs text-orange-400">{index}</span>
        <p className="text-[11px] uppercase tracking-wider text-foreground/45">
          {project.period}
        </p>
        <p className="text-xs text-foreground/70">{project.role}</p>
        {project.award && <AwardBadge award={project.award} />}
      </div>

      <div>
        <h2 className="font-heading text-3xl text-foreground">
          {project.title}
        </h2>
        <p className="mt-2 text-sm text-foreground/70">{project.tagline}</p>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground/60">
          {project.description}
        </p>

        <div className="mt-8">
          <StatGrid stats={project.stats} />
        </div>

        <TagList tags={project.tech} className="mt-8" />

        <ProjectLinks links={project.links} />
      </div>
    </article>
  );
}
