"use client";

import { useContext } from "react";
import {
  AmbientTrackContext,
  type AmbientTrackValue,
} from "@/components/layout/AmbientAudioProvider";

/** the track the visitor picked, plus the setter the picker calls */
export function useAmbientTrack(): AmbientTrackValue {
  const value = useContext(AmbientTrackContext);

  if (!value) {
    throw new Error("useAmbientTrack must be used inside AmbientAudioProvider");
  }

  return value;
}
