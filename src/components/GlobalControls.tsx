"use client";

import { HTMLDivRef } from "@/lib/types/global";
import { createContext, useRef } from "react";
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

    return (
        <GlobalControlsContext.Provider value={{ heroRef, navRef }}>
            <LenisScroll />
            {children}
        </GlobalControlsContext.Provider>
    );
}
