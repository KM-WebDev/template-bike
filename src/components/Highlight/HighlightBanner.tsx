"use client";

import Banner from "../Banner";
import { motion } from "motion/react";

export default function HighlightBanner() {
    return (
        <Banner>
            <motion.div>
                <Banner.Text
                    text="BIKEHUB"
                    className="text-[5rem] md:text-[10rem] lg:text-[15rem]"
                />
            </motion.div>
        </Banner>
    );
}
