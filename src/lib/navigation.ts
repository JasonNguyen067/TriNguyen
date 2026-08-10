import type { NavLink } from "@/types/navigation";

export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "WORK", href: "/projects" },
  { label: "EXPERIENCE", href: "/experience" },
  { label: "JOURNAL", href: "/journal" },
  { label: "ABOUT", href: "/about" },
  { label: "MOMENTS", href: "/moments" },
  { label: "GOALS", href: "/goals" },
  { label: "MUSIC", href: "/music" },
] as const satisfies readonly NavLink[];

export type NavHref = (typeof navLinks)[number]["href"];

/** the "01", "02" … eyebrow above a page title, from its position in the nav */
export function navNumber(href: NavHref): string {
  return String(navLinks.findIndex((link) => link.href === href) + 1).padStart(
    2,
    "0",
  );
}
