"use client";
import React, { RefObject, useRef } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplay } from "./EmblaCarouselAutoplay";
import { useAutoplayProgress } from "./EmblaCarouselAutoplayProgress";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

// import styles from "./css/Embla.module.css"

import "./css/Embla.css";
import { cn } from "@/lib/utils/cn";

type PropType = {
    slides: React.ReactNode[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const progressNode = useRef<HTMLDivElement >(null);
    
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: false, delay: 3000 }),
    ]);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
        useAutoplay(emblaApi);

    const { showAutoplayProgress } = useAutoplayProgress(
        emblaApi,
        progressNode
    );

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((Element, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                {Element}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton
                        onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={() => onAutoplayButtonClick(onNextButtonClick)}
                        disabled={nextBtnDisabled}
                    />
                </div>

                <div
                    className={`embla__progress`.concat(
                        showAutoplayProgress ? "" : "embla__progress--hidden"
                    )}
                >
                    <div className={cn("embla__progress__bar", "!bg-red-500")} ref={progressNode} />
                </div>

                <button
                    className="embla__play"
                    onClick={toggleAutoplay}
                    type="button"
                >
                    {autoplayIsPlaying ? "Stop" : "Start"}
                </button>
            </div>
        </div>
    );
};

export default EmblaCarousel;
