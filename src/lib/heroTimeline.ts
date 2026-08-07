type CubicBezier = [number, number, number, number];

/**
 * One source of truth for the hero intro choreography. Every delay below is
 * in seconds and relative to page load.
 */
export const heroTimeline = {
  /** the photo unfurls from a horizon line */
  reveal: {
    delay: 0.8,
    duration: 1.8,
    ease: [0.65, 0, 0.35, 1] as CubicBezier,
  },
  /** headline fades in, holds, fades out */
  headline: {
    duration: 4.2,
    times: [0, 0.15, 0.75, 1],
    keyframes: [0, 1, 1, 0],
  },
  /** intro copy arrives last and releases the scroll lock */
  intro: {
    delay: 4.2,
    duration: 0.8,
  },
};

/** slightly past the end of the timeline, so the lock can't outlive it */
export const SCROLL_LOCK_FALLBACK_MS = 6500;
