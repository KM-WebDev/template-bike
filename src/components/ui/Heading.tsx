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
        "text-2xl font-bold",
        "xs:text-3xl",
        "sm:text-4xl",
        "md:text-5xl",
        "lg:text-6xl"
    ),
    h2: "",
    h3: "",
    h4: "",
    h5: "",
    h6: "",
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
