// import { FaQuoteRight } from "react-icons/fa";
// import { cn } from "@/lib/utils/cn";

import { Carousel, CarouselItem } from "../Carousel";
import Section from "../Section";

// import {
//     Carousel,
//     CarouselContent,
//     CarouselNavigation,
//     CarouselItem,
//     CarouselIndicator,
// } from "../../motion-primitives/Carousel";

// import Section from "../Section";

// export default function Review() {
//     return (
//         <Section>
//             <Section.Content>
//                 <div className="relative px-20">
//                     <Carousel>
//                         <CarouselContent className="-ml-4">
//                             <CarouselItem
//                                 className={cn(
//                                     "max-md:basis-1/1",
//                                     "max-xl:basis-1/2",
//                                     "basis-1/3 pl-4"
//                                 )}
//                             >
//                                 <Element />
//                             </CarouselItem>
//                             <CarouselItem
//                                 className={cn(
//                                     "max-md:basis-1/1",
//                                     "max-xl:basis-1/2",
//                                     "basis-1/3 pl-4"
//                                 )}
//                             >
//                                 <Element />
//                             </CarouselItem>
//                             <CarouselItem
//                                 className={cn(
//                                     "max-md:basis-1/1",
//                                     "max-xl:basis-1/2",
//                                     "basis-1/3 pl-4"
//                                 )}
//                             >
//                                 <Element />
//                             </CarouselItem>
//                             <CarouselItem
//                                 className={cn(
//                                     "max-md:basis-1/1",
//                                     "max-xl:basis-1/2",
//                                     "basis-1/3 pl-4"
//                                 )}
//                             >
//                                 <Element />
//                             </CarouselItem>
//                             <CarouselItem
//                                 className={cn(
//                                     "max-md:basis-1/1",
//                                     "max-xl:basis-1/2",
//                                     "basis-1/3 pl-4"
//                                 )}
//                             >
//                                 <Element />
//                             </CarouselItem>
//                             <CarouselItem
//                                 className={cn(
//                                     "max-md:basis-1/1",
//                                     "max-xl:basis-1/2",
//                                     "basis-1/3 pl-4"
//                                 )}
//                             >
//                                 <Element />
//                             </CarouselItem>
//                             <CarouselItem
//                                 className={cn(
//                                     "max-md:basis-1/1",
//                                     "max-xl:basis-1/2",
//                                     "basis-1/3 pl-4"
//                                 )}
//                             >
//                                 <Element />
//                             </CarouselItem>
//                         </CarouselContent>
//                         <CarouselNavigation alwaysShow />
//                         <CarouselIndicator />
//                     </Carousel>
//                 </div>
//                 {/* <div className="flex flex-col items-center gap-30 bg-[#ececec] pt-5 pb-30">
//                     <p className="text-2xl font-bold">
//                         Opinie naszych klientów
//                     </p>
//                     <div className={cn("flex flex-row gap-10")}>
//                         <Element />
//                         <Element />
//                         <Element />
//                     </div>
//                 </div> */}
//             </Section.Content>
//         </Section>
//     );
// }

// function Element() {
//     return (
//         <div className="flex aspect-square flex-col gap-4 rounded-2xl bg-white p-8">
//             <div className="text-5xl text-[#ececec]">
//                 <FaQuoteRight />
//             </div>
//             <p>
//                 Bardzo rzetelny serwis - terminowy, solidny i komunikatywny.
//                 Rower miał kilka poważniejszych usterek, ale wszystko zostało
//                 naprawione.
//             </p>
//             <div className="flex items-center gap-5">
//                 <div className="h-10 w-10 rounded-[50%] bg-[#d9d9d9]"></div>
//                 <p>Jan Kowlski</p>
//             </div>
//         </div>
//     );
// }

export default function Review() {
    return (
        <Section>
            <Section.Content>
                <Carousel>
                    {Array(10)
                        .fill(0)
                        .map((_, index) => {
                            return (
                                <CarouselItem key={index}>
                                    <div className="flex h-[10rem] w-[20rem] items-center justify-center bg-yellow-300/20">
                                        {index + 1}
                                    </div>
                                </CarouselItem>
                            );
                        })}
                </Carousel>
            </Section.Content>
        </Section>
    );
}
