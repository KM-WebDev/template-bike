"use client";

import { useContext, useEffect, useState } from "react";
import { GlobalControlsContext } from "./GlobalControls";

interface Props {
    children: React.ReactNode;
}

export default function NavigationClient({ children }: Props) {
    const [isScrolled, setIsScrolled] = useState(false);

    const context = useContext(GlobalControlsContext);
    if (!context) throw new Error("..."); // learnt from the best

    useEffect(() => {
        const { heroRef } = context;

        function handleScroll() {
            if (!heroRef.current) return;
            if (
                heroRef.current.getBoundingClientRect().height < window.scrollY
            ) {
                console.log("add");
                setIsScrolled(true);
            } else {
                console.log("remove");
                setIsScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
    }, [context]);

    return <div data-scrolled={isScrolled ? "true" : "false"}>{children}</div>;
}
