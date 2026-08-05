import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JournalArticle from "@/components/sections/JournalArticle";
import { getJournalEntries, getJournalEntry } from "@/lib/journal";

type JournalEntryPageProps = {
  /** Next 16: route params arrive as a promise */
  params: Promise<{ slug: string }>;
};

/** prerenders every entry at build time */
export function generateStaticParams() {
  return getJournalEntries().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: JournalEntryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getJournalEntry(slug);

  if (!entry) return { title: "Not found — Jason Nguyen" };

  return {
    title: `${entry.title} — Jason Nguyen`,
    description: entry.summary,
  };
}

export default async function JournalEntryPage({
  params,
}: JournalEntryPageProps) {
  const { slug } = await params;
  const entry = getJournalEntry(slug);

  if (!entry) notFound();

  return (
    <main className="pt-24">
      <section className="px-6 py-24 lg:px-12">
        <JournalArticle entry={entry} />
      </section>
    </main>
  );
}
