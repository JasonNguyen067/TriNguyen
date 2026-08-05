"use client";

import { usePathname } from "next/navigation";
import NavbarLink from "@/components/layout/NavbarLink";
import { navLinks } from "@/lib/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-end gap-8 px-6 py-4">
      {navLinks.map((link) => (
        <NavbarLink
          key={link.href}
          link={link}
          isActive={link.href === pathname}
        />
      ))}
    </nav>
  );
}
