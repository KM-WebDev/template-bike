"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "motion/react";
import {
    createContext,
    RefObject,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

interface AnimatedListContext {
    y: number;
    x: number;
    width: number;
    height: number;
    containerRef: RefObject<HTMLDivElement | null>;
    activeItemRef: RefObject<HTMLDivElement | null>;
    setActiveItemRef: (ref: RefObject<HTMLDivElement | null>) => void;
    isHovering: boolean;
    setIsHovering: (val: boolean) => void;
}

interface AnimatedListProps {
    children: React.ReactNode;
    className?: string;
}

const defaultContext = {
    y: 0,
    x: 0,
    width: 0,
    height: 0,
    containerRef: { current: null },
    activeItemRef: { current: null },
    setActiveItemRef: () => {},
    isHovering: false,
    setIsHovering: () => {},
};

const AnimatedListContext = createContext<AnimatedListContext>(defaultContext);

export function AnimatedList({ children, className }: AnimatedListProps) {
    const [activeItemRef, setActiveItemRef] = useState<
        RefObject<HTMLDivElement | null>
    >({ current: null });
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [isHovering, setIsHovering] = useState(false);
    const [pos, setPos] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });

    console.log(pos);
    // hover position
    useEffect(() => {
        const active = activeItemRef.current;
        const container = containerRef.current;

        if (!active || !container) return;
        const activeRect = active.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setPos({
            x: activeRect.left - containerRect.left,
            y: activeRect.top - containerRect.top,
            width: activeRect.width,
            height: activeRect.height,
        });
    }, [activeItemRef, isHovering]);

    const handleLeaveList = () => {
        setIsHovering(false);
        setActiveItemRef({ current: null });
    };

    // leaving List
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        container.addEventListener("mouseleave", handleLeaveList);
        return () => {
            setIsHovering(false);
            container.removeEventListener("mouseleave", handleLeaveList);
        };
    }, [containerRef]);

    return (
        <AnimatedListContext.Provider
            value={{
                ...pos,
                activeItemRef,
                setActiveItemRef,
                containerRef,
                isHovering,
                setIsHovering,
            }}
        >
            <div
                ref={containerRef}
                className={cn("relative h-fit w-fit", className)}
            >
                {children}
            </div>
        </AnimatedListContext.Provider>
    );
}

export function AnimatedListHover({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    const { x, y, width, height, activeItemRef, isHovering } =
        useContext(AnimatedListContext);
    if (!isHovering || !activeItemRef.current) return null;
    return (
        <motion.div
            layout
            animate={{
                x,
                y,
                width,
                height,
                opacity: 1,
            }}
            initial={{ x, y, width, height, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
            }}
            className={cn(
                "absolute -z-10 rounded-xl bg-neutral-200/40",
                className
            )}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedListItem({
    children,
    className,
    activeClassName,
}: {
    className?: string;
    activeClassName?: string;
    children: React.ReactNode;
}) {
    const itemRef = useRef<HTMLDivElement | null>(null);
    const { setActiveItemRef, setIsHovering, activeItemRef } =
        useContext(AnimatedListContext);

    const handleMouseEnter = useCallback(() => {
        setActiveItemRef(itemRef);
        setIsHovering(true);
    }, [setActiveItemRef, setIsHovering]);

    useEffect(() => {
        const node = itemRef.current;
        if (!node) return;

        node.addEventListener("mouseenter", handleMouseEnter);
        return () => node.removeEventListener("mouseenter", handleMouseEnter);
    }, [handleMouseEnter]);
    return (
        <div
            ref={itemRef}
            onClick={() => {
                setIsHovering(false);
                setActiveItemRef({ current: null });
            }}
            className={cn(
                "inline-block h-fit w-fit",
                className,
                itemRef.current === activeItemRef.current && activeClassName
            )}
        >
            {children}
        </div>
    );
}
