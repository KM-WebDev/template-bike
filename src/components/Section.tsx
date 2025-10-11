import clsx from "clsx";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

interface ContentProps {
    children: React.ReactNode;
    className?: string;
}

export default function Section({ children, className }: SectionProps) {
    return (
        <section className={clsx("flex flex-col items-center", className)}>
            {children}
        </section>
    );
}

function Content({ children, className }: ContentProps) {
    return (
        <div
            className={clsx(
                "max-xs:px-2",
                "flex w-full max-w-[1200px] flex-col px-4",
                "lg:px-5",
                "xl:px-0",
                className
            )}
        >
            {children}
        </div>
    );
}

Section.Content = Content;
