import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import TagList from "@/components/ui/TagList";
import { formatLongDate } from "@/lib/format";
import type { JournalEntry } from "@/types/journal";

type JournalEntryCardProps = {
  entry: JournalEntry;
};

export default function JournalEntryCard({ entry }: JournalEntryCardProps) {
  const { slug, date, title, summary, tags } = entry;

  return (
    <article className="border-b border-border last:border-b-0">
      <Link
        href={`/journal/${slug}`}
        className="group block py-8 transition-colors hover:bg-background-elevated"
      >
        <Eyebrow className="mb-3">
          <time dateTime={date}>{formatLongDate(date)}</time>
        </Eyebrow>

        <h2 className="mb-2 font-heading text-3xl text-foreground transition-colors group-hover:text-orange-400">
          {title}
        </h2>

        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-foreground/70">
          {summary}
        </p>

        <TagList tags={tags} />
      </Link>
    </article>
  );
}
