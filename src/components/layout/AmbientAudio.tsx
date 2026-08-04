"use client";
import { useEffect, useRef } from "react";

export default function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const events = ["pointerdown", "keydown", "touchstart"];

    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, unmute));
    };

    const unmute = () => {
      audio.muted = false;
      audio.volume = 0.3;
      audio.play().catch(() => {});
      cleanup();
    };

    events.forEach((e) => window.addEventListener(e, unmute));
    return cleanup;
  }, []);

  return <audio ref={audioRef} src="/Clouds.mp3" autoPlay loop muted playsInline />;
}
