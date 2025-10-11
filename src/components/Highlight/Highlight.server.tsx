import Button from "../Button";
import Section from "../Section";

import styles from "./Highlight.module.scss";

import { FaTruck } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";
import { FaBicycle } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface ElementProps {
    children: React.ReactNode;
    title: string;
    content: string;
}

interface FloatingIconProps {
    children: React.ReactNode;
    className: string;
}

export default function HighlightServer() {
    return (
        <Section className="pb-0">
            <Section.Content className="relative">
                <div className="flex flex-col justify-between">
                    <TopSection />
                    <Highlights />
                </div>
                <div>
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
                </div>

                <div className="relative h-[22rem] -z-1000 flex justify-center">
                    <div className="absolute bottom-[0rem] w-[100vw] bg-[#ECECEC]">
                        <div className="bg-gradient-to-t from-[#ffffff] to-[#f5f5f5] bg-clip-text text-center font-['Racing_Sans_One'] text-[25rem] text-transparent">
                            BIKEHUB
                        </div>
                    </div>
                </div>
            </Section.Content>
        </Section>
    );
}

function TopSection() {
    return (
        <div className="flex flex-col items-center justify-between gap-[3rem] pt-[20rem] pb-[20rem]">
            <p className="text-[2.8rem] font-bold">Ludzie i Relacje</p>
            <p className={cn("w-[60%] text-center leading-[1.8]", styles.text)}>
                Chcemy tworzyć miejsce, do którego chętnie się wraca - nie tylko
                po naprawę, ale też po dobrą radę i pozytywną energię. Budujemy
                społeczność pasjonatów dwóch kółek, którzy mogą na nas liczyć w
                każdej sytuacji.
            </p>
            <Button>Click me</Button>
        </div>
    );
}

function Highlights() {
    return (
        <div className="flex justify-between">
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
        </div>
    );
}

function FloatingIcon({ children, className }: FloatingIconProps) {
    return (
        <div
            className={cn(
                "absolute -translate-x-[50%] translate-y-[50%] text-[10rem] text-[#ececec]",
                className
            )}
        >
            {children}
        </div>
    );
}

function Element({ children, title, content }: ElementProps) {
    return (
        <div
            className={cn(
                "flex w-[35rem] flex-col items-center rounded-[15px] pt-[2rem] pb-[3rem]",
                styles.element
            )}
        >
            {children}
            <p className="mt-[1rem] mb-[1rem] text-[2.8rem] font-bold">
                {title}
            </p>
            <p className="flex text-center">{content}</p>
        </div>
    );
}
