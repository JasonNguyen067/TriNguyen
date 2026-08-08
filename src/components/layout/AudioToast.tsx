import { AnimatePresence, motion } from "motion/react";

type AudioToastProps = {
  visible: boolean;
  muted: boolean;
};

const IDLE_ROCKET = { y: 0, rotate: 0 };
const DRIFTING_ROCKET = { y: [0, -3, 0], rotate: [0, -6, 0] };

const IDLE_TRANSITION = { duration: 0.2 };
const DRIFTING_TRANSITION = {
  duration: 1.8,
  repeat: Infinity,
  ease: "easeInOut",
} as const;

function ToastMessage({ muted }: { muted: boolean }) {
  if (muted) {
    return (
      <span>
        Double-click anywhere for{" "}
        <span className="text-orange-400">sound</span>
      </span>
    );
  }

  return (
    <span>
      <span className="text-orange-400">Sound on</span> — double-click to mute
    </span>
  );
}

export default function AudioToast({ visible, muted }: AudioToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-no-audio-toggle
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2.5 text-xs text-foreground/70 backdrop-blur-md"
        >
          <motion.span
            aria-hidden="true"
            className={`text-sm leading-none ${muted ? "opacity-40" : ""}`}
            animate={muted ? IDLE_ROCKET : DRIFTING_ROCKET}
            transition={muted ? IDLE_TRANSITION : DRIFTING_TRANSITION}
          >
            🚀
          </motion.span>

          <ToastMessage muted={muted} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
