import JournalEntryCard from "@/components/sections/JournalEntryCard";
import type { JournalEntry } from "@/types/journal";

type JournalEntryListProps = {
  entries: JournalEntry[];
};

export default function JournalEntryList({ entries }: JournalEntryListProps) {
  if (entries.length === 0) {
    return (
      <p className="text-sm text-foreground/45">Nothing written down yet.</p>
    );
  }

  return (
    <div className="max-w-3xl">
      {entries.map((entry) => (
      <JournalEntryCard key={entry.slug} entry={entry} />
      ))}
    </div>
  );
}
