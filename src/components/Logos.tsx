import Image from "next/image";

const logos = [
    { name: "cannondale", src: "/logos/cannondale.png", alt: "" },
    { name: "creme", src: "/logos/creme.png", alt: "" },
    { name: "gazelle", src: "/logos/gazelle.svg", alt: "" },
    { name: "giant", src: "/logos/giant.png", alt: "" },
    { name: "kross", src: "/logos/kross.png", alt: "" },
    { name: "ns", src: "/logos/ns.png", alt: "" },
    { name: "octane", src: "/logos/octane.jpg", alt: "" },
    { name: "romet", src: "/logos/romet.webp", alt: "" },
    { name: "rondo", src: "/logos/rondo.png", alt: "" },
    { name: "specialized", src: "/logos/specialized.png", alt: "" },
    { name: "trek", src: "/logos/trek.png", alt: "" },
    { name: "unibike", src: "/logos/unibike.svg", alt: "" },
    { name: "woom", src: "/logos/woom.png", alt: "" },
];

export default function Logos() {
    return (
        <div className="flex h-[100px] w-fit gap-[5rem] bg-white">
            {logos.map((logo) => {
                return (
                    <div className="relative w-fit" key={logo.name}>
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={0}
                            height={100}
                            sizes="100vw"
                            style={{ width: "auto", height: "100px" }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
