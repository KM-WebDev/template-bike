"use client";

import { useContext, useEffect } from "react";
import { GlobalControlsContext } from "./GlobalControls";
import Hero from "./Hero.server";

interface Props {
    children: React.ReactNode;
}

export default function HeroClient({ children }: Props) {
    console.log(
        "Hero rendered on",
        typeof window === "undefined" ? "server" : "client"
    );
    const context = useContext(GlobalControlsContext);
    if (!context) throw new Error("..."); // learnt from the best
    return <div ref={context.heroRef}>{children}</div>;
}
