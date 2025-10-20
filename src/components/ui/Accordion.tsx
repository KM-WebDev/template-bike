"use client";

import { cn } from "@/lib/utils/cn";
import {
    Accordion as HeroAccordion,
    AccordionItem as HeroAccordionItem,
} from "@heroui/accordion";
import { AccordionItemSlots, SlotsToClasses } from "@heroui/theme";

export interface AccordionEntry {
    title: string;
    Content: React.ReactNode;
    note?: string;
}

export type AccordionEntries = AccordionEntry[];

export type AccordionItemClassName = SlotsToClasses<AccordionItemSlots>;

export interface AccordionProps {
    entries: AccordionEntries;
    className?: string;
    itemClassName?: AccordionItemClassName;
    dark?: boolean;
}

export default function Accordion({
    entries,
    className,
    itemClassName,
    dark,
}: AccordionProps) {
    if (!itemClassName) {
        itemClassName = {};
    }

    itemClassName.trigger = cn("cursor-pointer", itemClassName.trigger);
    itemClassName.heading = cn("cursor-pointer", itemClassName.heading);
    itemClassName.titleWrapper = cn(
        "cursor-pointer",
        itemClassName.titleWrapper
    );

    return (
        <div className={dark ? "dark" : "light"}>
            <HeroAccordion
                selectionMode="multiple"
                variant="splitted"
                defaultExpandedKeys={["0"]}
                className={className}
            >
                {entries.map((entry, i) => {
                    return (
                        <HeroAccordionItem
                            aria-label={`Accordion ${i}`}
                            key={i}
                            title={entry.title}
                            classNames={itemClassName}
                            id={entry.title.replaceAll(" ", "")}
                            onPress={(e) => {
                                // Michael: DO NOT TOUCH THIS CODE!!!!
                                setTimeout(() => {
                                    const target = e.target.closest(
                                        `#${entry.title.replaceAll(" ", "")}`
                                    );
                                    if (!target) {
                                        return;
                                    }
                                    if (target.getAttribute("data-open")) {
                                        target.scrollIntoView({
                                            block: "center",
                                            behavior: "smooth"
                                        });
                                        target.setAttribute("data-open", "");
                                    } else {
                                        target.setAttribute(
                                            "data-open",
                                            "opened"
                                        );
                                    }
                                }, 50);
                            }}
                        >
                            <div>
                                <Content key={i} entry={entry} />

                                {entry.note && (
                                    <div className="mt-3 text-sm text-gray-500">
                                        {entry.note}
                                    </div>
                                )}
                            </div>
                        </HeroAccordionItem>
                    );
                })}
            </HeroAccordion>
        </div>
    );
}

// One does not simply inline this funtion or React will complain.
function Content({ entry }: { entry: AccordionEntry }) {
    return <>{entry.Content}</>;
}
