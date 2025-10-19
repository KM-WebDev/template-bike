import Logo from "./ui/Logo";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa6";
import { NavigationProps, NavigationRoutes } from "./Navigation/Navigation.d";
import { cn } from "@/lib/utils/cn";

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
            <p className="text-center text-[#848484]">
                ©2025 BIKEHUB. Wszystkie prawa zastrzeżone.
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

            <div className="flex gap-2 text-[2rem]">
                <SocialButton link="https://facebook.com">
                    <FaFacebookSquare />
                </SocialButton>
                <SocialButton link="https://instagram.com">
                    <FaInstagramSquare />
                </SocialButton>
                <SocialButton link="https://x.com">
                    <FaSquareXTwitter />
                </SocialButton>
                <SocialButton link="https://linkedin.com">
                    <FaLinkedin />
                </SocialButton>
            </div>
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

interface SocialProps {
    link: string;
    children: React.ReactNode;
}

function SocialButton({ link, children }: SocialProps) {
    return (
        <a target="_blank" href={link}>
            {children}
        </a>
    );
}
