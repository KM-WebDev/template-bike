// "use client";

// import { cn } from "@/lib/utils/cn";
// import { Accordion, AccordionItem } from "@heroui/accordion";
// import { AccordionItemSlots, SlotsToClasses } from "@heroui/theme";
// import { JSX, useRef } from "react";

// export interface AccordionEntry {
//     title: string;
//     Content: React.ReactNode;
//     note?: string;
// }

// export type AccordionEntries = AccordionEntry[];

// export type AccordionItemClassName = SlotsToClasses<AccordionItemSlots>;

// export interface AccordionProps {
//     entries: AccordionEntries;
//     className?: string;
//     itemClassName?: AccordionItemClassName;
//     dark?: boolean;
// }

// // Michael: had to prefix it with "Fancy" to avoid conflicts with HeroUI import above
// export default function FancyAccordion({
//     entries,
//     className,
//     itemClassName,
//     dark,
// }: AccordionProps) {
//     if (!itemClassName) {
//         itemClassName = {};
//     }

//     itemClassName.trigger = cn("cursor-pointer", itemClassName.trigger);
//     itemClassName.heading = cn("cursor-pointer", itemClassName.heading);
//     itemClassName.titleWrapper = cn(
//         "cursor-pointer",
//         itemClassName.titleWrapper
//     );

//     return (
//         <div className={dark ? "dark" : "light"}>
//             <Accordion
//                 selectionMode="multiple"
//                 variant="splitted"
//                 defaultExpandedKeys={["0"]}
//                 className={className}
//             >
//                 {entries.map((entry, i) => {
//                     console.log(entry.title);
//                     return (
//                         <AccordionItem
//                             key={`${i + 1}`}
//                             aria-label={`Accordion ${i}`}
//                             title={entry.title}
//                             classNames={itemClassName}
//                             // onPress={() => {
//                             //     if (!ref.current) {
//                             //         return;
//                             //     }
//                             //     ref.current.scrollIntoView({
//                             //         behavior: "smooth",
//                             //     });
//                             // }}
//                         >
//                             <Item entry={entry}></Item>
//                         </AccordionItem>
//                     );
//                 })}
//             </Accordion>
//         </div>
//     );
// }

// function Item({ entry }: { entry: AccordionEntry }) {
//     const ref = useRef<HTMLDivElement | null>(null);
//     return (
//         <div ref={ref}>
//             {entry.Content}

//             {entry.note && (
//                 <div className="mt-3 text-sm text-gray-500">{entry.note}</div>
//             )}
//         </div>
//     );
// }
