import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import MotionScroll from "@/components/motion/MotionScroll";

export default function Page() {
    return (
        <MotionScroll className="-z-10 h-fit w-full">
            <Hero />
            <About />
        </MotionScroll>
    );
}
