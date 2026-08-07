import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import TagList from "@/components/ui/TagList";
import { formatLongDate } from "@/lib/format";
import type { JournalEntry } from "@/types/journal";

type JournalArticleProps = {
  entry: JournalEntry;
};

export default function JournalArticle({ entry }: JournalArticleProps) {
  const { date, title, tags, body } = entry;

  return (
    <article className="max-w-2xl">
      <Link
        href="/journal"
        className="mb-10 inline-block text-xs text-foreground/45 transition-colors hover:text-orange-400"
      >
        &#8592; Journal
      </Link>

      <header className="mb-10">
        <Eyebrow className="mb-3">
          <time dateTime={date}>{formatLongDate(date)}</time>
        </Eyebrow>

        <h1 className="mb-5 font-heading text-5xl text-foreground">{title}</h1>

        <TagList tags={tags} />
      </header>

      <div className="space-y-6 text-sm leading-relaxed text-foreground/70">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
