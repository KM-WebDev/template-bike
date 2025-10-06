'use client'

import { useContext, useEffect } from "react";
import { GlobalControlsContext } from "./GlobalControls";
import Hero from "./Hero";

export default function HeroWithControls() {
    const context = useContext(GlobalControlsContext)
    if (!context) throw new Error("...") // learnt from the best

    // useEffect(() => {
    //     const {navRef, heroRef} = context;
    //     console.log(navRef.current, heroRef.current);
    // }, [])
    return <Hero ref={context.heroRef}/>
}