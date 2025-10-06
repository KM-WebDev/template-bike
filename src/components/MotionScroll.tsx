"use client";

import React, { createContext, useRef } from "react";
import LenisScroll from "./LenisScroll";
import { MotionValue, useScroll } from "motion/react";

interface Props {
    children: React.ReactNode;
    className?: string;
    Context: React.Context<MotionScrollContext | null>;
}

interface MotionScrollContext {
    scrollYProgress: MotionValue<number>;
}

function MotionScroll({ children, className, Context }: Props) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <Context.Provider value={{ scrollYProgress }}>
            <div ref={container} className={className}>
                {children}
            </div>
        </Context.Provider>
    );
}

export default MotionScroll;
