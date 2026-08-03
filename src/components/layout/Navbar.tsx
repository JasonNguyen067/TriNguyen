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
        <nav>
            {Data.map((param) => {
                const isActive = param.href === pathname;
                return (
                    <Link key={param.href} href={param.href}>
                        {param.label}
                    </Link>
                );
            })}
        </nav>
    )
}