"use client";

import { cn } from "@/lib/utils/cn";
import { DeviceNavigationProps } from "./Navigation.d";
import { useState } from "react";

import Hamburger from "hamburger-react";

export default function MobileNavigation({
    children,
    className,
}: DeviceNavigationProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn("", isOpen && "", className)}>
            {isOpen && children}
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
    );
}
