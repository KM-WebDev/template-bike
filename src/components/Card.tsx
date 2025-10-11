import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className: string;
}

export default function Card({ children, className }: CardProps) {
    return (
        <div className={cn("rounded-2xl bg-white shadow-lg", className)}>
            {children}
        </div>
    );
}
