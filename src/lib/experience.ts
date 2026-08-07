import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "usaa",
    kind: "work",
    period: "May 2026 — Present",
    company: "USAA",
    role: "Software Engineering Intern",
    description:
      "Internal infrastructure tooling for discovering and governing 2,000+ Kafka topics, backed by Spring Boot APIs over 10M+ records. Used by banking and other product teams across USAA.",
  },
  {
    id: "uvsa",
    kind: "work",
    period: "Aug 2025 — Jun 2026",
    company: "UVSA",
    role: "Software Engineering Intern",
    description:
      "0-to-1 development of uvsa.org, serving 5,000+ members across 12 universities.",
  },
  {
    id: "playtime",
    kind: "work",
    period: "Oct — Dec 2025",
    company: "Playtime Planning",
    role: "Software Engineering Intern",
    description:
      "Helped parents discover after-school activities for their kids — tuned the AI assistant to 18% better answer accuracy and rebuilt desktop-only views for mobile.",
  },
  {
    id: "cacheai",
    kind: "work",
    period: "Jul — Sep 2025",
    company: "Cache.AI",
    role: "Backend Engineering Intern",
    description:
      "Internal developer tooling and API endpoints for interview scheduling, with 40+ Postman suites that cut staging bugs by 60%.",
  },

  {
    id: "fusion-pinoyport",
    kind: "involvement",
    period: "Nov 2025 — May 2026",
    company: "Fusion ICS — PinoyPort",
    role: "Full Stack Lead Software Developer",
    description:
      "Led 8 developers through weekly sprints — designed the Supabase schema across 5 tables, merged 40 PRs, wired GitHub Actions into CI/CD, and ran sessions teaching beginners Git, React, and code review.",
  },
  {
    id: "antalmanac",
    kind: "involvement",
    period: "Nov 2025 — Present",
    company: "AntAlmanac Planner",
    role: "Full Stack Software Developer",
    description:
      "Course discovery and planning app used by 17,000+ UCI students every month. 15+ merged PRs across Redux caching, tRPC endpoints, and the Postgres layer.",
  },
  {
    id: "ai-uci",
    kind: "involvement",
    period: "May 2025 — May 2026",
    company: "Artificial Intelligence @ UCI",
    role: "Web Developer",
    description:
      "Rebuilt the org site from the ground up on a modern stack, then owned it through a year of content and feature updates.",
  },
  {
    id: "vcs-uci",
    kind: "involvement",
    period: "Apr 2025 — Apr 2026",
    company: "VCS @ UCI",
    role: "Co-VP of Technology",
    description:
      "Maintained the VCS site across the year — content, fixes, and feature updates on an existing codebase.",
  },
];

export const workExperiences = experiences.filter(
  (item) => item.kind === "work",
);

export const involvementExperiences = experiences.filter(
  (item) => item.kind === "involvement",
);
