"use client";

import Image from "next/image";

import styles from "./About.module.scss";
import * as motion from "motion/react-client";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import MotionScroll from "./MotionScroll";
import MotionScrollElement from "./MotionScrollElement";
import AboutFragment from "./AboutFragment";

export default function About() {
    return (
        <MotionScroll className="h-full w-full">
            <div className={styles.container}>
                <AboutFragment
                    id="1"
                    title="Pasja, która napędza"
                    mainImage={{ src: "/about-1-bikes.jpg", alt: "" }}
                >
                    Wierzymy, że rower to nie tylko środek transportu – to styl
                    życia, sposób na zdrowie, wolność i troskę o środowisko.
                    Naszą misją jest wspieranie każdego rowerzysty – od amatora
                    po zawodowca – w bezpiecznej i komfortowej jeździe.
                </AboutFragment>
                <AboutFragment
                    id="2"
                    title="Rzetelność i precyzja"
                    mainImage={{ src: "/about-2-wheel.jpg", alt: "" }}
                >
                    Dbamy o każdy detal, bo wiemy, jak ważny jest sprawny i
                    niezawodny sprzęt. W naszym serwisie stawiamy na rzetelność,
                    doświadczenie i uczciwość. Pracujemy na wysokiej jakości
                    częściach i narzędziach, a każde zlecenie traktujemy
                    indywidualnie – jakbyśmy naprawiali własny rower.
                </AboutFragment>
                <AboutFragment
                    id="3"
                    title="Ludzie i relacje"
                    mainImage={{ src: "/about-3-smile.jpg", alt: "" }}
                >
                    Chcemy tworzyć miejsce, do którego chętnie się wraca – nie
                    tylko po naprawę, ale też po dobrą radę i pozytywną energię.
                    Budujemy społeczność pasjonatów dwóch kółek, którzy mogą na
                    nas liczyć w każdej sytuacji.
                </AboutFragment>
            </div>
        </MotionScroll>
    );
}
