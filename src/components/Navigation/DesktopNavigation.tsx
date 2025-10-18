import { cn } from "@/lib/utils/cn";
import { DeviceNavigationProps } from "./Navigation.d";

export function DesktopNavigation({
    children,
    className,
}: DeviceNavigationProps) {
    return (
        <div
            className={cn(
                "flex h-full flex-col justify-center gap-0.5 overflow-hidden rounded-full bg-black/40 px-4 py-4 shadow-lg backdrop-blur",
                className
            )}
        >
            {children}
        </div>
    );
}
