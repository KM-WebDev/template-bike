import { JSX } from "react";
import { ReactNode } from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import styles from "./Navigation.module.scss";
import { HTMLRef } from "@/types/global";

export interface NavigationRoutesEntry {
    name: string;
    link: string;
}

export type NavigationRoutes = NavigationRoutesEntry[];

interface NavigationProps {
    Logo?: JSX.Element;
    routes: NavigationRoutes;
	ref: HTMLRef
}

export default function Navigation({ Logo, routes, ref }: NavigationProps) {
    return (
        <nav className={styles.nav} ref={ref}>
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
