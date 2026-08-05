export type ProjectStat = {
  /** the headline figure, e.g. "17K+" */
  value: string;
  /** what it measures, e.g. "Monthly users" */
  label: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  /** one line under the title */
  tagline: string;
  period: string;
  role: string;
  /** shown as a badge when the project won something */
  award?: string;
  description: string;
  stats: ProjectStat[];
  tech: string[];
  links?: ProjectLink[];
};
