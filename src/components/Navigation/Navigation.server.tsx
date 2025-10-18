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

// function NavLogo() {
//     return (
//         <div
//             className={cn(
//                 "absolute top-[50%] left-5 -translate-y-[50%] rounded-md bg-black/40 p-1 backdrop-blur",
//                 "group-data-[scrolled=true]/nav:bg-black group-data-[scrolled=true]/nav:shadow-xl"
//             )}
//         >
//             <Logo />
//         </div>
//     );
// }
