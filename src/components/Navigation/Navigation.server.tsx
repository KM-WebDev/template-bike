import NavLink from "./NavLink";
import { cn } from "@/lib/utils/cn";
import Logo from "../Logo";

export interface NavigationRoutesEntry {
    name: string;
    link: string;
}

export type NavigationRoutes = NavigationRoutesEntry[];

export interface NavigationProps {
    routes: NavigationRoutes;
}

export default function NavigationServer({ routes }: NavigationProps) {
    return (
        <nav
            className={cn(
                "z-50 flex h-full w-full items-center justify-center px-2 py-4"
            )}
        >
            <NavLogo />
            <div
                className={cn(
                    "flex h-full flex-col justify-center gap-0.5 overflow-hidden rounded-full bg-black/40 px-4 py-4 shadow-lg backdrop-blur"
                )}
            >
                <ul className={cn("flex list-none gap-2")}>
                    {generateNavList(routes)}
                </ul>
            </div>
            {/* <div className={styles.nav_top}>
                <div className={styles.logo}>{Logo}</div>
                <div className={styles.main}>
                    <a className={styles.mail} href="mailto: mail@mail.com">
                        <IoMdMail />
                        <span>mail@mail.com</span>
                    </a>
                    <a className={styles.tel} href="tel: +48666666666">
                        <FaPhoneAlt />
                        <span>666 666 666</span>
                    </a>
                </div>
            </div>ho
            <div className={styles.nav_bottom}>
                <ul className={styles.list}>{generateNavList(routes)}</ul>
            </div> */}
        </nav>
    );
}

function NavLogo() {
    return (
        <div
            className={cn(
                "absolute top-1 left-1 rounded-md bg-black/40 p-1 backdrop-blur",
                "group-data-[scrolled=true]/nav:bg-black group-data-[scrolled=true]/nav:shadow-xl"
            )}
        >
            <Logo />
        </div>
    );
}

function generateNavList(routes: NavigationRoutes) {
    return routes.map((entry) => (
        <NavigationItem key={entry.name} entry={entry} />
    ));
}

function NavigationItem({ entry }: { entry: NavigationRoutesEntry }) {
    return (
        <li key={entry.name}>
            <NavLink href={entry.link} name={entry.name} />
        </li>
    );
}
