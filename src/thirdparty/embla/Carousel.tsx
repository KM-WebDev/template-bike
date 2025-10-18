"use client";
import React, { createContext, useContext, useRef } from "react";
import {
    EmblaCarouselType,
    EmblaOptionsType,
    EmblaPluginType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay";
import { useAutoplay, UseAutoplayType } from "./EmblaCarouselAutoplay";
import { useAutoplayProgress } from "./EmblaCarouselAutoplayProgress";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import { cn } from "@/lib/utils/cn";
import "./css/Embla.css";

interface CarouselContext {
    emblaApi: EmblaCarouselType | undefined;
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
    autoplayApi: UseAutoplayType | undefined;
}

const CarouselContext = createContext<CarouselContext>({
    emblaApi: undefined,
    prevBtnDisabled: true,
    nextBtnDisabled: true,
    onNextButtonClick: () => {},
    onPrevButtonClick: () => {},
    autoplayApi: undefined,
});

type PropType = {
    slides: React.ReactNode[];
    options?: EmblaOptionsType;
    plugins?: EmblaPluginType[];
    children: React.ReactNode;
    autoplay?: AutoplayOptionsType;
};

export function Carousel({ slides, options, children, autoplay }: PropType) {
    const plugins: EmblaPluginType[] = [];
    if (autoplay) plugins.push(Autoplay(autoplay));
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    const autoplayUse = useAutoplay(emblaApi);
    const autoplayApi = autoplay ? autoplayUse : undefined;

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const contextValue = React.useMemo(() => {
        return {
            emblaApi,
            prevBtnDisabled,
            nextBtnDisabled,
            onPrevButtonClick,
            onNextButtonClick,
            autoplayApi,
        };
    }, [
        emblaApi,
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
        autoplayApi,
    ]);

    return (
        <CarouselContext.Provider value={contextValue}>
            <div
                className={cn(
                    "w-full",
                    "[--slide-spacing:2rem]",
                    "[--slide-size:33%]"
                )}
            >
                <div className="overflow-hidden" ref={emblaRef}>
                    <div
                        className={cn(
                            "flex",
                            "[touch-action:pan-y_pinch-zoom]",
                            "ml-[calc(var(--slide-spacing)*-1)]"
                        )}
                    >
                        {slides.map((Element, index) => (
                            <div
                                className={cn(
                                    "min-w-0",
                                    "transform-[translate3d(0,0,0)]",
                                    "flex-[0_0_var(--slide-size)]",
                                    "pl-[var(--slide-spacing)]"
                                )}
                                key={index}
                            >
                                {Element}
                            </div>
                        ))}
                    </div>
                </div>
                {children}
            </div>
        </CarouselContext.Provider>
    );
}

export function CarouselToggleAutoplayButton({
    className,
}: {
    className?: string;
}) {
    const { autoplayApi } = useContext(CarouselContext);
    if (!autoplayApi) return <></>;
    const { autoplayIsPlaying, toggleAutoplay } = autoplayApi;

    return (
        <button
            className={cn("bg-white", className)}
            onClick={toggleAutoplay}
            type="button"
        >
            {autoplayIsPlaying ? "Stop" : "Start"}
        </button>
    );
}

export function CarouselAutoplayProgress() {
    const progressNode = useRef<HTMLDivElement>(null);
    const { emblaApi } = useContext(CarouselContext);

    const { showAutoplayProgress } = useAutoplayProgress(
        emblaApi,
        progressNode
    );

    return (
        <div
            className={cn(
                `embla__progress`,
                showAutoplayProgress ? "" : "embla__progress--hidden"
            )}
        >
            <div
                className={cn("embla__progress__bar", "!bg-red-500")}
                ref={progressNode}
            />
        </div>
    );
}

function Button({
    className,
    children,
    direction,
}: {
    direction: "prev" | "next";
    className?: string;
    children: React.ReactNode | string;
}) {
    const {
        autoplayApi,
        prevBtnDisabled,
        nextBtnDisabled,
        onNextButtonClick,
        onPrevButtonClick,
    } = useContext(CarouselContext);

    const handler =
        direction === "prev" ? onPrevButtonClick : onNextButtonClick;
    const disabled = direction === "prev" ? prevBtnDisabled : nextBtnDisabled;

    function handleClick() {
        if (autoplayApi) {
            autoplayApi.onAutoplayButtonClick(handler);
        } else {
            handler();
        }
    }

    return (
        <button onClick={handleClick} disabled={disabled} className={className}>
            {children}
        </button>
    );
}

interface DirButton {
    className?: string;
    children: string;
}
export function CarouselPrevButton({ className, children }: DirButton) {
    return (
        <Button direction="prev" className={className}>
            {children}
        </Button>
    );
}

export function CarouselNextButton({ className, children }: DirButton) {
    return (
        <Button direction="next" className={className}>
            {children}
        </Button>
    );
}
