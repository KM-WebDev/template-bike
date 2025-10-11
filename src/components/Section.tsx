import { cn, getTailwindDirections } from "@/lib/utils";
import { CssDirection, TailwindDirection } from "@/types/global";
import { isCssDirectionArray } from "@/types/guards";
import { filterCssDirections } from "../lib/utils";
import { ClassValue } from "clsx";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    padded?: CssDirection[];
}

interface ContentProps {
    children: React.ReactNode;
    className?: string;
    gapped?: boolean;
}

interface FragmentProps {
    children: React.ReactNode;
    className?: string;
}

const sectionPaddingTop = cn(
    "max-xs:pt-4",
    "pt-6",
    "md:pt-12",
    "lg:pt-14",
    "xl:pt-30",
    "2xl:pt-40"
);

const sectionPaddingBottom = cn(
    "max-xs:pb-4",
    "pb-6",
    "md:pb-12",
    "lg:pb-14",
    "xl:pb-30",
    "2xl:pb-40"
);

export default function Section({
    children,
    className,
    padded = ["top", "bottom"],
}: SectionProps) {
    return (
        <section
            className={cn(
                "flex flex-col items-center",
                padded.includes("top") && sectionPaddingTop,
                padded.includes("bottom") && sectionPaddingBottom,
                className
            )}
        >
            {children}
        </section>
    );
}

const contentGap = cn(
    "max-xs:gap-4",
    "gap-6",
    "md:gap-12",
    "lg:gap-14",
    "xl:gap-30",
    "2xl:gap-40"
);

function Content({ children, className, gapped = true }: ContentProps) {
    return (
        <div
            className={cn(
                "max-xs:px-2",
                "flex w-full max-w-[1200px] flex-col px-4",
                "lg:px-5",
                "xl:px-0",
                gapped && contentGap,
                className
            )}
        >
            {children}
        </div>
    );
}

function Fragment({ children, className }: FragmentProps) {
    return <div className={cn("")}>{children}</div>;
}

Section.Content = Content;
Section.Fragment = Fragment;
