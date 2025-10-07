import HeroClient from "./Hero.client";
import HeroServer from "./Hero.server";

export default function HeroWithControls() {
    console.log(
        "Hero rendered on",
        typeof window === "undefined" ? "server" : "client"
    );

    return (
        <HeroClient>
            <HeroServer />
        </HeroClient>
    );
}
