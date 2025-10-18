import { FaQuoteRight } from "react-icons/fa";
import Section from "./Section";
import {
    Carousel,
    CarouselNextButton,
    CarouselPrevButton,
} from "@/thirdparty/embla/Carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Review() {
    return (
        <Section className="bg-rose-800 md:!p-[4rem]">
            <Section.Content>
                <div className="relative flex flex-col-reverse gap-5">
                    <Carousel
                        slides={Array(8)
                            .fill(0)
                            .map((_, i) => {
                                return <Element key={i} index={i} />;
                            })}
                        options={{ loop: true }}
                        autoplay={{
                            playOnInit: true,
                            delay: 5000,
                            stopOnMouseEnter: true,
                            stopOnInteraction: false,
                        }}
                    >
                        <div className="flex w-full justify-end px-5 text-xl text-[black]">
                            <CarouselPrevButton>
                                <IoIosArrowBack />
                            </CarouselPrevButton>
                            <CarouselNextButton>
                                <IoIosArrowForward />
                            </CarouselNextButton>
                        </div>
                    </Carousel>
                </div>
            </Section.Content>
        </Section>
    );
}

function Element({ index }: { index: number }) {
    return (
        <div className="flex h-full w-full flex-col justify-between gap-4 rounded-2xl bg-[white] p-8">
            <div className="text-5xl text-[#ececec]">
                <FaQuoteRight />
            </div>
            <p>
                Bardzo rzetelny serwis - terminowy, solidny i komunikatywny.
                Rower miał kilka poważniejszych usterek, ale wszystko zostało
                naprawione.
                {index === 0 &&
                    " Bardzo rzetelny serwis - terminowy, solidny i komunikatywny. "}
            </p>
            <div className="flex items-center gap-5">
                <div className="h-10 w-10 rounded-[50%] bg-[#d9d9d9]"></div>
                <p>Jan Kowalski</p>
            </div>
        </div>
    );
}
