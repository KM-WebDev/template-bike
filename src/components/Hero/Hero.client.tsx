"use client";

import { useContext } from "react";
import { GlobalControlsContext } from "../GlobalControls";

interface Props {
    children: React.ReactNode;
}

export default function HeroClient({ children }: Props) {
    const context = useContext(GlobalControlsContext);
    if (!context) throw new Error("..."); // learnt from the best
    return <div ref={context.heroRef}>{children}</div>;
}
