"use client";

import AudioToast from "@/components/layout/AudioToast";
import { useAmbientAudio } from "@/hooks/useAmbientAudio";

const TRACK_SRC = "/Clouds.mp3";

export default function AmbientAudio() {
  const { audioRef, muted, toastVisible } = useAmbientAudio();

  return (
    <>
      <audio ref={audioRef} src={TRACK_SRC} autoPlay loop muted playsInline />
      <AudioToast visible={toastVisible} muted={muted} />
    </>
  );
}
