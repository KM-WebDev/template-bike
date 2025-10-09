import { JSX } from "react";
import Link from "next/link";

import styles from "./Navigation.module.scss";
import NavLink from "./NavLink";

export interface NavigationRoutesEntry {
    name: string;
    link: string;
}

export type NavigationRoutes = NavigationRoutesEntry[];

export interface NavigationProps {
    Logo?: JSX.Element;
    routes: NavigationRoutes;
    type?: "default" | "center";
}

const navigationVariants = {
    default: styles.navDefault,
    center: styles.navCenter,
};

export default function NavigationServer({
    Logo,
    routes,
    type = "default",
}: NavigationProps) {
    return (
        <nav className={`${styles.nav} ${navigationVariants[type]}`}>
            <div className={styles.logo}>{Logo}</div>
            <div className={styles.main}>
                <ul className={styles.list}>{generateNavList(routes)}</ul>
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

function generateNavList(routes: NavigationRoutes) {
    return routes.map((entry) => (
        <NavigationItem key={entry.name} entry={entry} />
    ));
}

function NavigationItem({ entry }: { entry: NavigationRoutesEntry }) {
    return (
        <li key={entry.name} className={styles.item}>
            <NavLink href={entry.link} name={entry.name} />
        </li>
    );
}
