import type { Track } from "@/types/track";

// to add one: drop the file in /public, then append an entry pointing at it
export const tracks: Track[] = [
  {
    id: "clouds",
    title: "Clouds",
    artist: "Pastel Ghost",
    src: "/audio/clouds.mp3",
    art: "/covers/clouds.png",
  },
  {
    id: "yellow",
    title: "Yellow",
    artist: "Wisp",
    src: "/audio/yellow.mp3",
    art: "/covers/yellow.png",
  },
  {
    id: "hai-bby",
    title: "Hai Bby",
    artist: "The Bilinda Butchers",
    src: "/audio/hai-bby.mp3",
    art: "/covers/hai-bby.png",
  },
  {
    id: "white-light",
    title: "White Light",
    artist: "You'll Never Get to Heaven",
    src: "/audio/white-light.mp3",
    art: "/covers/white-light.png",
  },
  {
    id: "enchanting",
    title: "Enchanting",
    artist: "Novulent",
    src: "/audio/enchanting.mp3",
    art: "/covers/enchanting.png",
  },
  {
    id: "cinnamon-girl",
    title: "Cinnamon Girl",
    artist: "Lana Del Rey",
    src: "/audio/cinnamon-girl.mp3",
    art: "/covers/cinnamon-girl.png",
  },
  {
    id: "thunder",
    title: "Thunder",
    artist: "Lana Del Rey",
    src: "/audio/thunder.mp3",
    art: "/covers/thunder.png",
  },
  {
    id: "flash",
    title: "Flash",
    artist: "Cigarettes After Sex",
    src: "/audio/flash.mp3",
    art: "/covers/flash.png",
  },
  {
    id: "love-costs",
    title: "Love Costs",
    artist: "Love Spells",
    src: "/audio/love-costs.mp3",
    art: "/covers/love-costs.png",
  },
  {
    id: "lovers-only",
    title: "Lovers Only",
    artist: "Love Spells",
    src: "/audio/lovers-only.mp3",
    art: "/covers/lovers-only.png",
  },
  {
    id: "illness",
    title: "The Illness",
    artist: "Love Spells",
    src: "/audio/illness.mp3",
    art: "/covers/illness.png",
  },
];

/** what plays before the visitor has picked anything */
export const DEFAULT_TRACK_ID = tracks[0].id;

export function getTrack(id: string): Track | undefined {
  return tracks.find((track) => track.id === id);
}
