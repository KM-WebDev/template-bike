import { FaWrench } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";
import { FaBicycle } from "react-icons/fa";

import { cn } from "@/lib/utils/cn";
import FloatingIcon from "../FloatingIcon";
import * as motion from "motion/react-client";

export default function HighlightIcons() {
    return (
        <div className="relative h-full">
            <Icon className="top-[15%] left-[20%] rotate-[-25deg]">
                <FaBicycle />
            </Icon>

            <Icon className="top-[50%] left-[5%] rotate-[12deg]">
                <FaBiking />
            </Icon>

            <Icon className="top-[85%] left-[15%] rotate-[10deg]">
                <FaWrench />
            </Icon>

            <Icon className="top-[15%] left-[85%] rotate-[8deg]">
                <FaWrench />
            </Icon>

            <Icon className="top-[50%] left-[95%] rotate-[26deg]">
                <FaBicycle />
            </Icon>

            <Icon className="top-[85%] left-[80%] rotate-[12deg]">
                <FaBiking />
            </Icon>
        </div>
    );
}

function Icon({
    className,
    children,
}: {
    className: string;
    children: React.ReactNode;
}) {
    return (
        <FloatingIcon className={cn("text-[5rem] max-sm:hidden", className)}>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: Math.random() * 20 + 20,
                    ease: "linear",
                }}
                style={{ transformOrigin: "center" }}
                className="transform-gpu will-change-transform"
            >
                {children}
            </motion.div>
        </FloatingIcon>
    );
}
