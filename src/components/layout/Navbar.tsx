"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Data = [
    { label: "HOME", href:"/"},
    { label: "WORK", href:"/projects"},
    { label: "EXPERIENCE", href:"/experience"},
    { label: "COMPETITIONS", href:"/competitions"},
    { label: "JOURNAL", href:"/journal"},
    { label: "ABOUT", href:"/about"}
]

export default function Navbar() {

    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center gap-8 justify-end px-6 py-4">
            {Data.map((param) => {
                const isActive = param.href === pathname;
                return (
                    <Link key={param.href} href={param.href} className={isActive ? "text-white hover:text-orange-400" : "text-white hover:text-orange-400"}>
                        {param.label}
                    </Link>
                );
            })}
        </nav>
    )
}