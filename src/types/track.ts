export type Track = {
  id: string;
  title: string;
  artist: string;
  /** the audio file in /public/audio */
  src: string;
  /** cover art in /public/covers */
  art: string;
};
