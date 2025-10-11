import { cn } from "@/lib/utils";

interface FloatingIconProps {
    children: React.ReactNode;
    className: string;
}

export default function FloatingIcon({
    children,
    className,
}: FloatingIconProps) {
    return (
        <div
            className={cn(
                "absolute -z-1 -translate-x-[50%] translate-y-[50%] text-[10rem] text-[#ececec]",
                className
            )}
        >
            {children}
        </div>
    );
}
