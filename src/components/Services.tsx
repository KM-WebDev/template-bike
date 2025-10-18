import FancyAccordion, { AccordionEntries } from "./FancyAccordion";
import Section from "./Section";

// Michael: I know this is bad, FIXME later
import Element from "./Highlight/HighlightElement";

import { LuWrench } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { cn } from "@heroui/theme";
import Button from "./Button";

const entries: AccordionEntries = [
    {
        title: "Czyszczenie i konserwacja",
        content:
            "Dokładne mycie ramy, napędu i kół, czyszczenie łańcucha oraz smarowanie wszystkich ruchomych elementów.",
        note: "Czas realizacji: ok. 1 godzina",
    },
    {
        title: "Przegląd okresowy",
        content:
            "Kompleksowa kontrola stanu technicznego roweru: napęd, hamulce, koła, ciśnienie, łożyska i elementy bezpieczeństwa.",
        note: "Czas realizacji: 2-3 godziny ",
    },
    {
        title: "Naprawy i wymiany",
        content:
            "Wymiana zużytych części, naprawy mechaniczne i elektryczne (także e-bike), regulacja przerzutek, hamulców i amortyzacji.",
        note: "Czas realizacji: zależny od zakresu usługi ",
    },
    {
        title: "Serwis kół",
        content:
            "Centrowanie kół, kontrola szprych, piast i opon. Montaż nowych opon, dętek i taśm.",
        note: "Czas realizacji: 1-2 godziny ",
    },
    {
        title: "Dodatkowe usługi",
        content:
            "Montaż akcesoriów, transport rowerów, diagnoza e-bike, przygotowanie do sezonu lub zawodów.",
    },
];

export default function Services() {
    return (
        <>
            <Section>
                <Section.Content>
                    <div className="flex flex-col items-center gap-10">
                        <p className="text-center text-4xl font-bold">
                            Oto nasza oferta:
                        </p>
                        <p className="w-[60%] text-center">
                            Oferujemy kompleksową obsługę Twojego roweru - od
                            czyszczenia po pełne przeglądy i naprawy. Zadbaj o
                            bezpieczeństwo i komfort jazdy z pomocą naszego
                            doświadczonego zespołu.
                        </p>
                        <div className="w-full">
                            <FancyAccordion
                                entries={entries}
                                className="gap-10"
                                itemClassName={{
                                    base: "bg-[#E5E7EB] border-1 px-0",
                                    content:
                                        "bg-white rounded-b-medium px-4 py-4",
                                    title: "px-4",
                                    indicator:
                                        "font-bold text-2xl text-[#6A7282] px-4",
                                }}
                            />
                        </div>
                    </div>
                    <Highlights></Highlights>
                </Section.Content>
            </Section>
            <Banner></Banner>
            <CTA></CTA>
        </>
    );
}

// Michael: copy-pasted from Highlight.server.tsx
function Highlights() {
    return (
        <div
            className={cn(
                "relative flex w-full flex-col justify-between gap-3",
                "md:flex-row",
                "lg:gap-8"
            )}
        >
            <Element
                title="Doświadczeni mechanicy"
                content="Każdy z naszych serwisantów to pasjonat i specjalista, który traktuje Twój rower jak własny."
            >
                <LuWrench />
            </Element>
            <Element
                title="Szybka realizacja"
                content="Wiemy, że chcesz wrócić na trasę — większość napraw wykonujemy w ciągu 1-2 dni."
            >
                <FaRegClock />
            </Element>
            <Element
                title="Jasne zasady"
                content="Zawsze informujemy o kosztach przed rozpoczęciem pracy — żadnych ukrytych opłat."
            >
                <IoChatbubbleEllipsesOutline />
            </Element>
        </div>
    );
}

function Banner() {
    return (
        <div className="relative mb-24 h-80 overflow-hidden shadow-lg">
            <div className="bg-opacity-40 absolute inset-0 flex flex-col items-center justify-center bg-black px-6 text-center">
                <h2 className="mb-2 text-3xl font-semibold text-white">
                    Twój rower w dobrych rękach
                </h2>
                <p className="max-w-lg text-gray-100">
                    Każdy serwis wykonujemy z dbałością o szczegóły — od
                    pierwszej śruby po ostatnie smarowanie.
                </p>
            </div>
        </div>
    );
}

function CTA() {
    return (
        <div className="flex flex-col items-center gap-10 pb-10 text-center">
            <h2 className="mb-3 text-2xl font-semibold">
                Umów wizytę w serwisie
            </h2>
            <Button>Zarezerwuj termin</Button>
        </div>
    );
}
