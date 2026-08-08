"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SONG_VOLUME = 0.5;

export type UseMomentSongResult = {
  /** id of the moment currently playing, or null when nothing is */
  playingId: string | null;
  toggleSong: (id: string, src: string) => void;
};

/**
 * Owns a single audio element shared by every card, so starting one track
 * replaces the last instead of stacking a second one on top of it.
 */
export function useMomentSong(): UseMomentSongResult {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  // built lazily: `new Audio()` only exists in the browser
  const getAudio = useCallback((): HTMLAudioElement => {
    if (!audioRef.current) {
      const audio = new Audio();
      audio.volume = SONG_VOLUME;
      audio.addEventListener("ended", () => setPlayingId(null));
      audioRef.current = audio;
    }
    return audioRef.current;
  }, []);

  const toggleSong = useCallback(
    (id: string, src: string) => {
      const audio = getAudio();

      if (playingId === id) {
        audio.pause();
        setPlayingId(null);
        return;
      }

      audio.src = src;
      audio.currentTime = 0;
      // rejects if the file is missing or the browser blocks it
      audio.play().catch(() => setPlayingId(null));
      setPlayingId(id);
    },
    [getAudio, playingId],
  );

  // stop playback if the section unmounts mid-song
  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return { playingId, toggleSong };
}
