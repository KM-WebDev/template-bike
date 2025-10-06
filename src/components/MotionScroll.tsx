"use client";

import React, { createContext, useRef } from "react";
import LenisScroll from "./LenisScroll";
import { MotionValue, useScroll } from "motion/react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

interface MotionScrollContext {
    scrollYProgress: MotionValue<number>;
}

export const MotionScrollContext = createContext<MotionScrollContext | null>(
    null
);

function MotionScroll({ children, className }: Props) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <MotionScrollContext.Provider value={{ scrollYProgress }}>
            <div ref={container} className={className}>
                {children}
            </div>
        </MotionScrollContext.Provider>
    );
}

export default MotionScroll;
