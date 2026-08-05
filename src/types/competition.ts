export type CompetitionIcon = "trophy" | "heart" | "medal" | "star";

export type Competition = {
  id: string;
  icon: CompetitionIcon;
  title: string;
  event: string;
};
