---
name: prose-voice
description: Writing or editing any prose string in src/lib/*.ts (projects.ts, journal.ts, principles.ts, experience.ts, etc.) — the note, thesis, summary, tagline, description, and journal body fields. Covers the site's lowercase voice, the sentence-per-line + concatenation format, and slug rules. Use whenever adding a journal entry, project, principle, or editing existing copy in the data files.
---

# Prose Content Style (`src/lib/*.ts`)

The data files carry the site's written voice. Apply all of the following automatically, without being asked, whenever you write or edit prose in them.

**All prose is lowercase.** `note`, `thesis`, `summary`, `tagline`, `description`, and journal `body` strings are lowercase throughout — including proper nouns and first words (`michigan`, `duke`, `jared mccain`, `gpa`).

Do **not** lowercase: `tech` arrays and other identifiers (`TypeScript`, `Next.js`, `AWS S3`, `PostgreSQL`), `title` fields naming a real product (`SpoilSafe`, `AntAlmanac`), award names, or anything inside a slug, URL, or `id`.

**Break long prose one sentence per source line**, joined with `+`:

```ts
note:
  "there is always somebody further along in the exact thing you're working on. " +
  "the only useful question is what they do that you don't. " +
  "envy breeds excuses, and intimidation generates doubt.",
```

* Every fragment except the last **must end with a trailing space inside the quote.** Without it the sentences fuse (`working on.the only`). This is the single most common mistake here — check it every time.
* **Never use multi-line template literals** (backticks) for this. They bake the newlines and leading indentation into the string value, which corrupts any non-HTML consumer such as a `generateMetadata` description.
* Split at sentence boundaries. If one sentence is very long, split at a comma or em dash and indent the continuation one extra level.

**In `journal.ts`, one `body` array element is one rendered paragraph.** `JournalArticle` maps each element to its own `<p>`. Never use array elements to wrap lines mid-sentence — compose the full paragraph with `+` inside a single element.

**Slugs are lowercase kebab-case with no slashes** (`independence-agency`, not `independence/agency`). A slash becomes a second URL segment and the `[slug]` route will not match it.

**Verify, don't eyeball.** After splitting or lowercasing existing prose, compare the resulting string against the original programmatically (e.g. `original.toLowerCase() === result`) to prove no words or spaces were lost.
