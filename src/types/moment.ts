export type Moment = {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  /**
   * CSS object-position for the crop, e.g. "60% 50%".
   * Cards are tall and narrow, so wide photos lose their edges — use this to
   * pick which part survives. Defaults to dead center.
   */
  imagePosition?: string;
  /**
   * "contain" shrinks the photo until all of it fits, letterboxed against the
   * card. Use it for wide group shots where cropping would cut people out.
   * Defaults to "cover", which fills the card and crops.
   */
  imageFit?: "cover" | "contain";
  /** optional track in /public — double-clicking the card plays it */
  song?: string;
};
