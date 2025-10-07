"use client";

import React, { createContext, useRef } from "react";
import { MotionValue, useScroll } from "motion/react";

interface Props {
    children: React.ReactNode;
    className?: string;
    Context: React.Context<MotionScrollContext | null>;
}

interface MotionScrollContext {
    scrollYProgress: MotionValue<number>;
}

export const GlobalMotionScrollContext =
    createContext<MotionScrollContext | null>(null);

function MotionScroll({ children, className }: Props) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <GlobalMotionScrollContext.Provider value={{ scrollYProgress }}>
            <div ref={container} className={className}>
                {children}
            </div>
        </GlobalMotionScrollContext.Provider>
    );
}

export default MotionScroll;
