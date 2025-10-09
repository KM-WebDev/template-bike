"use client";

import Image from "next/image";

import styles from "./About.module.scss";
import * as motion from "motion/react-client";

import AboutFragment, { Fragment } from "./AboutFragment";
import { ImageObj } from "@/types/global";
import { MotionStyle, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import VerticalProgressBar from "../VerticalProgressBar";

const fragments: Fragment[] = [
    {
        id: "1",
        title: "Pasja, która napędza",
        mainImage: { src: "/about-1-bikes.jpg", alt: "" },
        subImages: [
            { src: "/about-1-city.jpg", alt: "" },
            { src: "/about-1-forest.jpg", alt: "" },
        ],
        text: "Wierzymy, że rower to nie tylko środek transportu – to styl życia, sposób na zdrowie, wolność i troskę o środowisko. Naszą misją jest wspieranie każdego rowerzysty – od amatora po zawodowca – w bezpiecznej i komfortowej jeździe.",
    },
    {
        id: "2",
        title: "Rzetelność i precyzja",
        mainImage: { src: "/about-2-wheel.jpg", alt: "" },
        text: "Dbamy o każdy detal, bo wiemy, jak ważny jest sprawny i niezawodny sprzęt. W naszym serwisie stawiamy na rzetelność, doświadczenie i uczciwość. Pracujemy na wysokiej jakości częściach i narzędziach, a każde zlecenie traktujemy indywidualnie – jakbyśmy naprawiali własny rower.",
    },
    {
        id: "3",
        title: "Ludzie i relacje",
        mainImage: { src: "/about-3-smile.jpg", alt: "" },
        text: "Chcemy tworzyć miejsce, do którego chętnie się wraca – nie tylko po naprawę, ale też po dobrą radę i pozytywną energię. Budujemy społeczność pasjonatów dwóch kółek, którzy mogą na nas liczyć w każdej sytuacji.",
    },
];

export default function About() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {fragments.map((fragment, index) => {
                    const start = index / fragments.length;
                    const end = (index + 1) / fragments.length;

                    return (
                        <AboutFragment
                            index={index}
                            start={start}
                            end={end}
                            key={fragment.id}
                            id={fragment.id}
                            fragment={fragment}
                        />
                    );
                })}
            </div>
        </section>
    );
}
