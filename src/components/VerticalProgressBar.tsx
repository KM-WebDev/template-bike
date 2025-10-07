import { motion, MotionValue, useTransform } from "motion/react";
import { useEffect, useState } from "react";

interface VerticalProgressBarProps {
    scrollYProgress: MotionValue<number>;
    start: number;
    end: number;
    height?: string;
}

export default function VerticalProgressBar({
    scrollYProgress,
    start,
    end,
    height = "100svh",
}: VerticalProgressBarProps) {
    const [progress, setProgress] = useState(0);

    // const progress = useTransform(scrollYProgress, [start, end], [0, 100], {
    //     clamp: true,
    // });

    useEffect(() => {
        scrollYProgress.on("change", (latest) => {
            console.log(latest);
            setProgress(latest * 100);
        });
    });

    return (
        <div
            style={{
                width: "8px",
                position: "sticky",
                top: 0,
                height,
                zIndex: 1000,
                // backgroundColor: "#000",
                borderRadius: "4px",
                overflow: "hidden",
            }}
        >
            <motion.div
                style={{
                    width: "100%",
                    height: progress + "%",
                    backgroundColor: "#0070f3",
                    originY: 1,
                    z: 100,
                }}
            />
        </div>
    );
}
