"use client";

import Image from "next/image";
import styles from "./AboutFragment.module.scss";
import { ImageObj } from "@/types/global";
import {
    MotionValue,
    useAnimation,
    useInView,
    useMotionValueEvent,
    useTransform,
} from "motion/react";
import * as motion from "motion/react-client";
import React, { useEffect, useRef } from "react";

export interface Fragment {
    title: string;
    text: string;
    images: ImageObj[];
}

interface AboutFragmentProps {
    id: number;
    fragment: Fragment;
}

export default function AboutFragment({ fragment, id }: AboutFragmentProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 1,
        margin: "-200px",
    });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const imageVariants = {
        hidden: {
            y: -50,
            x: -60,
            scale: 0,
        },
        visible: {
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                type: "spring" as const, // <-- use spring for bounce
                stiffness: 80, // <-- how bouncy
                damping: 10, // <-- how quickly it settles
                mass: 0.8,
                duration: 0.3, // optional fallback
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={`${styles.fragment} ${styles["fragment-" + id]}`}
        >
            <motion.div className={styles.content}>
                <p className={styles.title}>{fragment.title}</p>
                <p className={styles.text}>{fragment.text}</p>
            </motion.div>
            <motion.div className={styles.mainImageContainer}>
                <motion.div
                    className={styles.mainImageBackground}
                    initial="hidden"
                    animate={controls}
                    variants={imageVariants}
                />
                <div className={styles.mainImageWrapper}>
                    <Image
                        src={fragment.images[0].src}
                        alt={fragment.images[0].alt}
                        fill
                        className={styles.image}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
