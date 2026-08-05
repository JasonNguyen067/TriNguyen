"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { moments } from "@/lib/moments";

// how many cards sit on screen at once
const VISIBLE = Math.min(5, moments.length);

export default function Moments() {
  const [start, setStart] = useState(0);

  const rotate = (step: number) =>
    setStart((s) => (s + step + moments.length) % moments.length);

  // slice a window out of the list, wrapping past the end
  const visible = Array.from(
    { length: VISIBLE },
    (_, i) => moments[(start + i) % moments.length],
  );

  return (
    <section className="px-6 py-24 lg:px-12">
      <header className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="mb-1 font-body text-xs text-orange-400">01</p>
          <div className="flex flex-wrap items-baseline gap-4">
            <h2 className="font-heading text-4xl text-foreground">Moments</h2>
            <p className="font-body text-sm text-foreground/50">
              A few snapshots along the way.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => rotate(-1)}
            aria-label="Previous moment"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/60 transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            &#8592;
          </button>
          <button
            type="button"
            onClick={() => rotate(1)}
            aria-label="Next moment"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/70 text-orange-400 transition-colors hover:bg-orange-500/10"
          >
            &#8594;
          </button>
        </div>
      </header>

      <div className="grid grid-flow-col auto-cols-[minmax(240px,1fr)] gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((moment, i) => {
            const isLead = i === 0;

            return (
              <motion.article
                key={moment.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`relative h-[420px] overflow-hidden rounded-xl border transition-colors ${
                  isLead ? "border-orange-500/70" : "border-border"
                }`}
              >
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  sizes="(max-width: 1024px) 60vw, 20vw"
                  className="object-cover"
                />

                {/* scrim so the copy stays readable over the photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="mb-2 font-body text-[11px] uppercase tracking-wider text-orange-400">
                    {moment.date}
                  </p>
                  <h3 className="mb-2 font-heading text-xl text-foreground">
                    {moment.title}
                  </h3>
                  <p className="font-body text-xs leading-relaxed text-foreground/60">
                    {moment.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
