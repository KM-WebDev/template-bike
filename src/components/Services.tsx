import FancyAccordion, { AccordionEntries } from "./FancyAccordionv2";
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
        Content: GenerateContnet([
            { name: "Dokładne mycie ramy", price: "40 zł" },
            { name: "Mycie i odtłuszczanie napędu", price: "50 zł" },
            { name: "Czyszczenie i smarowanie łańcucha", price: "30 zł" },
            { name: "Pełna konserwacja roweru", price: "80 zł" },
        ]),
        note: "Czas realizacji: ok. 1 godzina",
    },
    {
        title: "Przegląd okresowy",
        Content: GenerateContnet([
            { name: "Kontrola i regulacja przerzutek", price: "40 zł" },
            { name: "Regulacja hamulców", price: "35 zł" },
            { name: "Kontrola łożysk, sterów i suportu", price: "40 zł" },
            { name: "Pełny przegląd roweru", price: "150 zł" },
        ]),
        note: "Czas realizacji: 2-3 godziny ",
    },
    {
        title: "Naprawy i wymiany",
        Content: GenerateContnet([
            { name: "Wymiana dętki lub opony", price: "40 zł" },
            { name: "Wymiana łańcucha", price: "30 zł" },
            { name: "Wymiana klocków hamulcowych", price: "25 zł" },
            {
                name: "Naprawa układu hamulcowego hydraulicznego",
                price: "70 zł",
            },
            { name: "Diagnoza i naprawa e-bike", price: "od 120  zł" },
        ]),
        note: "Czas realizacji: zależny od zakresu usługi ",
    },
    {
        title: "Serwis kół",
        Content: GenerateContnet([
            { name: "Centrowanie koła", price: "60 zł" },
            { name: "Wymiana szprychy", price: "20 zł / szt." },
            {
                name: "Serwis piasty (czyszczenie, smarowanie, regulacja)",
                price: "50 zł",
            },
            { name: "Montaż opon lub dętek", price: "30 zł" },
        ]),
        note: "Czas realizacji: 1-2 godziny ",
    },
    {
        title: "Dodatkowe usługi",
        Content: GenerateContnet([
            { name: "Montaż błotników, bagażników, lampek", price: "od 30 zł" },
            { name: "Przygotowanie roweru do sezonu", price: "100 zł" },
            { name: "Diagnoza ogól", price: "40 zł" },
            { name: "Transport roweru do/ze sklep", price: "50 zł" },
        ]),
    },
];

interface ServiceEntry {
    name: string;
    price: string;
}

type ServiceEntries = ServiceEntry[];

export default function Services() {
    return (
        <div className="flex flex-col gap-10">
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
                </Section.Content>
            </Section>
            <Banner></Banner>
            <Section paddingSize="sm">
                <Section.Content>
                    <Highlights></Highlights>
                </Section.Content>
            </Section>
            <Map></Map>
        </div>
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
            <div className="bg-opacity-40 absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black px-6 text-center">
                <h2 className="mb-2 text-3xl font-semibold text-white">
                    Twój rower w dobrych rękach
                </h2>
                <p className="max-w-lg text-gray-100">
                    Każdy serwis wykonujemy z dbałością o szczegóły — od
                    pierwszej śruby po ostatnie smarowanie.
                </p>
                <Button>Zarezerwuj termin</Button>
            </div>
        </div>
    );
}

function Map() {
    return (
        <div className="flex items-center flex-row justify-center">
            <div className="flex h-[300px] w-[500px] bg-gray-400">Mapa</div>
            <p>Znajdziesz nas tutaj</p>
        </div>
    );
}

function GenerateContnet(entries: ServiceEntries) {
    return (
        <ul className="list-disc px-4">
            {entries.map((entry, i) => {
                return (
                    <li key={i}>
                        <div className="flex gap-2">
                            <div>{entry.name}</div>
                            <span>-</span>
                            <div className="font-bold text-red-500">
                                {entry.price}
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
