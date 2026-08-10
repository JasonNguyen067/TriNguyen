"use client";

import Link from "next/link";
import { AnimatePresence } from "motion/react";
import CarouselControls from "@/components/ui/CarouselControls";
import MomentCard from "@/components/ui/MomentCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { useCarouselWindow } from "@/hooks/useCarouselWindow";
import { useMomentSong } from "@/hooks/useMomentSong";
import { moments } from "@/lib/moments";
import type { Moment } from "@/types/moment";

const VISIBLE_CARDS = 5;

export default function Moments() {
  const { visible, showPrevious, showNext } = useCarouselWindow({
    items: moments,
    size: VISIBLE_CARDS,
  });
  const { playingId, toggleSong } = useMomentSong();

  const handleToggleSong = (moment: Moment) => {
    if (!moment.song) return;
    toggleSong(moment.id, moment.song);
  };

  return (
    <section className="px-6 py-24 lg:px-12">
      <SectionHeader
        number="01"
        title="Moments"
        blurb="A few snapshots along the way."
      >
        <div className="flex items-center gap-4">
          <Link
            href="/moments"
            className="text-xs text-foreground/45 transition-colors hover:text-orange-400"
          >
            view all {moments.length}
          </Link>

          <CarouselControls
            onPrevious={showPrevious}
            onNext={showNext}
            label="moment"
          />
        </div>
      </SectionHeader>

      <div className="grid grid-flow-col auto-cols-[minmax(240px,1fr)] gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((moment, index) => (
            <MomentCard
              key={moment.id}
              moment={moment}
              isLead={index === 0}
              isPlaying={playingId === moment.id}
              onToggleSong={handleToggleSong}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
