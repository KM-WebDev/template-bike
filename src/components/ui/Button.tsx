"use client";

import React, { MouseEventHandler } from "react";
import { FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils/cn";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: MouseEventHandler;
    type?: "primary" | "secondary" | "transparent" | "opposite";
    className?: string;
    dotClassName?: string;
    arrowClassName?: string;
}

const typeVariants = {
    primary: "bg-clr-brand-dark text-clr-bg border-2 border-clr-brand-dark",
    opposite: "bg-clr-bg text-clr-text border-2 border-clr-bg",
    secondary: "text-clr-bg border-2 border-clr-brand-dark",
    transparent: "backdrop-blur text-clr-bg bg-clr-bg/10",
};

const dotVariants = {
    primary: "",
    opposite: "bg-clr-text-muted text-clr-bg-dark",
    secondary: "",
    transparent: "",
};

const arrowVariants = {
    primary: "",
    opposite: "",
    secondary: "",
    transparent: "",
};

export default function Button({
    children,
    onClick,
    type = "primary",
    className,
    dotClassName,
    arrowClassName,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "group relative flex cursor-pointer items-center justify-center gap-4 rounded-4xl px-6 py-3 text-base font-semibold transition-all duration-200",
                typeVariants[type],
                className
            )}
        >
            <span className="relative flex h-4 w-4 items-center justify-center">
                <span
                    className={cn(
                        "bg-clr-bg text-clr-text flex h-1.5 w-1.5 items-center justify-center rounded-full transition-all duration-200 group-hover:h-4 group-hover:w-4",
                        dotVariants[type],
                        dotClassName
                    )}
                >
                    <FaArrowRight
                        className={cn(
                            "absolute scale-0 text-[0.8em] transition-transform duration-200 group-hover:scale-100",
                            arrowVariants[type],
                            arrowClassName
                        )}
                    />
                </span>
            </span>
            <span className="-translate-x-1 transition-transform duration-200 group-hover:translate-x-0">
                {children}
            </span>
        </button>
    );
}
