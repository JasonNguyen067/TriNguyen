import Image from "next/image";
import { motion } from "motion/react";
import type { Moment } from "@/types/moment";

type MomentCardProps = {
  moment: Moment;
  /** the leading card in the window gets the accent border */
  isLead: boolean;
};

const CARD_BASE =
  "relative h-[420px] overflow-hidden rounded-xl border transition-colors";

export default function MomentCard({ moment, isLead }: MomentCardProps) {
  const borderClasses = isLead ? "border-orange-500/70" : "border-border";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`${CARD_BASE} ${borderClasses}`}
    >
      <Image
        src={moment.image}
        alt={moment.title}
        fill
        sizes="(max-width: 1024px) 60vw, 20vw"
        className="object-cover"
      />

      {/* scrim so the copy stays readable over the photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="mb-2 text-[11px] uppercase tracking-wider text-orange-400">
          {moment.date}
        </p>
        <h3 className="mb-2 font-heading text-xl text-foreground">
          {moment.title}
        </h3>
        <p className="text-xs leading-relaxed text-foreground/70">
          {moment.description}
        </p>
      </div>
    </motion.article>
  );
}
