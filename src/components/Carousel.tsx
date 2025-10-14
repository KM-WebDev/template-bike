"use client";

import { cn } from "@/lib/utils/cn";
import { createContext, useRef } from "react";

interface CarouselContext {
    x?: string;
}

interface CarouselProps {
    children: React.ReactNode;
    className?: string;
}

interface CarouselItemProps {
    children: React.ReactNode;
    className?: string;
}

const CarouselContext = createContext<CarouselContext>({});
export function Carousel({ className, children }: CarouselProps) {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <CarouselContext.Provider value={{}}>
            <div className="w-full bg-black">
                <div
                    ref={ref}
                    className={cn(
                        "flex h-fit w-fit gap-[5rem] bg-green-500/20",
                        className
                    )}
                >
                    {children}
                </div>
            </div>
        </CarouselContext.Provider>
    );
}

export function CarouselItem({ children, className }: CarouselItemProps) {
    return <div className={cn("bg-blue-200", className)}>{children}</div>;
}
