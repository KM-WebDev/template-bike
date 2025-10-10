"use client";

import { HTMLDivRef } from "@/types/global";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { AnimatedNumber } from "./AnimatedNumber";
import { cn } from "@/lib/utils";

interface AnimatedNumberInViewProps {
    value: number;
    ref?: HTMLDivRef;
    className: string;
}

export function AnimatedNumberInView({
    value: passedValue,
    ref: passedRef,
    className,
}: AnimatedNumberInViewProps) {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(passedRef ? passedRef : ref, {
        once: true,
        amount: 1,
    });

    useEffect(() => {
        if (isInView) {
            setValue(passedValue);
        }
    }, [isInView, passedValue]);

    return (
        <div ref={ref}>
            <AnimatedNumber
                className={cn(
                    "inline-flex items-center font-mono text-2xl font-light text-zinc-800",
                    className
                )}
                springOptions={{
                    bounce: 0,
                    duration: 10000,
                }}
                value={value}
            />
        </div>
    );
}
