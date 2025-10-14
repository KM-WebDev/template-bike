"use client";

import { useContext } from "react";
import { GlobalControlsContext } from "../GlobalControls";

interface Props {
    children: React.ReactNode;
}

export default function HeroClient({ children }: Props) {
    const { heroRef } = useContext(GlobalControlsContext);
    return <div ref={heroRef}>{children}</div>;
}
