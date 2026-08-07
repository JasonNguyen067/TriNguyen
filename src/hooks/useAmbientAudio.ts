"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

const HINT_DELAY_MS = 5200; // wait for the hero intro to finish
const HINT_DURATION_MS = 7000;
const STATUS_DURATION_MS = 2200;
const ACTIVATION_GRACE_MS = 500;
const PLAYBACK_VOLUME = 0.3;

/** the first of these gestures satisfies the browser's autoplay policy */
const ACTIVATION_EVENTS = ["pointerdown", "keydown", "touchstart"] as const;

/** double-clicks landing on any of these belong to the page, not the toggle */
const INTERACTIVE_SELECTOR =
  "button, a, input, textarea, select, article, [role='button'], [data-no-audio-toggle]";

export type UseAmbientAudioResult = {
  audioRef: RefObject<HTMLAudioElement | null>;
  muted: boolean;
  toastVisible: boolean;
};

/**
 * Starts muted (the only autoplay browsers allow), unmutes on the visitor's
 * first gesture, then lets a double-click on empty space toggle sound.
 */
export function useAmbientAudio(): UseAmbientAudioResult {
  const audioRef = useRef<HTMLAudioElement>(null);
  const activatedAtRef = useRef(0);
  const hideTimerRef = useRef<number | undefined>(undefined);

  const [muted, setMuted] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const showToast = (durationMs: number) => {
      window.clearTimeout(hideTimerRef.current);
      setToastVisible(true);
      hideTimerRef.current = window.setTimeout(
        () => setToastVisible(false),
        durationMs,
      );
    };

    const play = () => {
      // rejects when the browser still refuses; nothing to recover from
      audio.play().catch(() => {});
    };

    const stopListeningForActivation = () => {
      ACTIVATION_EVENTS.forEach((event) =>
        window.removeEventListener(event, activate),
      );
    };

    const activate = () => {
      audio.muted = false;
      audio.volume = PLAYBACK_VOLUME;
      play();
      activatedAtRef.current = Date.now();
      setMuted(false);
      stopListeningForActivation();
    };

    const shouldIgnoreToggle = (event: MouseEvent) => {
      // the double-click that just activated audio would otherwise mute it
      const withinGrace =
        Date.now() - activatedAtRef.current < ACTIVATION_GRACE_MS;
      if (withinGrace) return true;

      const target = event.target as Element | null;
      return Boolean(target?.closest(INTERACTIVE_SELECTOR));
    };

    const toggle = (event: MouseEvent) => {
      if (shouldIgnoreToggle(event)) return;

      audio.muted = !audio.muted;
      if (!audio.muted) play();
      setMuted(audio.muted);
      showToast(STATUS_DURATION_MS);
    };

    ACTIVATION_EVENTS.forEach((event) =>
      window.addEventListener(event, activate),
    );
    window.addEventListener("dblclick", toggle);

    const hintTimer = window.setTimeout(
      () => showToast(HINT_DURATION_MS),
      HINT_DELAY_MS,
    );

    return () => {
      stopListeningForActivation();
      window.removeEventListener("dblclick", toggle);
      window.clearTimeout(hintTimer);
      window.clearTimeout(hideTimerRef.current);
    };
  }, []);

  return { audioRef, muted, toastVisible };
}
