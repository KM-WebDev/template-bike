import About from "@/components/About";
import CallSection from "@/components/CallSection";
import Hero from "@/components/Hero/Hero";
import Highlight from "@/components/Highlight/Highlight";
import Review from "@/components/Review";
import Section from "@/components/Section";
// import Logos from "@/components/Logos";

export default function Page() {
    return (
        <>
            <Hero />
            <Highlight />
            <CallSection />
            <About />
            <Review />
            {/* <Logos /> */}
        </>
    );
}
