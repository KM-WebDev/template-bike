"use client";

import { cn } from "@/lib/utils/cn";
import { DeviceNavigationProps, NavigationRoutes } from "./Navigation.d";
import { useCallback, useEffect, useRef, useState } from "react";

import Hamburger from "hamburger-react";
import Logo from "../ui/Logo";
import { createPortal } from "react-dom";
import NavLink from "./NavLink";
import Link from "next/link";

export default function MobileNavigation({
    routes,
    className,
}: DeviceNavigationProps) {
    const [isOpen, setIsOpen] = useState(false);
    const handleNavButtonClick = () => {
        setIsOpen((x) => !x);
    };

    const closeNavigation = () => setIsOpen(false);

    // useEffect(() => {
    //     const node =
    //         document.body.querySelector<HTMLDivElement>("#scrollable-area");
    //     if (!node) return;
    //     if (isOpen) {
    //         node.style.overflow = "hidden";
    //         node.style.height = "100svh"; // prevent scrolling
    //     } else {
    //         node.style.overflow = "";
    //         node.style.height = "";
    //     }
    // }, [isOpen]);

    // const contentRef = useRef<HTMLDivElement | null>(null);
    // const fixContent = useCallback(() => {
    //     const overlay = document.getElementById("html-overlay");
    //     const content = contentRef.current;
    //     console.log(overlay, content);
    //     if (!content || !overlay) return;
    //     const overlayRect = overlay.getBoundingClientRect();
    //     content.style.left = overlayRect.x + "px";
    //     content.style.top = overlayRect.y + "px";
    //     content.style.width = overlayRect.width + "px";
    //     content.style.height = overlayRect.height + "px";
    //     console.log(content.style.height, overlayRect.height);
    // }, [contentRef]);

    // useEffect(() => {
    //     fixContent();
    //     setTimeout(() => fixContent(), 1000);
    // }, [fixContent, contentRef]);

    return (
        <div className={className}>
            <div
                className={cn(
                    "pointer-events-auto z-100 flex w-full items-center justify-between bg-black px-3 py-3 backdrop-blur"
                )}
            >
                {isOpen && (
                    <Content
                        routes={routes}
                        closeNavigation={closeNavigation}
                    />
                )}
                <Link href="/">
                    <Logo />
                </Link>
                <div className="z-[1000] text-[white]">
                    <Hamburger toggled={isOpen} toggle={handleNavButtonClick} />
                </div>
            </div>
        </div>
    );
}

//    "fixed top-0 right-0 [bottom:env(safe-area-inset-bottom,0)] left-0 z-[1000] flex items-center justify-center bg-[black]/80 backdrop-blur-xl",
//                 "md:hidden"

function Content({
    routes,
    closeNavigation,
    // ref,
    // isOpen,
}: {
    // isOpen: boolean;
    routes: NavigationRoutes;
    closeNavigation: () => void;
    // ref: RefObject<HTMLDivElement | null>;
}) {
    return createPortal(
        <div
            // ref={ref}
            className={cn(
                "fixed inset-0 z-[1000] flex h-[100dvh] items-center justify-center bg-black/50 [padding-top:env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden"
                // !isOpen && "hidden"
            )}
        >
            <ul
                className={cn(
                    "flex list-none flex-col items-center gap-6 text-xl"
                )}
            >
                {routes.map((route) => (
                    <NavLink
                        key={route.name}
                        route={route}
                        className="px-3 py-1.5 text-white"
                        activeClassName="bg-rose-800/80  rounded-full"
                        onClick={closeNavigation}
                    />
                ))}
            </ul>
        </div>,
        document.body
    );
}
