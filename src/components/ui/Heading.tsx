import { Heading as HeadingType } from "@/lib/types/styles";
import { cn } from "@/lib/utils/cn";

interface HeadingProps {
    styling?: HeadingType;
    semantic?: HeadingType;
    children: string;
    className?: string;
}

const headingStyles = {
    h1: cn(
        "text-3xl font-bold",
        "xs:text-3xl",
        "sm:text-4xl",
        "md:text-5xl",
        "lg:text-6xl"
    ),
    h2: cn(
        "text-2xl font-bold",
        "xs:text-2xl",
        "sm:text-3xl",
        "md:text-4xl",
        "lg:text-4xl"
    ),
    h3: cn(
        "text-lg font-bold",
        "xs:text-xl",
        "sm:text-xl",
        "md:text-2xl",
        "lg:text-2xl"
    ),
    h4: cn(
        "text-lg font-semibold",
        "xs:text-xl",
        "sm:text-xl",
        "md:text-xl",
        "lg:text-xl"
    ),
    h5: cn(
        "text-base font-semibold",
        "xs:text-lg",
        "sm:text-lg",
        "md:text-xl",
        "lg:text-xl"
    ),
    h6: cn(
        "text-base font-semibold",
        "xs:text-lg",
        "sm:text-lg",
        "md:text-lg",
        "lg:text-lg"
    ),
};

export default function Heading({
    children,
    styling,
    semantic,
    className,
}: HeadingProps) {
    const Tag = semantic ? semantic : "p";
    const styleTarget = styling ? styling : semantic;
    return (
        <Tag
            className={cn(styleTarget && headingStyles[styleTarget], className)}
        >
            {children}
        </Tag>
    );
}
