"use client";

import Button from "../Button";

export default function HeroButtons() {
    return (
        <>
            <Button type="transparent" onClick={() => console.log("elo")}>
                Zobacz więcej
            </Button>
            <Button onClick={() => console.log("elo")}>Zadzwoń</Button>
        </>
    );
}
