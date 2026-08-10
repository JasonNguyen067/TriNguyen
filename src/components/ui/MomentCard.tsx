import Image from "next/image";
import { motion } from "motion/react";
import type { Moment } from "@/types/moment";

type MomentCardProps = {
  moment: Moment;
  /** the leading card in the carousel window gets the accent border */
  isLead?: boolean;
  isPlaying: boolean;
  onToggleSong: (moment: Moment) => void;
  /** next/image `sizes` — the carousel and the full grid render cards at different widths */
  sizes?: string;
};

const CAROUSEL_SIZES = "(max-width: 1024px) 60vw, 20vw";

const CARD_BASE =
  "relative h-[420px] overflow-hidden rounded-xl border transition-colors";

export default function MomentCard({
  moment,
  isLead = false,
  isPlaying,
  onToggleSong,
  sizes = CAROUSEL_SIZES,
}: MomentCardProps) {
  const hasSong = Boolean(moment.song);
  const borderClasses = isPlaying
    ? "border-orange-400"
    : isLead
      ? "border-orange-500/70"
      : "border-border";

  const handleDoubleClick = () => {
    if (!hasSong) return;
    onToggleSong(moment);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onDoubleClick={handleDoubleClick}
      // this card owns its double-click; the ambient toggle must stay out of it
      data-no-audio-toggle
      title={hasSong ? "double-click to play" : undefined}
      className={`${CARD_BASE} ${borderClasses} ${hasSong ? "cursor-pointer select-none" : ""}`}
    >
      <Image
        src={moment.image}
        alt={moment.title}
        fill
        sizes={sizes}
        style={{ objectPosition: moment.imagePosition }}
        className={moment.imageFit === "contain" ? "object-contain" : "object-cover"}
      />

      {/* scrim so the copy stays readable over the photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {isPlaying && <NowPlayingBadge />}

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

function NowPlayingBadge() {
  return (
    <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 text-[10px] uppercase tracking-wider text-orange-400">
      <span className="size-1.5 animate-pulse rounded-full bg-orange-400" />
      playing
    </div>
  );
}
