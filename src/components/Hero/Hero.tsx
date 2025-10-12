import HeroClient from "./Hero.client";
import HeroServer from "./Hero.server";

export default function Hero() {
    return (
        <HeroClient>
            <HeroServer />
        </HeroClient>
    );
}
