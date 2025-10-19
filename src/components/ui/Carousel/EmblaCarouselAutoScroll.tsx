// const { slides, options } = props
//   const [emblaRef, emblaApi] = useEmblaCarousel(options, [
//     AutoScroll({ playOnInit: false })
//   ])
//   const [isPlaying, setIsPlaying] = useState(false)

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick
//   } = usePrevNextButtons(emblaApi)

//   const onButtonAutoplayClick = useCallback(
//     (callback: () => void) => {
//       const autoScroll = emblaApi?.plugins()?.autoScroll
//       if (!autoScroll) return

//       const resetOrStop =
//         autoScroll.options.stopOnInteraction === false
//           ? autoScroll.reset
//           : autoScroll.stop

//       resetOrStop()
//       callback()
//     },
//     [emblaApi]
//   )

//   const toggleAutoplay = useCallback(() => {
//     const autoScroll = emblaApi?.plugins()?.autoScroll
//     if (!autoScroll) return

//     const playOrStop = autoScroll.isPlaying()
//       ? autoScroll.stop
//       : autoScroll.play
//     playOrStop()
//   }, [emblaApi])

//   useEffect(() => {
//     const autoScroll = emblaApi?.plugins()?.autoScroll
//     if (!autoScroll) return

//     setIsPlaying(autoScroll.isPlaying())
//     emblaApi
//       .on('autoScroll:play', () => setIsPlaying(true))
//       .on('autoScroll:stop', () => setIsPlaying(false))
//       .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
//   }, [emblaApi])

import { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import "embla-carousel-auto-scroll";

export type UseAutoScrollType = {
    isPlaying: boolean;
    toggleAutoScroll: () => void;
    onButtonAutoScrollClick: (callback: () => void) => void;
};

export const useAutoScroll = (
    emblaApi: EmblaCarouselType | undefined
): UseAutoScrollType => {
    const [isPlaying, setIsPlaying] = useState(false);

    const onButtonAutoScrollClick = useCallback(
        (callback: () => void) => {
            const autoScroll = emblaApi?.plugins()?.autoScroll;
            if (!autoScroll) return;

            const resetOrStop =
                autoScroll.options.stopOnInteraction === false
                    ? autoScroll.reset
                    : autoScroll.stop;

            resetOrStop();
            callback();
        },
        [emblaApi]
    );

    const toggleAutoScroll = useCallback(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (!autoScroll) return;

        const playOrStop = autoScroll.isPlaying()
            ? autoScroll.stop
            : autoScroll.play;
        playOrStop();
    }, [emblaApi]);

    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (!autoScroll) return;

        setIsPlaying(autoScroll.isPlaying());
        emblaApi
            .on("autoScroll:play", () => setIsPlaying(true))
            .on("autoScroll:stop", () => setIsPlaying(false))
            .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
    }, [emblaApi]);

    return {
        isPlaying,
        toggleAutoScroll,
        onButtonAutoScrollClick,
    };
};
