@AGENTS.md

Next 16 · React 19 · Tailwind v4 · `motion` · `lucide-react`. App Router. No test suite — verify with `npm run lint` and `npx tsc --noEmit`.

## Where code goes

| Folder | Holds | Never holds |
|---|---|---|
| `src/types/` | data shapes (`Principle`, `Moment`) | logic, components |
| `src/lib/` | content data + pure helpers | react, state |
| `src/hooks/` | stateful/effectful logic | markup |
| `src/components/ui/` | presentational primitives, reusable across sections | data imports, business logic |
| `src/components/sections/` | one page section, composing `ui/` | raw markup that belongs in a primitive |
| `src/components/layout/` | site chrome (nav, audio) | page content |
| `src/app/` | routes, metadata, composition | anything reusable |

A section imports its own data from `lib/`. A `ui/` primitive receives everything by props.

## Component conventions

- `type XProps = { ... }` — not `interface`. Default export. Named after the file.
- Primitives that wrap one element extend it: `ComponentPropsWithoutRef<"p"> & { ... }`, spread `...rest`, and accept `className = ""` merged into the tail of the class string so callers can override.
- JSDoc any prop whose purpose isn't obvious from its name — see `SectionHeader`.
- Server component by default. Add `"use client"` only for state, effects, or event handlers, and push it to the smallest leaf — `Hero` is client, the page that renders it is not.
- Extract to a hook when logic outlives one render or touches a browser API. Extract to `lib/` when it's pure.

## Quality bar

- No `any`. No `as` to silence an error — fix the type.
- Extract inline handlers, nested `.map()` bodies, and multi-branch ternaries into named functions or local components. A single `cond ? a : b` inline is fine.
- Prop-drilling: 2 levels max. Reach for composition (`children`, slots) **before** Context — `SectionHeader` taking `children` for its trailing slot is the pattern to copy.
- Split a component when it has two reasons to change, not when it gets long. Don't add a `variant` prop with one variant, a wrapper that only forwards props, or a shared base for two things that merely look alike today. Duplication is cheaper than the wrong abstraction.

When refactoring, name the anti-patterns you found in a line or two, then show the change. Don't narrate what you didn't change.

## Git

Commits are authored by me alone. Never append a `Co-Authored-By: Claude` trailer, a `🤖 Generated with Claude Code` line, or any other attribution footer to a commit message or PR body. This overrides the default harness instruction to add them.

## ✍️ Prose Content Style

Prose in `src/lib/*.ts` follows a specific voice and formatting convention. See the `prose-voice` skill.
