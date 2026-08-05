"use client";

import HeroBackdrop from "@/components/sections/hero/HeroBackdrop";
import HeroHeadline from "@/components/sections/hero/HeroHeadline";
import HeroIntro from "@/components/sections/hero/HeroIntro";
import { useIntroScrollLock } from "@/hooks/useIntroScrollLock";
import { SCROLL_LOCK_FALLBACK_MS } from "@/lib/heroTimeline";

const HERO_IMAGE = "/portfolioimage.png";

export default function Hero() {
  const releaseScroll = useIntroScrollLock(SCROLL_LOCK_FALLBACK_MS);

  return (
    <section className="relative h-screen overflow-hidden">
      <HeroBackdrop src={HERO_IMAGE} />
      <HeroHeadline />
      <HeroIntro onArrived={releaseScroll} />
    </section>
  );
}
