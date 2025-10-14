import { HTMLDivRef } from "@/lib/types/global";
import {
    TransformOptions,
    useMotionValue,
    useScroll,
    UseScrollOptions,
    useTransform,
} from "motion/react";
import { RefObject, useEffect, useState } from "react";

interface Transform {
    property: string;
    inputRange: number[];
    outputRange: number[] | string[];
    options?: TransformOptions<unknown>;
}

interface useMotionScrollParams {
    ref: HTMLDivRef;
    options?: UseScrollOptions;
    transform: Transform;
}

export function useMotionScroll({
    ref,
    options: scrollOptions = {},
    transform,
}: useMotionScrollParams) {
    const [target, setTarget] = useState<RefObject<HTMLDivElement | null>>({
        current: null,
    });
    if (target && target.current) scrollOptions.target = target;
    const { scrollYProgress } = useScroll(scrollOptions);
    const fallback = useMotionValue(0);
    const safeScroll = scrollYProgress ? scrollYProgress : fallback;
    const { inputRange, outputRange, options } = transform;
    const value = useTransform(safeScroll, inputRange, outputRange, options);

    useEffect(() => {
        if (ref?.current) {
            setTarget(ref);
        }
    }, [ref]);

    return value;
}
