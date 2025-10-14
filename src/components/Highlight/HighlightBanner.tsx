import { cn } from "@/lib/utils/cn";
import Banner from "../Banner";
import { MotionScroll } from "../motion/MotionScroll";

export default function HighlightBanner() {
    return (
        <Banner>
            <MotionScroll
                options={{ offset: ["start start", "end end"] }}
                transform={{
                    property: "translateX",
                    inputRange: [0, 1],
                    outputRange: ["75svw", "-75svw"],
                }}
            >
                <div className="flex justify-center gap-[2rem] md:gap-[10rem]">
                    {Array(10)
                        .fill(0)
                        .map((_, index) => {
                            return (
                                <div
                                    key={index}
                                    className={cn(
                                        "bg-gradient-to-t from-[#fff] from-20% to-[#f5f5f5] bg-clip-text text-center font-['Racing_Sans_One'] text-xl text-transparent",
                                        "text-[5rem] md:text-[10rem] lg:text-[15rem]"
                                    )}
                                >
                                    BIKEHUB
                                </div>
                            );
                        })}
                </div>
            </MotionScroll>
        </Banner>
    );
}
