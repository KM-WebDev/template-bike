import Image from "next/image";
import Section from "./Section";
import { cn } from "@/lib/utils";
import { IoPricetag } from "react-icons/io5";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import Button from "./Button";
import { AnimatedNumberInView } from "@/motion-primitives/AnimatedNumberInView";
import { TextRoll } from "@/motion-primitives/TextRoll";
import BusinessStat from "./BusinessStat";
import Badge from "./Budge";

export default function About() {
    return (
        <Section className="px-5 py-[20rem]">
            <Section.Content className="relative">
                <div className="flex flex-col gap-8 md:flex-row md:gap-6">
                    <AboutImage />
                    <Content />
                </div>
            </Section.Content>
        </Section>
    );
}

function AboutImage() {
    return (
        <div className="relative h-[400px] w-full md:h-[550px] md:w-[350px] lg:w-[400px]">
            <Badges />
            <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-lg">
                <Image
                    src="/about.jpg"
                    alt="Pracownik serwisu naprawia koło roweru"
                    className="object-cover"
                    fill
                />
            </div>
        </div>
    );
}

function Content() {
    return (
        <div className="z-1 flex w-full flex-1 flex-col gap-4 md:gap-6">
            <div className="flex h-fit w-full flex-col gap-5 rounded-3xl bg-white px-6 py-6 shadow-lg md:gap-8 lg:p-[5rem]">
                <div className="flex flex-col gap-2 md:gap-3">
                    <h2 className="text-2xl font-bold">Ludzie i relacje</h2>
                    <p>
                        Chcemy tworzyć miejsce, do którego chętnie się wraca –
                        nie tylko po naprawę, ale też po dobrą radę i pozytywną
                        energię. Budujemy społeczność pasjonatów dwóch kółek,
                        którzy mogą na nas liczyć w każdej sytuacji.
                    </p>
                </div>
                <Button className="w-fit">Zobacz więcej</Button>
            </div>
            <Stats className="flex w-full justify-between gap-6 px-5" />
        </div>
    );
}

function Stats({ className }: { className?: string }) {
    return (
        <div className={className}>
            <BusinessStat value={544} text="Naprawione rowery" />
            <BusinessStat value={356} text="Zadowoleni klienci" />
            <BusinessStat value={25} text="zrobione Eventy" />
        </div>
    );
}

function Badges() {
    return (
        <>
            <Badge text="Super cena" className="left-[50%] -translate-y-[50%]">
                <IoPricetag />
            </Badge>
            <Badge
                text="Szybka naprawa"
                className="right-0 bottom-[10%] translate-x-[5%] md:translate-x-[15%]"
            >
                <FaClock />
            </Badge>
            <Badge
                text="Stały kontakt"
                className="bottom-0 left-[10%] translate-y-[50%]"
            >
                <FaPhoneAlt />
            </Badge>
        </>
    );
}
