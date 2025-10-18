import { cn } from "@/lib/utils/cn";
import MobileNavigation from "./MobileNavigation";
import { NavigationProps } from "./Navigation.d";
import { DesktopNavigation } from "./DesktopNavigation";

export default function NavigationServer({ routes }: NavigationProps) {
    return (
        <nav className={cn("z-50")}>
            <DesktopNavigation routes={routes} className="hidden md:flex" />
            <MobileNavigation routes={routes} className="block md:hidden" />
        </nav>
    );
}

