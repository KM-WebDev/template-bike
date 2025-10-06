"use client";

import { useContext } from "react";
import { GlobalMotionScrollContext } from "./MotionScroll";
import MotionElement from "./MotionElement";

interface Props {
    property: string;
    inputRange: number[];
    outputRange: number[];
    children?: React.ReactNode;
    className?: string;
}

export default function MotionScrollElement({
    className,
    children,
    inputRange,
    outputRange,
    property,
}: Props) {
    const context = useContext(GlobalMotionScrollContext);
    if (!context) throw new Error("...");

    return (
        <MotionElement
            value={context.scrollYProgress}
            className={className}
            inputRange={inputRange}
            outputRange={outputRange}
            property={property}
        >
            {children}
        </MotionElement>
    );
}
