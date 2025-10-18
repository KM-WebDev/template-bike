import NavLink from "./NavLink";
import { cn } from "@/lib/utils/cn";
import Logo from "../Logo";
import MobileNavigation from "./MobileNavigation";
import { NavigationProps, NavigationRoutes } from "./Navigation.d";
import { DesktopNavigation } from "./DesktopNavigation";

export default function NavigationServer({ routes }: NavigationProps) {
    const navList = generateNavList(routes);

    return (
        <nav
            className={cn(
                "z-50 flex h-full w-full items-center justify-center px-2 py-4"
            )}
        >
            <NavLogo />
            <DesktopNavigation className="hidden md:block">
                <ul className={cn("flex list-none gap-2")}>{navList}</ul>
            </DesktopNavigation>
            <MobileNavigation className="block md:hidden">
                <ul className={cn("flex list-none gap-2")}>{navList}</ul>
            </MobileNavigation>
        </nav>
    );
}

function NavLogo() {
    return (
        <div
            className={cn(
                "absolute top-[50%] left-5 -translate-y-[50%] rounded-md bg-black/40 p-1 backdrop-blur",
                "group-data-[scrolled=true]/nav:bg-black group-data-[scrolled=true]/nav:shadow-xl"
            )}
        >
            <Logo />
        </div>
    );
}

function generateNavList(routes: NavigationRoutes) {
    return routes.map((entry) => (
        <li key={entry.name}>
            <NavLink
                href={entry.link}
                name={entry.name}
                className={cn("z-10 rounded-full px-4 py-2 text-white")}
                activeClassName="bg-rose-800"
            />
        </li>
    ));
}
