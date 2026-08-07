import type { JournalEntry } from "@/types/journal";

const entries: JournalEntry[] = [
  {
    slug: "growth",
    date: "2026-08-07",
    title: "texas",
    summary:
      "the summer that returned my regulation",
      tags: ["growth", "reflection"],
      body: [
        "this internship brought back what i needed mentally. " +
          "sleeping early, following a structured routine, " +
          "and being around great people every day showed me how much an environment shapes who you become.",

        "i felt the mental gains climb. " +
          "i became much calmer, able to think through my thoughts and my decisions again.",
          "something i felt like i had lost since coming into college, and pledging a fraternity"
      ],
  },
  {
    slug: "cut-loss",
    date: "2026-08-07",
    title: "cut losses",
    summary:
      "being able to turn a new page",
      tags: ["growth", "reflection"],
      body: [
        "knowing when to let something go is one of the hardest skills to build, and one of the most important. " +
          "it saves you money in the markets, time in a job you have outgrown, " +
          "and the years a wrong career takes without ever announcing it.",

        "the harder version is people. " +
          "staying around people you do not align with is rarely about them. " +
          "it is about not having enough respect for yourself to walk away from someone who does not value you.",
      ],
  },
  {
    slug: "inevitable-success",
    date: "2026-08-03",
    title: "the formula",
    summary:
      "consistency, conviction, kindness",
    tags: ["thoughts"],
    body: [
      "i watched jared mccain's training videos from my freshman year of high school to my sophomore year of college. " +
        "4:30 a.m., three sessions a day, the entire time. " +
        "six years of footage and none of the individual days looked like anything. " +
        "a guy in an empty gym putting up the same shot.",

      "scouts had him as an undersized guard. " +
        "too slow, not athletic enough to stick. " +
        "the knock followed him to duke, where the read was that his game wouldn't translate against that level of size and speed. " +
        "he had a rough couple of months to open the season and then shot his way out of it, finishing the year as one of the most efficient volume shooters in the country. " +
        "he then developed a great game creating shots off the dribble as well.",

      "his rookie year opened the same way. " +
        "slow start, not much of a role. " +
        "minutes came when people ahead of him went down, and by november he was scoring enough that his name was in the rookie of the year conversation. " +
        "then his knee went and the season was over in december.",

      "what came after is the part i think about most, because it is the part nobody puts in a highlight package. " +
        "sent down to the g league and back up. " +
        "games in a suit. " +
        "a trade that everybody read as the end of his playing time. " +
        "he came out of that stretch starting in the conference finals as the second option on a team that finished a series short of the finals.",

      "none of that was visible in the footage i was watching in 2020. " +
        "that is the whole point. " +
        "the days do not announce themselves — they just accumulate, and then one season the accumulation is the only explanation for what you are looking at.",

      "consistency compounds. " +
        "it shows up later than you want it to, and it shows up.",

      "believe it, then act like you believe it. " +
        "put in the work when there is nothing to show for it, stay kind while you do, " +
        "and block out the noise from people grading you on the wrong stretch. " +
        "trust the process and it will show for itself.",
    ],
  },
  {
    slug: "depth",
    date: "2026-08-04",
    title: "exponential growth",
    summary:
      "i spent two years collecting breadth. the people who picked two things came out with something to point at.",
    tags: ["depth", "reflection"],
    body: [
      "outliers puts a number on it — 10,000 hours in one niche, start early enough that they compound. " +
        "the beatles played hamburg eight hours a night, seven nights a week, over a thousand shows before america had heard of them. " +
        "gates had terminal access at 13 in 1968, when almost nobody did.",

      "every person i have seen get great at something picked a niche and dialed down on it. " +
        "a club, a project, an internship — it did not matter which. " +
        "they went all in, and the knowledge compounded on itself.",
    ],
  },
];

/** newest first — the order the journal is always read in */
export function getJournalEntries(): JournalEntry[] {
  return [...entries].sort((a, b) => b.date.localeCompare(a.date));
}

export function getJournalEntry(slug: string): JournalEntry | undefined {
  return entries.find((entry) => entry.slug === slug);
}
