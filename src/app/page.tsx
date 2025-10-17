import About from "@/components/About";
import Hero from "@/components/Hero/Hero";
import Highlight from "@/components/Highlight/Highlight";
import Review from "@/components/Review/Review";
import Section from "@/components/Section";
// import Logos from "@/components/Logos";

export default function Page() {
    return (
        <>
            <Hero />
            <Highlight />
            <Section className="bg-[#333]">
                <Section.Content>
                    <div className="h-[10rem]"></div>
                </Section.Content>
            </Section>
            <About />
            <Review />
            {/* <Logos /> */}
        </>
    );
}
