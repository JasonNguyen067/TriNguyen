import Eyebrow from "@/components/ui/Eyebrow";
import { formatIndex } from "@/lib/format";
import type { Principle } from "@/types/principle";

type PrincipleCardProps = {
  principle: Principle;
  /** 1-based position, rendered as the "01" marker */
  position: number;
};

export default function PrincipleCard({
  principle,
  position,
}: PrincipleCardProps) {
  const { title, thesis, note } = principle;

  return (
    <article
      role="listitem"
      className="bg-background p-8 transition-colors hover:bg-background-elevated"
    >
      {/* decorative — the list role already announces the position and count */}
      <Eyebrow className="mb-4" aria-hidden>
        {formatIndex(position)}
      </Eyebrow>

      <h3 className="mb-3 font-heading text-2xl text-foreground">{title}</h3>

      <p className="mb-4 text-sm leading-relaxed text-foreground/70">{thesis}</p>

      <p className="border-l border-orange-500/40 pl-4 text-xs leading-relaxed text-foreground/45">
        {note}
      </p>
    </article>
  );
}
