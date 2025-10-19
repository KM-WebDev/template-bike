import { cn } from "@/lib/utils/cn";
import { CssDirection } from "@/lib/types/global";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    padded?: CssDirection[];
    paddingSize?: "sm" | "md" | "lg";
}

interface ContentProps {
    children: React.ReactNode;
    className?: string;
    gapped?: boolean;
    gapSize?: "sm" | "md" | "lg";
}

const sectionPaddingTop = {
    sm: cn("max-xs:pt-2", "pt-4", "md:pt-5", "lg:pt-6", "xl:pt-8", "2xl:pt-10"),
    md: cn(
        "max-xs:pt-6",
        "pt-8",
        "md:pt-10",
        "lg:pt-12",
        "xl:pt-15",
        "2xl:pt-20"
    ),
    lg: cn(
        "max-xs:pt-12",
        "pt-16",
        "md:pt-20",
        "lg:pt-24",
        "xl:pt-30",
        "2xl:pt-40"
    ),
};

const sectionPaddingBottom = {
    sm: cn("max-xs:pb-2", "pb-4", "md:pb-5", "lg:pb-6", "xl:pb-8", "2xl:pb-10"),
    md: cn(
        "max-xs:pb-6",
        "pb-8",
        "md:pb-10",
        "lg:pb-12",
        "xl:pb-15",
        "2xl:pb-20"
    ),
    lg: cn(
        "max-xs:pb-12",
        "pb-16",
        "md:pb-20",
        "lg:pb-24",
        "xl:pb-30",
        "2xl:pb-40"
    ),
};

export default function Section({
    children,
    className,
    padded = ["top", "bottom"],
    paddingSize = "lg",
}: SectionProps) {
    return (
        <section
            className={cn(
                "flex flex-col items-center",
                padded.includes("top") && sectionPaddingTop[paddingSize],
                padded.includes("bottom") && sectionPaddingBottom[paddingSize],
                className
            )}
        >
            {children}
        </section>
    );
}

const contentGap = {
    sm: cn(
        "max-xs:gap-2",
        "gap-4",
        "md:gap-5",
        "lg:gap-6",
        "xl:gap-8",
        "2xl:gap-10"
    ),
    md: cn(
        "max-xs:gap-6",
        "gap-8",
        "md:gap-10",
        "lg:gap-12",
        "xl:gap-15",
        "2xl:gap-20"
    ),
    lg: cn(
        "max-xs:gap-12",
        "gap-16",
        "md:gap-20",
        "lg:gap-24",
        "xl:gap-30",
        "2xl:gap-40"
    ),
};

function Content({
    children,
    className,
    gapped = true,
    gapSize = "md",
}: ContentProps) {
    return (
        <div
            className={cn(
                "max-xs:px-2",
                "flex w-full max-w-[1200px] flex-col px-4",
                "lg:px-5",
                "xl:px-0",
                gapped && contentGap[gapSize],
                className
            )}
        >
            {children}
        </div>
    );
}

Section.Content = Content;
