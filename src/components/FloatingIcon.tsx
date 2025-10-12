import { cn } from "@/lib/utils/cn";

interface FloatingIconProps {
    children: React.ReactNode;
    className?: string;
}

export default function FloatingIcon({
    children,
    className,
}: FloatingIconProps) {
    return (
        <div
            className={cn(
                "absolute -z-1 -translate-x-[50%] -translate-y-[50%] text-[#ececec]",
                className
            )}
        >
            {children}
        </div>
    );
}
