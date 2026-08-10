import Image from "next/image";
import type { Track } from "@/types/track";

type TrackOptionProps = {
  track: Track;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

const ART_SIZE = 56;

export default function TrackOption({
  track,
  isSelected,
  onSelect,
}: TrackOptionProps) {
  const { id, title, artist, art } = track;

  const handleClick = () => onSelect(id);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isSelected}
      className="flex w-full items-center gap-4 px-1 py-4 text-left transition-colors hover:bg-background-elevated"
    >
      {/* decorative — the title sits right beside it */}
      {art ? (
        <Image
          src={art}
          alt=""
          width={ART_SIZE}
          height={ART_SIZE}
          className={`h-14 w-14 shrink-0 rounded-md border object-cover transition-colors ${
            isSelected ? "border-orange-500/70" : "border-border"
          }`}
        />
      ) : (
        <span
          aria-hidden
          className={`h-14 w-14 shrink-0 rounded-md border bg-background-elevated transition-colors ${
            isSelected ? "border-orange-500/70" : "border-border"
          }`}
        />
      )}

      <span className="min-w-0">
        <span
          className={`block font-heading text-xl transition-colors ${
            isSelected ? "text-orange-400" : "text-foreground"
          }`}
        >
          {title}
        </span>

        {artist && (
          <span className="mt-0.5 block text-[11px] text-foreground/45">
            {artist}
          </span>
        )}
      </span>

      {isSelected && (
        <span className="ml-auto shrink-0 text-[11px] uppercase tracking-wider text-foreground/45">
          playing
        </span>
      )}
    </button>
  );
}
