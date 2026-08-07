import type { Project } from "@/types/project";

// TODO: add `links` (repo / live site) once you've confirmed the URLs —
// left off deliberately rather than guessed.
export const projects: Project[] = [
  {
    id: "antalmanac",
    title: "AntAlmanac",
    tagline: "Course discovery and planning for UCI students.",
    period: "Nov 2025 — Present",
    role: "Full Stack Developer",
    description:
      "Open-source planner that 17,000 students hit every month during registration. I killed the redundant API calls with a Redux cache so the catalog loads instantly after the first fetch, and built the notes feature end to end — four tRPC CRUD endpoints with session auth over Postgres via Drizzle.",
    stats: [
      { value: "17K+", label: "Monthly users" },
      { value: "40–60%", label: "Faster catalog loads" },
      { value: "1,700 min", label: "User wait saved / month" },
    ],
    tech: ["TypeScript", "Next.js", "tRPC", "Drizzle", "PostgreSQL", "Redux"],
  },
  {
    id: "pinoyport",
    title: "PinoyPort",
    tagline: "Fusion ICS project, built with an eight-person team.",
    period: "Nov 2025 — May 2026",
    role: "Full Stack Lead",
    award: "Best User Experience",
    description:
      "I led eight developers through weekly sprints, designed the relational schema across five tables, and set up GitHub Actions so tests ran on every PR. Most of the team had never opened a pull request before — a good chunk of the job was teaching Git, React, and how to give a useful code review.",
    stats: [
      { value: "8", label: "Developers led" },
      { value: "40", label: "PRs merged" },
      { value: "5", label: "Data models designed" },
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "spoilsafe",
    title: "SpoilSafe",
    tagline: "Reads your receipt, tells you what's about to go bad.",
    period: "Dec 2025",
    role: "Backend Developer",
    award: "Best Social Impact — CutieHacks",
    description:
      "Food-waste app that turns a photo of a grocery receipt into structured product data. The backend runs images through a Gemini OCR pipeline, then validates and normalizes the output — prompt tuning and post-processing got it reliable across wildly inconsistent receipt formats.",
    stats: [
      { value: "92%+", label: "Extraction accuracy" },
      { value: "120+", label: "Hackathon competitors" },
    ],
    tech: ["Express.js", "PostgreSQL", "AWS S3", "Gemini OCR"],
  },
  {
    id: "quanttrade",
    title: "QuantTrade",
    tagline: "Trading strategy simulator backed by an LSTM.",
    period: "Apr — Jun 2025",
    role: "Personal Project",
    description:
      "An LSTM forecasts short-term price movement, and a rule-based simulator acts on it — buying or selling when the model predicts a swing past ±0.5%, then tracking portfolio value and trade history against a $10,000 starting balance.",
    stats: [
      { value: "100", label: "Training epochs" },
      { value: "±0.5%", label: "Signal threshold" },
      { value: "$10K", label: "Simulated balance" },
    ],
    tech: ["Python", "PyTorch", "Flask", "PostgreSQL", "pandas", "yfinance"],
  },
];
