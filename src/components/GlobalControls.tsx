"use client";

import { HTMLDivRef } from "@/lib/types/global";
import { createContext, useRef } from "react";

interface Props {
    children: React.ReactNode;
}

interface Context {
    navRef: HTMLDivRef;
    heroRef: HTMLDivRef;
}

export const GlobalControlsContext = createContext<Context | null>(null);

export default function GlobalControls({ children }: Props) {
    const heroRef = useRef(null);
    const navRef = useRef(null);
    return (
        <GlobalControlsContext.Provider value={{ heroRef, navRef }}>
            {children}
        </GlobalControlsContext.Provider>
    );
}
