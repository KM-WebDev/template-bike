import { cn } from "@/lib/utils/cn";
import React from "react";

interface BannerProps {
    className?: string;
    children?: React.ReactNode;
}

interface BannerTextProps {
    className?: string;
    text?: string;
}

export default function Banner({ children, className }: BannerProps) {
    return (
        <div
            className={cn(
                "absolute right-0 bottom-0 left-0 -z-10 bg-[#ECECEC]",
                className
            )}
        >
            {children}
        </div>
    );
}

function Text({ className, text }: BannerTextProps) {
    return (
        <div
            className={cn(
                "bg-gradient-to-t from-[#fff] from-20% to-[#f5f5f5] bg-clip-text text-center font-['Racing_Sans_One'] text-xl text-transparent",
                className
            )}
        >
            {text}
        </div>
    );
}

Banner.Text = Text;
