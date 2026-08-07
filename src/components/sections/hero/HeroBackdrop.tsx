import Image from "next/image";
import { motion } from "motion/react";
import { heroTimeline } from "@/lib/heroTimeline";

const HIDDEN_CLIP = "inset(50% 0% 50% 0%)";
const REVEALED_CLIP = "inset(0% 0% 0% 0%)";

type HeroBackdropProps = {
  src: string;
};

export default function HeroBackdrop({ src }: HeroBackdropProps) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ clipPath: HIDDEN_CLIP }}
      animate={{ clipPath: REVEALED_CLIP }}
      transition={heroTimeline.reveal}
    >
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </motion.div>
  );
}
