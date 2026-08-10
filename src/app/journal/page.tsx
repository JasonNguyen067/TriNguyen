import type { Metadata } from "next";
import JournalEntryList from "@/components/sections/JournalEntryList";
import { getJournalEntries } from "@/lib/journal";
import { navNumber } from "@/lib/navigation";

export const metadata: Metadata = {
  description: "Notes on building things, and on the years before I did.",
};

export default function JournalPage() {
  const entries = getJournalEntries();

  return (
    <main className="pt-24">
      <section className="px-6 py-24 lg:px-12">
        <span className="mb-1 block text-xs text-orange-400">
          {navNumber("/journal")}
        </span>
        <h1 className="mb-3 font-heading text-5xl text-foreground">Journal</h1>
        <p className="mb-16 max-w-xl text-sm leading-relaxed text-foreground/45">
          reminders and lessons
        </p>

        <JournalEntryList entries={entries} />
      </section>
    </main>
  );
}
