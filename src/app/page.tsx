import Hero from "@/components/Hero";
import SectionAbout from "@/components/SectionAbout";
import MotionScroll from "@/components/MotionScroll";

export default function Page() {
    return (
        <MotionScroll className="h-fit w-full">
            <Hero />
            <SectionAbout viewRange={[0.25, 1]} />
        </MotionScroll>
    );
}
