import About from "@/components/About";
import HeroWithControls from "@/components/HeroWithControls";
import MotionScroll from "@/components/MotionScroll";

export default function Page() {
    return (
        <MotionScroll className="h-fit w-full">
            <HeroWithControls />
            <About />
        </MotionScroll>
    );
}
