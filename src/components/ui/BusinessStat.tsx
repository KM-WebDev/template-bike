import { AnimatedNumberInView } from "@/motion-primitives/AnimatedNumberInView";

interface BusinessStatProps {
    value: number;
    text: string;
    className?: string;
}

export default function BusinessStat({
    value,
    text,
    className,
}: BusinessStatProps) {
    return (
        <div className={className}>
            <span className="flex w-fit items-center text-nowrap">
                <AnimatedNumberInView
                    value={value}
                    className="text-[30px] font-bold"
                />
                <span className="text-[30px] font-bold">+</span>
            </span>

            <span className="text-wrap">{text}</span>
        </div>
    );
}
