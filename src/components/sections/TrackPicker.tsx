"use client";

import TrackOption from "@/components/ui/TrackOption";
import { useAmbientTrack } from "@/hooks/useAmbientTrack";
import { tracks } from "@/lib/tracks";

export default function TrackPicker() {
  const { trackId, selectTrack } = useAmbientTrack();

  return (
    <ul role="list" className="max-w-xl divide-y divide-border">
      {tracks.map((track) => (
        <li key={track.id}>
          <TrackOption
            track={track}
            isSelected={track.id === trackId}
            onSelect={selectTrack}
          />
        </li>
      ))}
    </ul>
  );
}
