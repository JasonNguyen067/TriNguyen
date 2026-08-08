import Link from "next/link";
import type { NavLink } from "@/types/navigation";

type NavbarLinkProps = {
  link: NavLink;
  isActive: boolean;
};

const BASE_CLASSES = "text-sm transition-colors";
const ACTIVE_CLASSES = "text-orange-400";
const INACTIVE_CLASSES = "text-white hover:text-orange-400";

export default function NavbarLink({ link, isActive }: NavbarLinkProps) {
  const stateClasses = isActive ? ACTIVE_CLASSES : INACTIVE_CLASSES;

  return (
    <Link
      href={link.href}
      aria-current={isActive ? "page" : undefined}
      className={`${BASE_CLASSES} ${stateClasses}`}
    >
      {link.label}
    </Link>
  );
}
