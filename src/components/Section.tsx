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
        <section
            className={clsx("flex flex-col items-center", className)}
            // className={"flex flex-col items-center py-10"}
        >
            {children}
        </section>
    );
}

function Content({ children, className }: ContentProps) {
    return (
        <div className={clsx("flex w-full max-w-[1200px] flex-col", className)}>
            {children}
        </div>
    );
}

Section.Content = Content;
