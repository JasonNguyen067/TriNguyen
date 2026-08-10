import type { Metadata } from "next";
import TrackPicker from "@/components/sections/TrackPicker";
import { navNumber } from "@/lib/navigation";

export const metadata: Metadata = {
  description: "what plays in the background while you read.",
};

export default function MusicPage() {
  return (
    <main className="pt-24">
      <section className="px-6 py-24 lg:px-12">
        <span className="mb-1 block text-xs text-orange-400">
          {navNumber("/music")}
        </span>
        <h1 className="mb-3 font-heading text-5xl text-foreground">Music</h1>
        <p className="mb-16 max-w-xl text-sm leading-relaxed text-foreground/45">
          the music that defines who i am. pick any track below and it becomes
          the background music for the whole site. double-click anywhere to turn
          the sound on or off.
        </p>

        <TrackPicker />
      </section>
    </main>
  );
}
