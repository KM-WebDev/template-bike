"use client";

interface Props {
    children: React.ReactNode;
}


export default function HighlightClient({ children }: Props) {
    return (
        <div>
            {children}
        </div>
    );
}