"use client";

import MomentCard from "@/components/ui/MomentCard";
import { useMomentSong } from "@/hooks/useMomentSong";
import { moments } from "@/lib/moments";
import type { Moment } from "@/types/moment";

/** cards go full width on a phone and quarter width on a wide screen */
const GRID_SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw";

export default function MomentsGallery() {
  const { playingId, toggleSong } = useMomentSong();

  const handleToggleSong = (moment: Moment) => {
    if (!moment.song) return;
    toggleSong(moment.id, moment.song);
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {moments.map((moment) => (
        <MomentCard
          key={moment.id}
          moment={moment}
          isPlaying={playingId === moment.id}
          onToggleSong={handleToggleSong}
          sizes={GRID_SIZES}
        />
      ))}
    </div>
  );
}
