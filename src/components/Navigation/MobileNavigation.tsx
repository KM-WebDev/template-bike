"use client";

import { cn } from "@/lib/utils/cn";
import { DeviceNavigationProps, NavigationRoutes } from "./Navigation.d";
import { useState } from "react";

import Hamburger from "hamburger-react";
import Logo from "../Logo";
import { createPortal } from "react-dom";
import NavLink from "./NavLink";

export default function MobileNavigation({
    routes,
    className,
}: DeviceNavigationProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavButtonClick = () => {
        setIsOpen((x) => !x);
    };

    return (
        <div className={className}>
            <div
                className={cn(
                    "[padding-top: env(safe-area-inset-top)] flex w-full items-center justify-between bg-black px-3 py-3 backdrop-blur",
                    isOpen && ""
                )}
            >
                {isOpen && <Content routes={routes} />}
                <Logo />
                <div className="z-[1000] text-[white]">
                    <Hamburger toggled={isOpen} toggle={handleNavButtonClick} />
                </div>
            </div>
        </div>
    );
}

function Content({ routes }: { routes: NavigationRoutes }) {
    return createPortal(
        <div
            className={cn(
                "fixed top-0 right-0 bottom-0 left-0 z-[1000] flex h-[100lvh] w-[100lvw] items-center justify-center bg-[black]/60 backdrop-blur-lg",
                "md:hidden"
            )}
        >
            <ul className={cn("flex list-none flex-col gap-6 text-lg")}>
                {routes.map((route) => (
                    <NavLink
                        key={route.name}
                        route={route}
                        className="text-white"
                    />
                ))}
            </ul>
        </div>,
        document.body
    );
}
