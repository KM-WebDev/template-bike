import { JSX } from "react";
import Link from "next/link";

import styles from "./Navigation.module.scss";

export interface NavigationRoutesEntry {
    name: string;
    link: string;
}

export type NavigationRoutes = NavigationRoutesEntry[];

export interface NavigationProps {
    Logo?: JSX.Element;
    routes: NavigationRoutes;
}

export default function NavigationServer({ Logo, routes }: NavigationProps) {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>{Logo}</div>
            <div className={styles.nav_right}>
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
            </div>
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
            <Link href={entry.link} className={styles.link}>
                {entry.name}
            </Link>
        </li>
    );
}

// NavigationWithControls  'use client' <-- Navigation 'use server'

//  |
//  v

// const ref = useRef()
