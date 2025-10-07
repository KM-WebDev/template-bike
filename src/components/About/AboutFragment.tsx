import Image from "next/image";
import styles from "./AboutFragment.module.scss";
import { ImageObj } from "@/types/global";
import {
    MotionValue,
    useAnimation,
    useMotionValueEvent,
    useTransform,
} from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

interface AboutFragmentProps {
    mainImage: ImageObj;
    id: string;
    title: string;
    contentSide?: "left" | "right";
    text: string;
    index: number;
    start: number;
    end: number;
    scrollYProgress: MotionValue<number>;
}

export default function AboutFragment({
    mainImage,
    title,
    id,
    text,
    contentSide = "left",
    start,
    end,
    index,
    scrollYProgress,
}: AboutFragmentProps) {
    const [isActive, setIsActive] = useState(false);
    const length = end - start;
    const quarter = length / 8;
    const quartiles = Array(7)
        .fill(start)
        .map((q, i) => q + quarter * (i + 1));

    const opacity = useTransform(
        scrollYProgress,
        [start, quartiles[2], quartiles.at(-2), end],
        [0, 1, 1, 0]
    );

    const imageX = useTransform(
        scrollYProgress,
        [start, quartiles[2], quartiles.at(-2), end],
        [100, 0, 0, 100]
    );

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setIsActive(latest >= start && latest <= end);
        });

        return () => unsubscribe();
    }, [scrollYProgress, start, end]);

    return (
        <motion.div
            className={`${styles.fragment} ${styles[`fragment-${id}`]}`}
        >
            <motion.div
                style={{ opacity }}
                className={`${styles.content} ${styles[`content-${contentSide}`]}`}
            >
                <p className={styles.title}>{title}</p>
                <p className={styles.text}>{text}</p>
            </motion.div>
            <motion.div
                style={{ x: imageX, zIndex: isActive ? 1000 : -index }}
                className={styles.mainImageContainer}
            >
                <div className={styles.mainImageWrapper}></div>
                <Image
                    src={mainImage.src}
                    alt={mainImage.alt}
                    fill
                    className={styles.image}
                />
            </motion.div>
        </motion.div>
    );
}
