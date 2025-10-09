"use client";

import Link from "next/link";

interface NavLinkProps {
    href: string;
    name: string;
}

import styles from "./Navigation.module.scss";
import { usePathname } from "next/navigation";

export default function NavLink({ href, name }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.slice(1).startsWith(href);
    console.log(pathname.slice(1));
    return (
        <Link
            href={href}
            className={`${styles.link} ${isActive && styles["link--active"]}`}
        >
            {name}
        </Link>
    );
}
