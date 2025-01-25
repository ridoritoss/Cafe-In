"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react";

const MultiLayerParallax = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <div
            ref={ref}
            className="w-full h-screen overflow-hidden relative grid place-items-center"
        >
            <motion.h1
                style={{ y: textY }}
                className="font-extrabold mb-40 text-end text-white text-5xl md:text-9xl z-10">
                <span className="text-transparent">....</span>WELCOME TO CAFE-IN
            </motion.h1>

            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url(/assets/Parallax/coffee-bg.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />

            <motion.div
                className="absolute inset-0 z-20"
                style={{
                    backgroundImage: "url(/assets/Parallax/Bottom-image.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />
        </div>
    )
}

export default MultiLayerParallax;