import type { Metadata } from "next";
import MomentsGallery from "@/components/sections/MomentsGallery";
import { navNumber } from "@/lib/navigation";

export const metadata: Metadata = {
  description: "every snapshot, in one place.",
};

export default function MomentsPage() {
  return (
    <main className="pt-24">
      <section className="px-6 pb-24 pt-24 lg:px-12">
        <span className="mb-1 block text-xs text-orange-400">
          {navNumber("/moments")}
        </span>
        <h1 className="mb-3 font-heading text-5xl text-foreground">Moments</h1>
        <p className="mb-16 max-w-xl text-sm leading-relaxed text-foreground/45">
          some moments i liked
        </p>

        <MomentsGallery />
      </section>
    </main>
  );
}
