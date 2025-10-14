import { HTMLDivRef } from "@/lib/types/global";
import {
    TransformOptions,
    useMotionValue,
    useScroll,
    UseScrollOptions,
    useTransform,
} from "motion/react";

interface Transform {
    property: string;
    inputRange: number[];
    outputRange: number[] | string[];
    options?: TransformOptions<unknown>;
}

interface useMotionScrollParams {
    ref: HTMLDivRef | false;
    options?: UseScrollOptions;
    transform: Transform;
}

export function useMotionScroll({
    ref,
    options: scrollOptions = {},
    transform,
}: useMotionScrollParams) {
    if (ref && ref.current) scrollOptions.target = ref;
    const { scrollYProgress } = useScroll(scrollOptions);
    const fallback = useMotionValue(0);
    const safeScroll = scrollYProgress ? scrollYProgress : fallback;
    const { inputRange, outputRange, options } = transform;
    const value = useTransform(safeScroll, inputRange, outputRange, options);

    return value;
}
