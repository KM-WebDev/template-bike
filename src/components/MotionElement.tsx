import { motion, MotionValue, useTransform } from "motion/react";

interface Props {
    property: string;
    value: MotionValue;
    inputRange: number[];
    outputRange: number[];
    children?: React.ReactNode;
    className?: string;
}

export default function MotionElement({
    className,
    children,
    value,
    inputRange,
    outputRange,
    property,
}: Props) {
    const propertyValue = useTransform(value, inputRange, outputRange);

    return (
        <motion.div style={{ [property]: propertyValue }} className={className}>
            {children}
        </motion.div>
    );
}
