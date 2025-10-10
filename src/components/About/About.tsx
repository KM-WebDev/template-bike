import Section from "../Section";
import AboutFragment from "./AboutFragment";
import { fragments } from "./aboutData";

export default function About() {
    return (
        <Section className="py-50">
            <Section.Content className="relative">
                {fragments.map((fragment, index) => {
                    return (
                        <AboutFragment
                            key={fragment.title}
                            fragment={fragment}
                            id={index + 1}
                        />
                    );
                })}
            </Section.Content>
        </Section>
    );
}
