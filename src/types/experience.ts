/** paid roles vs. student-org roles — they render in separate groups */
export type ExperienceKind = "work" | "involvement";

export type Experience = {
  id: string;
  kind: ExperienceKind;
  period: string;
  company: string;
  role: string;
  description: string;
};
