import { cn } from "@/lib/utils/cn";
import styles from "./Highlight.module.scss";

interface ElementProps {
    children: React.ReactNode;
    title: string;
    content: string;
}

export default function Element({ children, title, content }: ElementProps) {
    return (
        <div
            className={cn(
                "max-xs:px-2 max-xs:py-2 max-xs:gap-2",
                "flex flex-row items-center gap-3 rounded-2xl px-3 py-3 shadow-md",
                "md:flex-col",
                "lg:px-6 lg:py-6",
                styles.element
            )}
        >
            <div
                className={cn(
                    "max-xs:text-xl",
                    "text-4xl text-[#666666]",
                    "md:text-5xl"
                )}
            >
                {children}
            </div>

            <div
                className={cn(
                    "max-xs:z-1",
                    "flex flex-col gap-1",
                    "md:text-center"
                )}
            >
                <p className="text-[1.2rem] font-bold">{title}</p>
                <p className={cn("flex")}>{content}</p>
            </div>
        </div>
    );
}
