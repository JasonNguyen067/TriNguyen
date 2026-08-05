export type JournalEntry = {
  /** url segment — /journal/<slug> */
  slug: string;
  /** ISO `YYYY-MM-DD`; sorting and display both derive from this */
  date: string;
  title: string;
  /** one-line teaser, index page only */
  summary: string;
  tags: string[];
  /** one string per paragraph */
  body: string[];
};
