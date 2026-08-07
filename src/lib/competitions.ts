import type { Competition } from "@/types/competition";

export const competitions: Competition[] = [
  {
    id: "best-ux",
    icon: "trophy",
    title: "Best UX",
    event: "FUSIONCon 2026",
  },
  {
    id: "best-social-impact",
    icon: "heart",
    title: "Best Social Impact",
    event: "CutieHacks 2025",
  },
  {
    id: "second-overall",
    icon: "medal",
    title: "2nd Overall",
    event: "Design @ UCI 2025",
  },
  {
    id: "audience-choice",
    icon: "star",
    title: "Audience Choice",
    event: "Design @ UCI 2025",
  },
];

/** hackathons entered without placing — listed, not awarded */
export const otherEvents = ["FullyHacks 2025", "CitrusHacks 2025"];
