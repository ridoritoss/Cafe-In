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
                className="font-extrabold text-end mt-40 text-white text-5xl md:text-9xl z-10">
                WELCOME TO CAFE-IN
            </motion.h1>

            <motion.h3 className="text-white text-2xl md:text-4xl z-10">
                This is our journey to the best coffee in the world.
            </motion.h3>

            <motion.p className="max-w-lg space-y-4 grid-cols-2 p-4 mx-auto text-white z-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore porro,
                commodi molestiae eveniet ratione? Temporibus, optio eaque accusamus facilis minus atque quas id,
                nam blanditiis eligendi laudantium aperiam possimus,
                voluptatem expedita eius ratione voluptate repudiandae exercitationem autem sint porro.
            </motion.p>
            <motion.p className="max-w-lg space-y-4 grid-cols-2 p-4 mx-auto text-white z-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore porro,
                commodi molestiae eveniet ratione? Temporibus, optio eaque accusamus facilis minus atque quas id,
                nam blanditiis eligendi laudantium aperiam possimus,
                voluptatem expedita eius ratione voluptate repudiandae exercitationem autem sint porro.
            </motion.p>
            <motion.p className="max-w-lg space-y-4 grid-cols-2 p-4 mx-auto text-white z-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore porro,
                commodi molestiae eveniet ratione? Temporibus, optio eaque accusamus facilis minus atque quas id,
                nam blanditiis eligendi laudantium aperiam possimus,
                voluptatem expedita eius ratione voluptate repudiandae exercitationem autem sint porro.
            </motion.p>

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