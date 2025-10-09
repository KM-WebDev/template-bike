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

export interface Fragment {
    id: string;
    title: string;
    text: string;
    mainImage: ImageObj;
    subImages?: ImageObj[];
}

interface AboutFragmentProps {
    index: number;
    start: number;
    end: number;
    fragment: Fragment;
    // scrollYProgress: MotionValue<number>;
}

export default function AboutFragment({
    fragment,
    start,
    end,
    index,
    id,
}: AboutFragmentProps) {
    return (
        <motion.div
            className={`${styles.fragment} ${styles["fragment-" + id]}`}
        >
            <motion.div className={styles.content}>
                <p className={styles.title}>{fragment.title}</p>
                <p className={styles.text}>{fragment.text}</p>
            </motion.div>
            <motion.div className={styles.mainImageContainer}>
                <div className={styles.mainImageBackground} />
                <div className={styles.mainImageWrapper}>
                    <Image
                        src={fragment.mainImage.src}
                        alt={fragment.mainImage.alt}
                        fill
                        className={styles.image}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
