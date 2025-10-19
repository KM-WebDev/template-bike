import Image from "next/image";
import {
    Carousel,
    CarouselNextButton,
    CarouselPrevButton,
} from "./ui/Carousel/Carousel";
import Section from "./ui/Section";
import { cn } from "@/lib/utils/cn";

const logos = [
    { name: "cannondale", src: "/logos/cannondale.png", alt: "", square: true },
    { name: "creme", src: "/logos/creme.png", alt: "", square: true },
    { name: "gazelle", src: "/logos/gazelle.svg", alt: "" },
    { name: "giant", src: "/logos/giant.png", alt: "" },
    { name: "kross", src: "/logos/kross.png", alt: "" },
    { name: "ns", src: "/logos/ns.png", alt: "", square: true },
    { name: "octane", src: "/logos/octane.jpg", alt: "", square: true },
    { name: "romet", src: "/logos/romet.webp", alt: "" },
    { name: "rondo", src: "/logos/rondo.png", alt: "" },
    { name: "specialized", src: "/logos/specialized.png", alt: "" },
    { name: "trek", src: "/logos/trek.png", alt: "", square: true },
    { name: "unibike", src: "/logos/unibike.svg", alt: "" },
    { name: "woom", src: "/logos/woom.png", alt: "" },
];

export default function Logos() {
    return (
        <Section className="bg-white py-2" padded={[]}>
            <div className="flex w-fit gap-[5rem]">
                <Carousel
                    options={{ loop: true }}
                    className={cn(
                        "![--slide-size:30%] ![--slide-spacing:1rem]",
                        "xs:![--slide-size:30%] xs:![--slide-spacing:2rem]",
                        "sm:![--slide-size:30%] sm:![--slide-spacing:3rem]",
                        "md:![--slide-size:20%] md:![--slide-spacing:4rem]",
                        "lg:![--slide-size:15%] lg:![--slide-spacing:4rem]",
                        "xl:![--slide-size:15%] xl:![--slide-spacing:3rem]",
                        "2xl:![--slide-size:10%] 2xl:![--slide-spacing:3rem]"
                    )}
                    itemClassName="w-fit flex justify-center items-center"
                    autoScroll={{ speed: 0.5, stopOnInteraction: false }}
                    slides={logos.map((logo) => {
                        return (
                            <div
                                className={cn(
                                    "relative flex h-[60px] items-center justify-center",
                                    "sm:h-[60px]"
                                )}
                                key={logo.name}
                            >
                                <Image
                                    className="relative"
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={0}
                                    height={100}
                                    sizes="100vw"
                                    style={
                                        logo.square
                                            ? { width: "auto", height: "100%" }
                                            : { width: "100%", height: "auto" }
                                    }
                                />
                            </div>
                        );
                    })}
                />
            </div>
        </Section>
    );
}
