import Image from "next/image";
import Section from "./ui/Section";
import { cn } from "@/lib/utils/cn";
import { IoPricetag } from "react-icons/io5";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import Button from "./ui/Button";
import BusinessStat from "./ui/BusinessStat";
import Badge from "./ui/Budge";
import Heading from "./ui/Heading";

export default function About() {
    return (
        <Section className="">
            <Section.Content
                className="relative flex flex-col gap-10"
                gapped={false}
            >
                <Heading semantic="h2" className="text-center">
                    Lorem ipsum dolor sit amet consectetur.
                </Heading>
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
                    className="relative object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </div>
    );
}

function Content() {
    return (
        <div className="z-1 flex w-full flex-1 flex-col gap-4 md:gap-6">
            <div
                className={cn(
                    "flex h-fit w-full flex-col gap-5 rounded-3xl bg-white px-6 py-6 shadow-lg",
                    "md:gap-8",
                    "lg:p-[5rem]"
                )}
            >
                <div className="flex flex-col gap-2 md:gap-3">
                    <Heading semantic="h3">Ludzie i relacje</Heading>
                    <p>
                        Chcemy tworzyć miejsce, do którego chętnie się wraca –
                        nie tylko po naprawę, ale też po dobrą radę i pozytywną
                        energię. Budujemy społeczność pasjonatów dwóch kółek,
                        którzy mogą na nas liczyć w każdej sytuacji.
                    </p>
                </div>
                <Button className="w-fit">Zobacz więcej</Button>
            </div>
            <Stats
                className={cn(
                    "max-xs:flex-col",
                    "flex w-full justify-between gap-6 px-5"
                )}
            />
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
            <Badge
                text="Super cena"
                className="left-[50%] -translate-x-[50%] -translate-y-[50%]"
            >
                <IoPricetag />
            </Badge>
            <Badge
                text="Szybka naprawa"
                className="right-0 bottom-[10%] translate-x-[5%]"
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
