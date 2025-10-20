import Heading from "./ui/Heading";
import Section from "./ui/Section";

export default function CallSection() {
    return (
        <Section className="bg-clr-text" paddingSize="md">
            <Section.Content>
                <div className="flex flex-col gap-10 md:flex-row md:gap-20">
                    <Heading
                        semantic="h2"
                        className="text-clr-bg-light md:w-[40%]"
                    >
                        Serwis, który działa jak precyzyjny mechanizm
                    </Heading>
                    <div className="flex flex-col gap-5 md:w-[70%] md:gap-10">
                        <p className="text-clr-bg">
                            W naszej pracowni każde łożysko, każda linka i każda
                            śruba mają swoje miejsce. Zanim rower wyjedzie z
                            serwisu, przechodzi dokładny test – tak, byś mógł po
                            prostu jechać, bez zmartwień. Dla nas liczy się nie
                            tylko naprawa, ale jakość, która utrzymuje się
                            kilometrami.
                        </p>

                        <p className="text-neutral-400">
                            W naszej pracowni każde łożysko, każda linka i każda
                            śruba mają swoje miejsce. Zanim rower wyjedzie z
                            serwisu, przechodzi dokładny test – tak, byś mógł po
                            prostu jechać, bez zmartwień. Dla nas liczy się nie
                            tylko naprawa, ale jakość, która utrzymuje się
                            kilometrami.
                        </p>
                    </div>
                </div>
            </Section.Content>
        </Section>
    );
}
