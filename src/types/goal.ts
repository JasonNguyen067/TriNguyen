export type Goal = {
  id: string;
  title: string;
  /** the number that decides it — omitted for goals measured by showing up */
  target?: string;
  /** the deadline, as a phrase: "before school starts" */
  horizon: string;
  /** what the number actually means, or why it's the one being chased */
  note?: string;
};

export type GoalGroup = {
  id: string;
  title: string;
  /** one line on what this whole group is for */
  blurb?: string;
  goals: Goal[];
};
