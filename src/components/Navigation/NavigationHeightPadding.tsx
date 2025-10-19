"use client";
import { useCallback, useContext, useEffect, useRef } from "react";
import { GlobalControlsContext } from "../GlobalControls";

interface NavigationHeightProps {
    className?: string;
    responsive?: boolean;
}

export default function NavigationHeightPadding({
    className,
    responsive = true,
}: NavigationHeightProps) {
    const { navRef } = useContext(GlobalControlsContext);
    const paddingRef = useRef<HTMLDivElement | null>(null);

    const resizeHandler = useCallback(() => {
        if (navRef.current && paddingRef.current) {
            const { height } = navRef.current.getBoundingClientRect();
            console.log(height);
            paddingRef.current.style.height = height.toString() + "px";
        }
    }, [navRef, paddingRef]);

    useEffect(() => {
        const node = navRef.current;
        if (!node || !responsive) return;
        resizeHandler();

        const resizeObserver = new ResizeObserver(resizeHandler);
        resizeObserver.observe(node);
        return () => resizeObserver.disconnect();
    }, [navRef, paddingRef, resizeHandler, responsive]);

    return <div ref={paddingRef} className={className} />;
}
