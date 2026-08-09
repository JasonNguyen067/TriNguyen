"use client";

import { createContext, useMemo, type ReactNode } from "react";
import AudioToast from "@/components/layout/AudioToast";
import { useAmbientAudio } from "@/hooks/useAmbientAudio";
import { useTrackPreference } from "@/hooks/useTrackPreference";
import { getTrack, tracks } from "@/lib/tracks";

export type AmbientTrackValue = {
  trackId: string;
  selectTrack: (id: string) => void;
};

export const AmbientTrackContext = createContext<AmbientTrackValue | null>(
  null,
);

type AmbientAudioProviderProps = {
  children: ReactNode;
};

/**
 * Owns the one ambient audio element for the whole site. It sits above the
 * routes so navigating never restarts the track, and exposes the current choice
 * through context because the picker page is a sibling of the element, not a
 * child of it.
 */
export default function AmbientAudioProvider({
  children,
}: AmbientAudioProviderProps) {
  const { trackId, selectTrack } = useTrackPreference();

  const src = getTrack(trackId)?.src ?? tracks[0].src;
  const { audioRef, muted, toastVisible } = useAmbientAudio(src);

  const value = useMemo(
    () => ({ trackId, selectTrack }),
    [trackId, selectTrack],
  );

  return (
    <AmbientTrackContext.Provider value={value}>
      <audio ref={audioRef} src={src} autoPlay loop muted playsInline />
      <AudioToast visible={toastVisible} muted={muted} />
      {children}
    </AmbientTrackContext.Provider>
  );
}
