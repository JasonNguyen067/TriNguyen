import type { ReactNode } from "react";

type SectionHeaderProps = {
  /** the "01", "02" … eyebrow */
  number: string;
  title: string;
  /** one-line subtitle sitting next to the title */
  blurb?: string;
  /** "compact" for sections that live inside the two-column grid */
  size?: "default" | "compact";
  /** trailing content — a "view all" link, carousel buttons — pushed right */
  children?: ReactNode;
};

export default function SectionHeader({
  number,
  title,
  blurb,
  size = "default",
  children,
}: SectionHeaderProps) {
  return (
    <header className="mb-10">
      <span className="mb-1 block text-xs text-orange-400">{number}</span>

      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <h2
          className={`font-heading text-foreground ${
            size === "compact" ? "text-3xl" : "text-4xl"
          }`}
        >
          {title}
        </h2>

        {blurb && <p className="text-sm text-foreground/45">{blurb}</p>}
        {children && <div className="ml-auto">{children}</div>}
      </div>
    </header>
  );
}
