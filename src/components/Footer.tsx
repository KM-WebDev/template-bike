import Logo from "./ui/Logo";


import { NavigationProps, NavigationRoutes } from "./Navigation/Navigation.d";
import { cn } from "@/lib/utils/cn";
import Socials from "./ui/Socials";

export default function Footer({ routes }: NavigationProps) {
    return (
        <div className="w-full bg-[#110011] text-white">
            <div
                className={cn(
                    "flex items-center justify-around pt-10 pb-10",
                    "max-lg:flex-col max-lg:gap-10"
                )}
            >
                <InfoSection />
                <NavigationSection routes={routes} />
                <SocialSection />
            </div>
            <p className="text-center text-[#848484] pb-8">
                ©{new Date().getFullYear()} BIKEHUB. Wszystkie prawa zastrzeżone.
            </p>
        </div>
    );
}

function InfoSection() {
    return (
        <div className={cn("flex flex-col gap-5", "max-lg:items-center")}>
            <Logo />
            <div className="text-[#848484]">
                <p>ul. Słoneczna 10a</p>
                <p>12-345 Kraków</p>
            </div>
            <div
                className={cn(
                    "flex gap-15",
                    "max-xs:gap-5 max-xs:flex-col",
                    "max-lg:items-center max-lg:gap-10"
                )}
            >
                <ContactInfo title="Zadzwoń do nas:" info="+48 123 123 123" />
                <ContactInfo
                    title="Lub do nas naspisz:"
                    info="support@bike.hub"
                />
            </div>
        </div>
    );
}

function NavigationSection({ routes }: NavigationProps) {
    return (
        <div
            className={cn(
                "flex gap-5",
                "lg:flex-row",
                "max-lg:flex-row",
                "max-xs:flex-col"
            )}
        >
            <NavigationList title="Szybka nawigacja:" routes={routes} />
            <NavigationList
                title="Legal:"
                routes={[
                    { name: "Polityka Prywatności", link: "/pp" },
                    { name: "Terms of Service", link: "/tos" },
                ]}
            />
        </div>
    );
}

function SocialSection() {
    return (
        <div className="flex flex-col items-center gap-4">
            <p className="text-[#848484]">Znajdziesz nas również tutaj:</p>

            <Socials />
        </div>
    );
}

interface ContactInfoProps {
    title: string;
    info: string;
}

function ContactInfo({ title, info }: ContactInfoProps) {
    return (
        <div>
            <p className="text-[#848484]">{title}</p>
            <p>{info}</p>
        </div>
    );
}

interface NavigationListProps {
    title: string;
    routes: NavigationRoutes;
}

function NavigationList({ title, routes }: NavigationListProps) {
    return (
        <div className="flex flex-col gap-2">
            <p className={cn("text-[#848484]", "max-lg:text-center")}>
                {title}
            </p>
            <ul className={cn("flex flex-col gap-1", "max-lg:text-center")}>
                {routes.map((route, i) => {
                    return (
                        <li key={i}>
                            <a href={route.link}>{route.name}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}