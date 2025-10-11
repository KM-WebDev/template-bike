"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    name: string;
}

export default function NavLink({ href, name }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.slice(1).startsWith(href);
    console.log(pathname.slice(1));
    return (
        <Link
            href={href}
            className={cn(
                "z-10 rounded-full px-4 py-2 text-white",
                isActive && "bg-red-700"
            )}
        >
            {name}
        </Link>
    );
}
