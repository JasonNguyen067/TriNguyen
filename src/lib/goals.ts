import type { GoalGroup } from "@/types/goal";

export const goalGroups: GoalGroup[] = [
  {
    id: "fitness",
    title: "fitness",
    goals: [
      {
        id: "bench-275",
        title: "bench",
        target: "275",
        horizon: "before school starts",
      },
      {
        id: "squat-405x5",
        title: "squat",
        target: "405 × 5",
        horizon: "before school starts",
      },
      {
        id: "deadlift-450",
        title: "conventional deadlift",
        target: "450",
        horizon: "before school starts",
      },
      {
        id: "bench-335",
        title: "bench",
        target: "335",
        horizon: "end of year",
      },
      {
        id: "squat-505",
        title: "squat",
        target: "505",
        horizon: "end of year",
      },
      {
        id: "deadlift-505",
        title: "conventional deadlift",
        target: "505",
        horizon: "end of year",
      },
      {
        id: "kickboxing",
        title: "kickboxing",
        horizon: "ongoing",
      },
    ],
  },
  {
    id: "cs",
    title: "cs",
    goals: [
      {
        id: "daily-commits",
        title: "ship daily",
        target: "1–2 / day",
        horizon: "every day",
        note:
          "one or two commits a day, 30 minutes of coding minimum. " +
          "spaced repetition and the law of accumulation — small reps every day beat one long session on the weekend.",
      },
      {
        id: "leetcode-800",
        title: "leetcode",
        target: "800",
        horizon: "end of year",
        note:
          "volume until the patterns are reflex instead of recall. " +
          "interviews don't give you time to derive anything from scratch.",
      },
    ],
  },
  {
    id: "school",
    title: "school",
    goals: [
      {
        id: "study-consistency",
        title: "study consistently",
        horizon: "this year",
        note:
          "some days i don't study at all to relax, then i sit down for four or five hours to make up the lost time. " +
          "the weekly total looks fine on paper and almost none of it sticks.",
      },
    ],
  },
];
