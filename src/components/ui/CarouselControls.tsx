const BUTTON_BASE =
  "flex h-10 w-10 items-center justify-center rounded-full border transition-colors";

const PREVIOUS_CLASSES =
  "border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground";
const NEXT_CLASSES =
  "border-orange-500/70 text-orange-400 hover:bg-orange-500/10";

type CarouselControlsProps = {
  onPrevious: () => void;
  onNext: () => void;
  /** what the buttons step through, for screen readers */
  label: string;
};

export default function CarouselControls({
  onPrevious,
  onNext,
  label,
}: CarouselControlsProps) {
  return (
    <div className="flex shrink-0 gap-3 self-center">
      <button
        type="button"
        onClick={onPrevious}
        aria-label={`Previous ${label}`}
        className={`${BUTTON_BASE} ${PREVIOUS_CLASSES}`}
      >
        &#8592;
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label={`Next ${label}`}
        className={`${BUTTON_BASE} ${NEXT_CLASSES}`}
      >
        &#8594;
      </button>
    </div>
  );
}
