"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const HINT_DELAY = 5200; // wait for the hero intro to finish
const HINT_DURATION = 7000;
const STATUS_DURATION = 2200;

export default function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const activatedAt = useRef(0);
  const hideTimer = useRef<number | undefined>(undefined);

  const [muted, setMuted] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const showToast = (ms: number) => {
      window.clearTimeout(hideTimer.current);
      setVisible(true);
      hideTimer.current = window.setTimeout(() => setVisible(false), ms);
    };

    const events = ["pointerdown", "keydown", "touchstart"];

    const stopListening = () => {
      events.forEach((e) => window.removeEventListener(e, unmute));
    };

    const unmute = () => {
      audio.muted = false;
      audio.volume = 0.3;
      audio.play().catch(() => {});
      activatedAt.current = Date.now();
      setMuted(false);
      stopListening();
    };

    // double-click on empty space toggles sound on/off
    const toggle = (event: MouseEvent) => {
      // ignore the double-click that just triggered the initial unmute
      if (Date.now() - activatedAt.current < 500) return;

      // don't hijack double-clicks on content or anything interactive
      const target = event.target as Element | null;
      if (
        target?.closest(
          "button, a, input, textarea, select, article, [role='button'], [data-no-audio-toggle]",
        )
      ) {
        return;
      }

      audio.muted = !audio.muted;
      if (!audio.muted) audio.play().catch(() => {});
      setMuted(audio.muted);
      showToast(STATUS_DURATION);
    };

    events.forEach((e) => window.addEventListener(e, unmute));
    window.addEventListener("dblclick", toggle);

    const hintTimer = window.setTimeout(
      () => showToast(HINT_DURATION),
      HINT_DELAY,
    );

    return () => {
      stopListening();
      window.removeEventListener("dblclick", toggle);
      window.clearTimeout(hintTimer);
      window.clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/Clouds.mp3" autoPlay loop muted playsInline />

      <AnimatePresence>
        {visible && (
          <motion.div
            data-no-audio-toggle
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2.5 font-body text-xs text-foreground/70 backdrop-blur-md"
          >
            <motion.span
              aria-hidden="true"
              className={`text-sm leading-none ${muted ? "opacity-40" : ""}`}
              animate={muted ? { y: 0, rotate: 0 } : { y: [0, -3, 0], rotate: [0, -6, 0] }}
              transition={
                muted
                  ? { duration: 0.2 }
                  : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
              }
            >
              🚀
            </motion.span>

            {muted ? (
              <span>
                Double-click anywhere for{" "}
                <span className="text-orange-400">sound</span>
              </span>
            ) : (
              <span>
                <span className="text-orange-400">Sound on</span> — double-click
                to mute
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
