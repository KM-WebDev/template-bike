import { FaWrench } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";
import { FaBicycle } from "react-icons/fa";

import { cn } from "@/lib/utils/cn";
import * as motion from "motion/react-client";

export default function HighlightIcons() {
    return (
        <div className="relative h-full">
            {/* <Icon className="top-[-5%] left-[30%] rotate-[-25deg]">
                <FaBicycle />
            </Icon>

            <Icon className="top-[10%] left-[15%] rotate-[12deg]">
                <FaBiking />
            </Icon>

            <Icon className="top-[85%] left-[15%] rotate-[10deg]">
                <FaWrench />
            </Icon>

            <Icon className="top-[-5%] left-[70%] rotate-[8deg]">
                <FaWrench />
            </Icon>

            <Icon className="top-[10%] left-[85%] rotate-[26deg]">
                <FaBicycle />
            </Icon>

            <Icon className="top-[85%] left-[85%] rotate-[12deg]">
                <FaBiking />
            </Icon> */}
            <Icon className="top-[0%] left-[40%] rotate-[-25deg]">
                <FaBicycle />
            </Icon>

            <Icon className="top-[10%] left-[15%] rotate-[12deg]">
                <FaBiking />
            </Icon>

            <Icon className="top-[85%] left-[15%] rotate-[10deg]">
                <FaWrench />
            </Icon>

            <Icon className="top-[-5%] left-[70%] rotate-[8deg]">
                <FaWrench />
            </Icon>

            <Icon className="top-[10%] left-[85%] rotate-[26deg]">
                <FaBicycle />
            </Icon>

            <Icon className="top-[85%] left-[85%] rotate-[12deg]">
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
        <div
            className={cn(
                "text-[5rem] text-[#ececec] max-sm:hidden",
                "absolute -z-10 -translate-x-[50%] -translate-y-[50%]",
                className
            )}
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: Math.random() * 20 + 20,
                    ease: "linear",
                }}
                style={{ transformOrigin: "center" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
