import { Heading as HeadingType } from "@/lib/types/styles";
import { cn } from "@/lib/utils/cn";

interface HeadingProps {
    styling?: HeadingType;
    semantic?: HeadingType;
    children: string;
    className?: string;
}

function getHeadingStyles(type: HeadingType): string {
    let className = "";

    if (type === "h1") className = "text-6xl font-bold";
    if (type === "h2") className = "";
    if (type === "h3") className = "";
    if (type === "h4") className = "";
    if (type === "h5") className = "";
    if (type === "h6") className = "";

    return className;
}

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
            className={cn(
                styleTarget && getHeadingStyles(styleTarget),
                className
            )}
        >
            {children}
        </Tag>
    );
}
