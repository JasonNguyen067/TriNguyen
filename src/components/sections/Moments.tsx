"use client";

import { AnimatePresence } from "motion/react";
import CarouselControls from "@/components/ui/CarouselControls";
import MomentCard from "@/components/ui/MomentCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { useCarouselWindow } from "@/hooks/useCarouselWindow";
import { moments } from "@/lib/moments";

const VISIBLE_CARDS = 5;

export default function Moments() {
  const { visible, showPrevious, showNext } = useCarouselWindow({
    items: moments,
    size: VISIBLE_CARDS,
  });

  return (
    <section className="px-6 py-24 lg:px-12">
      <SectionHeader
        number="01"
        title="Moments"
        blurb="A few snapshots along the way."
      >
        <CarouselControls
          onPrevious={showPrevious}
          onNext={showNext}
          label="moment"
        />
      </SectionHeader>

      <div className="grid grid-flow-col auto-cols-[minmax(240px,1fr)] gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((moment, index) => (
            <MomentCard
              key={moment.id}
              moment={moment}
              isLead={index === 0}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
