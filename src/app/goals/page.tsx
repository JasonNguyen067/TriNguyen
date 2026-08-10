import type { Metadata } from "next";
import Goals from "@/components/sections/Goals";
import { navNumber } from "@/lib/navigation";

export const metadata: Metadata = {
  description: "What I'm chasing this year, with the numbers attached.",
};

export default function GoalsPage() {
  return (
    <main className="pt-24">
      <section className="px-6 pb-16 pt-24 lg:px-12">
        <span className="mb-1 block text-xs text-orange-400">
          {navNumber("/goals")}
        </span>
        <h1 className="mb-3 font-heading text-5xl text-foreground">Goals</h1>
        <p className="max-w-xl text-sm leading-relaxed text-foreground/45">
          just a place to document what i&apos;m currently trying to work
          towards and to remind myself.
        </p>
      </section>

      <Goals />
    </main>
  );
}
