"use client";

import Button from "../ui/Button";

export default function HeroButtons() {
    return (
        <>
            <Button
                type="transparent"
                className="w-fit"
                onClick={() => console.log("elo")}
            >
                Zobacz więcej
            </Button>
            <Button onClick={() => console.log("elo")} className="w-fit">
                Zadzwoń
            </Button>
        </>
    );
}
