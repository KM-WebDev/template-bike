"use client";

import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "./Navigation.d";

const normalize = (path: string) => {
    return path === "/"
        ? "/"
        : path.startsWith("/")
          ? path.replace("/", "")
          : path;
};

const checkActive = (target: string, current: string, exact: boolean) => {
    return exact
        ? current === target
        : current === target || current.startsWith(`${target}/`);
};

export default function NavLink({
    href,
    name,
    exact = false,
    className,
    activeClassName,
}: NavLinkProps) {
    const pathname = usePathname();
    const target = normalize(href);
    const current = normalize(pathname);
    const isActive = checkActive(target, current, exact);

    return (
        <Link
            href={href}
            className={cn(className, isActive && activeClassName)}
        >
            {name}
        </Link>
    );
}
