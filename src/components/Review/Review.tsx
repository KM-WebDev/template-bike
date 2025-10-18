import { FaQuoteRight } from "react-icons/fa";
import Section from "../Section";
import {
    Carousel,
    CarouselAutoplayProgress,
    CarouselNextButton,
    CarouselPrevButton,
    CarouselToggleAutoplayButton,
} from "@/thirdparty/embla/Carousel";

export default function Review() {
    const slides = Array(8)
        .fill(0)
        .map((_, i) => {
            return <Element key={i} index={i} />;
        });

    const options = { loop: true };
    return (
        <Section className="bg-neutral-800 md:!p-[4rem]">
            <Section.Content>
                <div className="relative">
                    <Carousel
                        slides={slides}
                        options={options}
                        autoplay={{
                            playOnInit: false,
                            delay: 3000,
                        }}
                    >
                        <CarouselPrevButton>wstecz</CarouselPrevButton>
                        <CarouselNextButton>dalej</CarouselNextButton>
                        <CarouselToggleAutoplayButton />
                    </Carousel>
                </div>
            </Section.Content>
        </Section>
    );
}

function Element({ index }: { index: number }) {
    return (
        <div className="flex h-fit w-full flex-col gap-4 rounded-2xl bg-[white] p-8">
            <div className="text-5xl text-[#ececec]">
                <FaQuoteRight />
            </div>
            <p>
                Bardzo rzetelny serwis - terminowy, solidny i komunikatywny.
                Rower miał kilka poważniejszych usterek, ale wszystko zostało
                naprawione.
                {index === 0 &&
                    "  Bardzo rzetelny serwis - terminowy, solidny i komunikatywny. Rower miał kilka poważniejszych usterek, ale wszystko zostało naprawione."}
            </p>
            <div className="flex items-center gap-5">
                <div className="h-10 w-10 rounded-[50%] bg-[#d9d9d9]"></div>
                <p>Jan Kowlski</p>
            </div>
        </div>
    );
}
