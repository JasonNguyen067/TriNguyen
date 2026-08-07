"use client";

import { useCallback, useMemo, useState } from "react";

type UseCarouselWindowOptions<T> = {
  items: T[];
  /** how many items are on screen at once */
  size: number;
};

export type UseCarouselWindowResult<T> = {
  visible: T[];
  showPrevious: () => void;
  showNext: () => void;
};

/**
 * Slides a fixed-size window across a list, wrapping past either end so the
 * carousel rotates indefinitely in both directions.
 */
export function useCarouselWindow<T>({
  items,
  size,
}: UseCarouselWindowOptions<T>): UseCarouselWindowResult<T> {
  const [start, setStart] = useState(0);
  const total = items.length;

  const rotate = useCallback(
    (step: number) => {
      setStart((current) => (current + step + total) % total);
    },
    [total],
  );

  const showPrevious = useCallback(() => rotate(-1), [rotate]);
  const showNext = useCallback(() => rotate(1), [rotate]);

  const visible = useMemo(
    () =>
      Array.from(
        { length: Math.min(size, total) },
        (_, offset) => items[(start + offset) % total],
      ),
    [items, size, start, total],
  );

  return { visible, showPrevious, showNext };
}
