"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Freezes page scrolling while the intro animation plays and hands back a
 * `release` callback to call when it finishes.
 *
 * The released flag is scoped to each effect run, so a remount always gets a
 * fresh lock — a stale flag can never leave the page permanently frozen.
 */
export function useIntroScrollLock(fallbackMs: number): () => void {
  const releaseRef = useRef<() => void>(() => {});

  useEffect(() => {
    let released = false;

    const release = () => {
      if (released) return;
      released = true;
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };

    releaseRef.current = release;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // safety net in case the animation callback never fires
    const fallback = window.setTimeout(release, fallbackMs);

    return () => {
      window.clearTimeout(fallback);
      release();
    };
  }, [fallbackMs]);

  return useCallback(() => releaseRef.current(), []);
}
