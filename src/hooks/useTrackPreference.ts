"use client";

import { useCallback, useSyncExternalStore } from "react";
import { DEFAULT_TRACK_ID, getTrack } from "@/lib/tracks";

const STORAGE_KEY = "ambient-track";

/** same-tab writes don't fire `storage`, so the setter notifies these directly */
const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void): () => void {
  listeners.add(onStoreChange);
  // fires for writes from other tabs
  window.addEventListener("storage", onStoreChange);

  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getSnapshot(): string {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  // a stale id from a track that no longer exists falls back to the default
  return saved && getTrack(saved) ? saved : DEFAULT_TRACK_ID;
}

/** there's no localStorage while server-rendering, so the HTML always uses the default */
function getServerSnapshot(): string {
  return DEFAULT_TRACK_ID;
}

export type UseTrackPreferenceResult = {
  trackId: string;
  selectTrack: (id: string) => void;
};

/**
 * The visitor's chosen track, persisted in localStorage. Read through
 * `useSyncExternalStore` rather than an effect so the server render and the
 * hydrated render agree without a cascading setState.
 */
export function useTrackPreference(): UseTrackPreferenceResult {
  const trackId = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const selectTrack = useCallback((id: string) => {
    window.localStorage.setItem(STORAGE_KEY, id);
    listeners.forEach((notify) => notify());
  }, []);

  return { trackId, selectTrack };
}
