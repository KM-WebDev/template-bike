import { cn } from "@/lib/utils/cn";
import Banner from "../Banner";
import { MotionScroll, MotionScrollContainer } from "../motion/MotionScroll";

export default function HighlightBanner() {
    return (
        <Banner className="h-[25rem] bg-[#333]">
            {/* <MotionScrollContainer>
                <MotionScroll
                    options={{ offset: ["start end", "end start"] }}
                    transform={{
                        property: "translateX",
                        inputRange: [0, 1],
                        outputRange: ["-25%", "25%"],
                    }}
                >
                    <div className="flex justify-center gap-[2rem] md:gap-[10rem]">
                        {Array(5)
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
            </MotionScrollContainer> */}
        </Banner>
    );
}
