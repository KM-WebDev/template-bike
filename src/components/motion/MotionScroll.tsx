"use client";

import { HTMLDivRef } from "@/lib/types/global";
// import React, { createContext, useRef } from "react";
// import { MotionValue, useScroll } from "motion/react";
import {
    motion,
    MotionValue,
    TransformOptions,
    useMotionValue,
    useScroll,
    UseScrollOptions,
    useTransform,
} from "motion/react";
import { createContext, useContext, useRef } from "react";

// interface Props {
//     children: React.ReactNode;
//     className?: string;
//     Context: React.Context<MotionScrollContext | null>;
// }

// interface MotionScrollContext {
//     scrollYProgress: MotionValue<number>;
// }

// export const GlobalMotionScrollContext =
//     createContext<MotionScrollContext | null>(null);

// function MotionScroll({ children, className }: Props) {
//     const container = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ["start start", "end end"],
//     });

//     return (
//         <GlobalMotionScrollContext.Provider value={{ scrollYProgress }}>
//             <div ref={container} className={className}>
//                 {children}
//             </div>
//         </GlobalMotionScrollContext.Provider>
//     );
// }

// export default MotionScroll;

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

// export function MotionScroll({ children, className }: MotionScrollProps) {
//     const ref = useRef(null);
//     return (
//         <MotionScrollContext.Provider value={{ scrollContainerRef: ref }}>
//             <div ref={ref} className={className}>
//                 {children}
//             </div>
//         </MotionScrollContext.Provider>
//     );
// }

const MotionScrollContext = createContext<MotionScrollContext>({
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
    useContainer = false,
    options: scrollOptions = {},
}: MotionScrollProps) {
    const { scrollContainerRef } = useContext(MotionScrollContext);
    if (useContainer) scrollOptions.target = scrollContainerRef;
    const { scrollYProgress } = useScroll(scrollOptions);
    const fallback = useMotionValue(0);
    const safeScroll = scrollYProgress ? scrollYProgress : fallback;
    const { inputRange, outputRange, options } = transform;
    const value = useTransform(safeScroll, inputRange, outputRange, options);
    console.log(value);
    return (
        <motion.div
            style={{ [transform.property]: value }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
