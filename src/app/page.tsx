import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import MotionScroll from "@/components/motion/MotionScroll";

export default function Page() {
    return (
        <MotionScroll className="h-fit w-full">
            <Hero />
            <About />
        </MotionScroll>
    );
}
