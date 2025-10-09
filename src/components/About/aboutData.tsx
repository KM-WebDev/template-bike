export interface Fragment {
    title: string;
    text: string;
    images: ImageObj[];
}

export const fragments: Fragment[] = [
    {
        title: "Pasja, która napędza",
        images: [
            { src: "/about-1-bikes.jpg", alt: "" },
            { src: "/about-1-city.jpg", alt: "" },
            { src: "/about-1-forest.jpg", alt: "" },
        ],
        text: "Wierzymy, że rower to nie tylko środek transportu – to styl życia, sposób na zdrowie, wolność i troskę o środowisko. Naszą misją jest wspieranie każdego rowerzysty – od amatora po zawodowca – w bezpiecznej i komfortowej jeździe.",
    },
    {
        title: "Rzetelność i precyzja",
        images: [{ src: "/about-2-wheel.jpg", alt: "" }],
        text: "Dbamy o każdy detal, bo wiemy, jak ważny jest sprawny i niezawodny sprzęt. W naszym serwisie stawiamy na rzetelność, doświadczenie i uczciwość. Pracujemy na wysokiej jakości częściach i narzędziach, a każde zlecenie traktujemy indywidualnie – jakbyśmy naprawiali własny rower.",
    },
    {
        title: "Ludzie i relacje",
        images: [{ src: "/about-3-smile.jpg", alt: "" }],
        text: "Chcemy tworzyć miejsce, do którego chętnie się wraca – nie tylko po naprawę, ale też po dobrą radę i pozytywną energię. Budujemy społeczność pasjonatów dwóch kółek, którzy mogą na nas liczyć w każdej sytuacji.",
    },
];
