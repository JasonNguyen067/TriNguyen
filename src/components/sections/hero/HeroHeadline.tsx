import { motion } from "motion/react";
import { heroTimeline } from "@/lib/heroTimeline";

const { duration, times, keyframes } = heroTimeline.headline;

export default function HeroHeadline() {
  return (
    <motion.h1
      className="absolute inset-0 flex items-center justify-center gap-10 font-heading text-6xl text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: keyframes }}
      transition={{ duration, times, ease: "easeInOut" }}
    >
      <span>Building systems.</span>
      <span aria-hidden="true" className="h-16 w-px bg-white/40" />
      <span>
        Building <span className="italic text-orange-400">myself.</span>
      </span>
    </motion.h1>
  );
}
