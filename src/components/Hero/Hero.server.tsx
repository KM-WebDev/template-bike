import Image from "next/image";

import styles from "./Hero.module.scss";
import * as motion from "motion/react-client";
import MotionScrollElement from "../motion/MotionScrollElement";
import HeroButtons from "./HeroButtons";

const textInitial = { x: -200, opacity: 0 };
const textAnimate = { x: 0, opacity: 1 };
const textTransition = {
    type: "spring" as const,
    stiffness: 50,
    damping: 20,
};

export default function HeroServer() {
    console.log(
        "Hero rendered on",
        typeof window === "undefined" ? "server" : "client"
    );

    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <MotionScrollElement
                property="scale"
                inputRange={[0, 1]}
                outputRange={[1, 2]}
                className="absolute -z-1 h-full w-full"
            >
                <Image
                    src="/hero.jpg"
                    alt="Hero"
                    fill
                    className="relative object-cover"
                />
            </MotionScrollElement>

            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <motion.h1
                        initial={textInitial}
                        animate={textAnimate}
                        transition={textTransition}
                        className={styles.h1}
                    >
                        Profesjonalny Serwis Rowerowy w Krakowie
                    </motion.h1>

                    <motion.p
                        initial={textInitial}
                        animate={textAnimate}
                        transition={{ ...textTransition, delay: 0.3 }}
                        className={styles.text}
                    >
                        Solidność, precyzja i zaufanie. Naprawiamy, regulujemy i
                        doradzamy – zawsze tak, jakby to był nasz rower. Zostaw
                        go w dobrych rękach – zajmiemy się resztą.
                    </motion.p>

                    <motion.div
                        initial={textInitial}
                        animate={textAnimate}
                        transition={{ ...textTransition, delay: 0.6 }}
                        className={styles.buttons}
                    >
                        <HeroButtons />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
