import { ReactNode } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import styles from "./Navigation.module.scss";

interface Props {
    Logo: ReactNode;
}

export default function Navigation({ Logo }: Props) {
    return (
        <nav className={styles.nav}>
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
        </nav>
    );
}

// NavigationWithControls  'use client' <-- Navigation 'use server'

//  |
//  v

// const ref = useRef()
