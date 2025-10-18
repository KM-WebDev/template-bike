"use client";

import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { GlobalControlsContext } from "../GlobalControls";
import { HTMLDivRef } from "@/lib/types/global";
import { NavigationClientProps } from "./Navigation.d";

export default function NavigationClient({ children }: NavigationClientProps) {
    const [isScrolled, setIsScrolled] = useState(true);
    const navRef: HTMLDivRef = useRef(null);

    const { heroRef } = useContext(GlobalControlsContext);

    const handleScroll = useCallback(() => {
        if (!heroRef.current || !navRef.current) return;

        const heroHeight = heroRef.current.getBoundingClientRect().height;
        const navHeight = navRef.current.getBoundingClientRect().height;

        if (heroHeight - navHeight < window.scrollY) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }, [heroRef, navRef]);

    useEffect(() => {
        if (!heroRef.current || !navRef.current) {
            setIsScrolled(true);
            return;
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll);
    }, [handleScroll, heroRef, navRef]);

    return (
        <div
            data-scrolled={isScrolled ? "true" : "false"}
            ref={navRef}
            className="group/nav fixed z-[10000] w-full"
        >
            {children}
        </div>
    );
}
