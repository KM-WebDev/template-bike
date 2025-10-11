import { cn } from "@/lib/utils";
import React from "react";

interface BannerProps {
    className: string;
    children?: React.ReactNode;
}

interface BannerTextProps {
    className?: string;
    text?: string;
}

export function Banner({ children, className }: BannerProps) {
    return (
        <div
            className={cn(
                "absolute bottom-0 h-fit w-full bg-[#ECECEC] font-['Racing_Sans_One']",
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
                "bg-gradient-to-t from-[#ffffff] to-[#f5f5f5] bg-clip-text text-center text-[15rem] text-transparent",
                className
            )}
        >
            {text}
        </div>
    );
}

Banner.Text = Text;
