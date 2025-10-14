import { FaQuoteRight } from "react-icons/fa";
import { cn } from "@/lib/utils/cn";

import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
    CarouselIndicator,
} from "../../motion-primitives/Carousel";

import Section from "../Section";
import EmblaCarousel from "@/thirdparty/embla/EmblaCarousel";

export default function Review() {
    return (
        <Section>
            <Section.Content>
                <EmblaCarousel
                    slides={Array(8)
                        .fill(0)
                        .map((_, i) => {
                            return <Element key={i} />
                        })}
                    options={
                        {loop: true}
                    }
                />
            </Section.Content>
        </Section>
    );
}

function Element() {
    return (
        <div className="flex aspect-square flex-col gap-4 rounded-2xl bg-white p-8">
            <div className="text-5xl text-[#ececec]">
                <FaQuoteRight />
            </div>
            <p>
                Bardzo rzetelny serwis - terminowy, solidny i komunikatywny.
                Rower miał kilka poważniejszych usterek, ale wszystko zostało
                naprawione.
            </p>
            <div className="flex items-center gap-5">
                <div className="h-10 w-10 rounded-[50%] bg-[#d9d9d9]"></div>
                <p>Jan Kowlski</p>
            </div>
        </div>
    );
}
