"use client";

import { HTMLDivRef } from "@/lib/types/global";
import { createContext, useEffect, useRef } from "react";
import LenisScroll from "./LenisScroll";

interface Props {
    children: React.ReactNode;
}

interface Context {
    navRef: HTMLDivRef;
    heroRef: HTMLDivRef;
}

export const GlobalControlsContext = createContext<Context>({
    navRef: { current: null },
    heroRef: { current: null },
});

export default function GlobalControls({ children }: Props) {
    const heroRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        const html = document.documentElement;
        const div = document.createElement("div");
        div.style.cssText =
            "position: fixed; top: 0px; width: 100%; height: 100vh; pointer-events: none; visibility: hidden; z-index: -1;";
        div.id = "html-overlay";
        html.insertBefore(div, document.body);
    }, []);

    return (
        <GlobalControlsContext.Provider value={{ heroRef, navRef }}>
            <LenisScroll />
            {children}
        </GlobalControlsContext.Provider>
    );
}
