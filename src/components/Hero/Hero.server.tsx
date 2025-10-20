import Image from "next/image";

import * as motion from "motion/react-client";
import HeroButtons from "./HeroButtons";
import Heading from "../ui/Heading";
import { MotionScroll, MotionScrollContainer } from "../motion/MotionScroll";
import { cn } from "@/lib/utils/cn";

const textInitial = { x: -200, opacity: 0 };
const textAnimate = { x: 0, opacity: 1 };
const textTransition = {
    type: "spring" as const,
    stiffness: 50,
    damping: 20,
};

export default function HeroServer() {
    return (
        <div className="relative z-1 flex h-[70vh] w-full items-center justify-center overflow-hidden px-8 py-0 md:h-[100vh]">
            <Background />
            <HeroImage />
            <HeroContent />
        </div>
    );
}

function Background() {
    return (
        <div
            className={cn(
                "absolute top-0 right-0 bottom-0 left-0 z-0 mx-auto bg-black/70 lg:bg-black/20",
                "lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.6)_30%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.2)_100%)]"
            )}
        />
    );
}

function HeroImage() {
    return (
        <MotionScroll
            useContainer={false}
            transform={{
                property: "scale",
                inputRange: [0, 1],
                outputRange: [1, 2],
            }}
            className="absolute -z-1 h-full w-full"
        >
            <Image
                src="/hero.jpg"
                alt="Hero"
                fill
                className="relative object-cover"
            />
        </MotionScroll>
    );
}

function HeroContent() {
    return (
        <div className="z-100 flex w-full max-w-[1200px] flex-col items-center">
            <div className="z-100 flex w-full max-w-[700px] flex-col items-center gap-8 text-center">
                <motion.div
                    initial={textInitial}
                    animate={textAnimate}
                    transition={textTransition}
                >
                    <Heading
                        semantic="h1"
                        className="text-white lg:text-nowrap"
                    >
                        Twój serwis w Krakowie
                    </Heading>
                </motion.div>
                <motion.p
                    initial={textInitial}
                    animate={textAnimate}
                    transition={{ ...textTransition, delay: 0.2 }}
                    className="text-clr-bg-dark"
                >
                    Solidność, precyzja i zaufanie. Naprawiamy, regulujemy i
                    doradzamy – zawsze tak, jakby to był nasz rower. Zostaw go w
                    dobrych rękach – zajmiemy się resztą.
                </motion.p>

                <motion.div
                    initial={textInitial}
                    animate={textAnimate}
                    transition={{ ...textTransition, delay: 0.4 }}
                    className="z-100 flex flex-wrap justify-center gap-6"
                >
                    <HeroButtons />
                </motion.div>
            </div>
        </div>
    );
}
