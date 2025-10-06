'use client'

import { useContext, useEffect } from "react";
import { GlobalControlsContext } from "./GlobalControls";
import Navigation from "./Navigation";

import styles from "./Navigation.module.scss"

let hasIntersected = false;

export default function NavigationWithControls({ Logo, routes }) {
    const context = useContext(GlobalControlsContext)
    if (!context) throw new Error("...") // learnt from the best

    useEffect(() => {
        const {navRef, heroRef} = context;
        console.log(navRef.current, heroRef.current);

        const observer = new IntersectionObserver(() => {
            if (hasIntersected) {
                navRef.current?.classList.toggle(styles.navActive)
            } else {
                hasIntersected = true;
            }
        }, {
            rootMargin: "0px",
            threshold: 0.1
        })

        if (heroRef.current) {
            observer.observe(heroRef.current)
        }

        return () => {
            if (heroRef.current) observer.unobserve(heroRef.current)
        }
    }, [])

    return <Navigation Logo={Logo} routes={routes} ref={context.navRef}/>
}