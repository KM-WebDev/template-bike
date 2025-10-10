import About from "@/components/About";
import Hero from "@/components/Hero/Hero";
import Highlight from "@/components/Highlight/Highlight";
import Logos from "@/components/Logos";
import MotionScroll from "@/components/motion/MotionScroll";

export default function Page() {
    return (
        <MotionScroll className="-z-10 h-fit w-full">
            <Hero />
            <Highlight />
            <About />
            <Logos />
        </MotionScroll>
    );
}
