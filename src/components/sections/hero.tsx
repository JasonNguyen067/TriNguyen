"use client";
import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  const unlockedRef = useRef(false);

  const unlockScroll = useCallback(() => {
    if (unlockedRef.current) return;
    unlockedRef.current = true;
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // safety net: never leave the page permanently locked if an
    // animation callback doesn't fire for any reason
    const fallback = window.setTimeout(unlockScroll, 6500);

    return () => {
      window.clearTimeout(fallback);
      unlockScroll();
    };
  }, [unlockScroll]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* image reveals from a center horizon line */}
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: "inset(50% 0% 50% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ delay: 0.8, duration: 1.8, ease: [0.65, 0, 0.35, 1] }}
      >
        <Image src="/portfolioimage.png" alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>

      {/* headline — fades in, holds, fades out */}
      <motion.h1
        className="absolute inset-0 flex items-center justify-center gap-10 font-heading text-6xl text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4.2, times: [0, 0.15, 0.75, 1], ease: "easeInOut" }}
      >
        <span>Building systems.</span>
        <span aria-hidden="true" className="h-16 w-px bg-white/40" />
        <span>Building <span className="italic text-orange-400">myself.</span></span>
      </motion.h1>

      {/* intro copy — arrives last, and releases the scroll lock when it lands */}
      <motion.div
        className="absolute bottom-24 left-16 font-body text-sm text-white/80"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.2, duration: 0.8 }}
        onAnimationComplete={unlockScroll}
      >
        <p className="mb-2 text-orange-400">Hi, I&apos;m Jason Nguyen</p>
        <p className="max-w-md">
          I build backend systems, developer tools, and products that help people work more effectively.
        </p>
      </motion.div>
    </section>
  );
}
