import type { Metadata } from "next";
import Principles from "@/components/sections/Principles";
import { navNumber } from "@/lib/navigation";

export const metadata: Metadata = {
  description: "Backstory, and the principles I try to build around.",
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="px-6 py-24 lg:px-12">
        <span className="mb-1 block text-xs text-orange-400">
          {navNumber("/about")}
        </span>
        <h1 className="mb-3 font-heading text-5xl text-foreground">About me</h1>

        <div className="mb-16 max-w-xl space-y-6 text-sm leading-relaxed text-foreground/70">
          <p>
            hi, i&apos;m tri, or known as jason nguyen. i&apos;m a cs major at
            uc irvine
          </p>

          <p className="text-foreground/45">
            this is a glimpse into who i&apos;m trying to become and parts of
            who i am
          </p>
        </div>
      </section>

      <Principles />
    </main>
  );
}
