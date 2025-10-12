import { cn } from "@/lib/utils/cn";

import styles from "./Highlight.module.scss";
import Button from "../Button";
import Section from "../Section";
import FloatingIcon from "../FloatingIcon";
import Element from "./HighlightElement";

import { FaTruck } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";
import { FaBicycle } from "react-icons/fa";
import Banner from "../Banner";
import { MotionScroll, MotionScrollContainer } from "../motion/MotionScroll";

export default function HighlightServer() {
    return (
        <Section
            className="relative pb-[7rem] md:!pb-[12rem] lg:!pb-[18rem]"
            padded={["top", "bottom"]}
        >
            <Section.Content className="gap-20">
                <TopSection />
                <Highlights />
            </Section.Content>
            <Banner>
                <MotionScrollContainer>
                    <MotionScroll
                        useContainer={true}
                        options={{ offset: ["start start", "end end"] }}
                        transform={{
                            property: "translateX",
                            inputRange: [0, 1],
                            outputRange: ["-100svw", "100svw"],
                        }}
                    >
                        <Banner.Text
                            text="BIKEHUB"
                            className="text-[5rem] md:text-[10rem] lg:text-[15rem]"
                        />
                    </MotionScroll>
                </MotionScrollContainer>
            </Banner>
        </Section>
    );
}

function TopSection() {
    return (
        <div className="relative flex flex-col items-center justify-between gap-[3rem]">
            <p className="text-[2.8rem] font-bold">Ludzie i Relacje</p>
            <p
                className={cn(
                    "w-full text-center leading-[1.8] sm:w-[60%]",
                    styles.text
                )}
            >
                Chcemy tworzyć miejsce, do którego chętnie się wraca - nie tylko
                po naprawę, ale też po dobrą radę i pozytywną energię. Budujemy
                społeczność pasjonatów dwóch kółek, którzy mogą na nas liczyć w
                każdej sytuacji.
            </p>
            <Button>Click me</Button>
            <div className="absolute top-0 right-0 bottom-0 left-0">
                <Icons />
            </div>
        </div>
    );
}

function Highlights() {
    return (
        <div
            className={cn(
                "relative flex w-full flex-col justify-between gap-3",
                "md:flex-row",
                "lg:gap-8"
            )}
        >
            <Elements />
        </div>
    );
}

function Icon({
    className,
    children,
}: {
    className: string;
    children: React.ReactNode;
}) {
    return (
        <FloatingIcon className={cn("text-[5rem] max-sm:hidden", className)}>
            {children}
        </FloatingIcon>
    );
}

function Icons() {
    return (
        <>
            <Icon className="top-[15%] left-[20%] rotate-[-25deg]">
                <FaBicycle />
            </Icon>
            <Icon className="top-[50%] left-[5%] rotate-[12deg]">
                <FaBiking />
            </Icon>

            <Icon className="top-[85%] left-[15%] rotate-[10deg]">
                <FaWrench />
            </Icon>

            <Icon className="top-[15%] left-[85%] rotate-[8deg]">
                <FaWrench />
            </Icon>

            <Icon className="top-[50%] left-[95%] rotate-[26deg]">
                <FaBicycle />
            </Icon>

            <Icon className="top-[85%] left-[80%] rotate-[12deg]">
                <FaBiking />
            </Icon>
        </>
    );
}

function Elements() {
    return (
        <>
            <Element
                title="Mobilny serwis"
                content="Nasz serwis posiada mobilną jednostkę serwisową, która dojedzie gdziekolwiek potrzebujesz na terenie miasta Kraków."
            >
                <FaTruck />
            </Element>
            <Element
                title="Mobilny serwis"
                content="Nasz serwis posiada mobilną jednostkę serwisową, która dojedzie gdziekolwiek potrzebujesz na terenie miasta Kraków."
            >
                <FaWrench />
            </Element>
            <Element
                title="Mobilny serwis"
                content="Nasz serwis posiada mobilną jednostkę serwisową, która dojedzie gdziekolwiek potrzebujesz na terenie miasta Kraków."
            >
                <FaClock />
            </Element>
        </>
    );
}
