"use client";

import Image from "next/image";

import styles from "./SectionAbout.module.scss";
import MotionScrollElement from "./MotionScrollElement";
import MotionScroll, { MotionScrollContext } from "./MotionScroll";
import { useContext } from "react";
import { motion } from "motion/react";

interface Props {
    viewRange: [number, number];
}

export default function SectionAbout({ viewRange }: Props) {
    const context = useContext(MotionScrollContext);

    console.log(context);

    return (
        <MotionScrollElement
            property="opacity"
            inputRange={[
                0,
                viewRange[0] + (viewRange[1] - viewRange[0]) * 0.05,
            ]}
            outputRange={[0, 1]}
            className={styles.container}
        >
            <MotionScroll className="relative flex h-full w-full flex-col items-center justify-center">
                <MotionScrollElement
                    property="scale"
                    inputRange={[-0.2, 0.2]}
                    outputRange={[0.8, 1]}
                    className="sticky top-0 h-full w-full bg-red-400"
                >
                    {/* <Image
                        src="/about-bikes.jpg"
                        alt="Hero"
                        fill
                        className="relative object-cover"
                    /> */}
                </MotionScrollElement>
                <MotionScrollElement
                    property="scale"
                    inputRange={[0.33, 0.66]}
                    outputRange={[0.8, 1]}
                    className="sticky top-0 h-full w-full bg-green-400"
                >
                    {/* <Image
                        src="/about-bikes.jpg"
                        alt="Hero"
                        fill
                        className="relative object-cover"
                    /> */}
                </MotionScrollElement>
                <MotionScrollElement
                    property="scale"
                    inputRange={[0.66, 1]}
                    outputRange={[0.8, 1]}
                    className="sticky top-0 h-full w-full bg-amber-400"
                >
                    {/* <Image
                        src="/about-bikes.jpg"
                        alt="Hero"
                        fill
                        className="relative object-cover"
                    /> */}
                </MotionScrollElement>
                {/* <Image
                    src="/about-bikes.jpg"
                    alt="Hero"
                    fill
                    className="relative object-cover"
                />

              

                <Image
                    src="/about-bikes.jpg"
                    alt="Hero"
                    fill
                    className="relative object-cover"
                /> */}
            </MotionScroll>
        </MotionScrollElement>
    );
}
