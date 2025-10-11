import { cn } from "@/lib/utils";

import styles from "./Highlight.module.scss";
import Button from "../Button";
import Section from "../Section";
import FloatingIcon from "../FloatingIcon";
import Element from "./HighlightElement";
import Banner from "../Banner";

import { FaTruck } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";
import { FaBicycle } from "react-icons/fa";

export default function HighlightServer() {
    return (
        <Section className="relative pb-[18rem]" padded={["top"]}>
            <Section.Content className="gap-20">
                <TopSection />
                <Highlights />
            </Section.Content>
            <Banner className="max-md:hidden">
                <Banner.Text text="BIKEHUB" />
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
            <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
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

function Icons() {
    return (
        <>
            <FloatingIcon className="top-[0%] left-[15%] rotate-[-25deg]">
                <FaBicycle />
            </FloatingIcon>
            <FloatingIcon className="top-[18%] left-[5%] rotate-[12deg]">
                <FaBiking />
            </FloatingIcon>

            <FloatingIcon className="top-[38%] left-[15%] rotate-[10deg]">
                <FaWrench />
            </FloatingIcon>

            <FloatingIcon className="top-[0%] left-[85%] rotate-[8deg]">
                <FaWrench />
            </FloatingIcon>

            <FloatingIcon className="top-[18%] left-[95%] rotate-[26deg]">
                <FaBicycle />
            </FloatingIcon>

            <FloatingIcon className="top-[38%] left-[85%] rotate-[12deg]">
                <FaBiking />
            </FloatingIcon>
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
