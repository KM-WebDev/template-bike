import About from "@/components/About";
import Hero from "@/components/Hero";
import MotionScroll from "@/components/MotionScroll";
import { createContext } from "vm";

export const GlobalMotionScrollContext =
    createContext<MotionScrollContext | null>(null);

export default function Page() {
    return (
        <MotionScroll className="h-fit w-full">
            <Hero />
            <About />
        </MotionScroll>
    );
}
