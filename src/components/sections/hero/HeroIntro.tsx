import { motion } from "motion/react";
import { heroTimeline } from "@/lib/heroTimeline";

type HeroIntroProps = {
  /** runs once the copy has finished animating in */
  onArrived: () => void;
};

export default function HeroIntro({ onArrived }: HeroIntroProps) {
  return (
    <motion.div
      className="absolute bottom-24 left-16 text-sm text-white/80"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={heroTimeline.intro}
      onAnimationComplete={onArrived}
    >
      <p className="mb-2 text-orange-400">Hi, I&apos;m Jason Nguyen</p>
      <p className="max-w-md">
        I build backend systems, developer tools, and products that help people
        work more effectively.
      </p>
    </motion.div>
  );
}
