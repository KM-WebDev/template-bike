"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { AccordionItemSlots, SlotsToClasses } from "@heroui/theme";

export interface AccordionEntry {
    title: string;
    content: string;
    note?: string;
}

export type AccordionEntries = AccordionEntry[];

export type AccordionItemClassName = SlotsToClasses<AccordionItemSlots>;

export interface AccordionProps {
    entries: AccordionEntries;
    className?: string,
    itemClassName?: AccordionItemClassName
    dark?: boolean
}

// Michael: had to prefix it with "Fancy" to avoid conflicts with HeroUI import above
export default function FancyAccordion({ entries, className, itemClassName, dark }: AccordionProps) {
    return (
        <div className={dark ? "dark" : "light"}>
            <Accordion
                selectionMode="multiple"
                variant="splitted"
                defaultExpandedKeys={["0"]}
                className={className}
            >
                {entries.map((entry, i) => (
                    <AccordionItem
                        key={i}
                        aria-label={`Accordion ${i}`}
                        title={entry.title}
                        classNames={itemClassName}
                       
                    >
                        {entry.content}
                        {entry.note && (
                            <div className="mt-3 text-sm text-gray-500">
                                {entry.note}
                            </div>
                        )}
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
