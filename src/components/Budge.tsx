"use client";

import { cn } from "@/lib/utils";
import { HTMLDivRef } from "@/types/global";
import { motion, useAnimate, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    text: string;
    ref?: HTMLDivRef;
}

const variants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
    },
};

export default function Badge({
    children,
    className,
    text,
    ref: passedRef,
}: BadgeProps) {
    const ref = useRef(null);
    const isInView = useInView(passedRef ? passedRef : ref, {
        once: true,
        amount: 1,
        margin: "0px 0px -100px 0px",
    });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={variants}
            animate={controls}
            className={cn(
                "bg-opacity-0 absolute z-1 flex items-center justify-center gap-6 rounded-2xl bg-white/85 px-8 py-4 shadow-2xl backdrop-blur",
                className
            )}
        >
            {children}
            <span className="text-nowrap">{text}</span>
        </motion.div>
    );
}
