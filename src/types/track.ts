export type Track = {
  id: string;
  /** the song's real name — not lowercased, same as any other proper title */
  title: string;
  /** who to credit; omit for ambient with nobody to name */
  artist?: string;
  /** path to the file in /public */
  src: string;
  /** square cover art in /public — rows fall back to a plain tile without it */
  art?: string;
};
