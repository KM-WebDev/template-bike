"use client";

import { useMotionScroll } from "@/hooks/useMotionScroll";
import { HTMLDivRef } from "@/lib/types/global";
import { motion, TransformOptions, UseScrollOptions } from "motion/react";
import { createContext, useContext, useRef } from "react";
import { cn } from "@/lib/utils/cn";

interface MotionScrollContainerProps {
    children: React.ReactNode;
    className?: string;
    options?: UseScrollOptions;
}

interface MotionScrollContext {
    scrollContainerRef: HTMLDivRef;
}

interface Transform {
    property: string;
    inputRange: number[];
    outputRange: number[] | string[];
    options?: TransformOptions<unknown>;
}

interface MotionScrollProps {
    children: React.ReactNode;
    className?: string;
    transform: Transform;

    useContainer?: boolean;
    options?: UseScrollOptions;
}

export const MotionScrollContext = createContext<MotionScrollContext>({
    scrollContainerRef: { current: null },
});

export function MotionScrollContainer({
    className,
    children,
}: MotionScrollContainerProps) {
    const ref = useRef(null);
    return (
        <MotionScrollContext.Provider value={{ scrollContainerRef: ref }}>
            <div ref={ref} className={className}>
                {children}
            </div>
        </MotionScrollContext.Provider>
    );
}

export function MotionScroll({
    children,
    transform,
    className,
    useContainer = true,
    options,
}: MotionScrollProps) {
    const { scrollContainerRef } = useContext(MotionScrollContext);
    const value = useMotionScroll({
        ref: useContainer ? scrollContainerRef : { current: null },
        transform,
        options,
    });
    return (
        <motion.div
            style={{ [transform.property]: value }}
            className={cn("transform-gpu will-change-transform", className)}
        >
            {children}
        </motion.div>
    );
}
