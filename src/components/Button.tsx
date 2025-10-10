"use client";

import React, { MouseEventHandler } from "react";

import styles from "./Button.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: MouseEventHandler;
    type?: "primary" | "secondary" | "transparent";
    className?: string;
}

const typeVariants = {
    primary: styles.primary,
    secondary: styles.secondary,
    transparent: styles.transparent,
};

export default function Button({
    children,
    onClick,
    type = "primary",
    className,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(styles.button, typeVariants[type], className)}
        >
            <span className={styles.circlePlaceholder}>
                <span className={styles.circle}>
                    <FaArrowRight className={styles.arrow} />
                </span>
            </span>
            <span className={styles.content}>{children}</span>
        </button>
    );
}
