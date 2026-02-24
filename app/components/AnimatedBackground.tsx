"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const orbs = [
    {
        color: "bg-purple-600/15",
        size: "w-[400px] h-[400px] md:w-[700px] md:h-[700px]",
        position: "top-[-15%] left-[-10%]",
        duration: 25,
        delay: 0,
    },
    {
        color: "bg-blue-600/12",
        size: "w-[350px] h-[350px] md:w-[600px] md:h-[600px]",
        position: "bottom-[-10%] right-[-8%]",
        duration: 30,
        delay: 5,
    },
    {
        color: "bg-pink-600/10",
        size: "w-[300px] h-[300px] md:w-[500px] md:h-[500px]",
        position: "top-[40%] right-[-15%]",
        duration: 35,
        delay: 10,
    },
    {
        color: "bg-teal-500/8",
        size: "w-[250px] h-[250px] md:w-[450px] md:h-[450px]",
        position: "bottom-[20%] left-[-12%]",
        duration: 28,
        delay: 8,
    },
    {
        color: "bg-indigo-500/10",
        size: "w-[200px] h-[200px] md:w-[350px] md:h-[350px]",
        position: "top-[15%] left-[50%]",
        duration: 22,
        delay: 3,
    },
];

const mobileOrbs = [orbs[0], orbs[1]];

export default function AnimatedBackground() {
    const [isMobile, setIsMobile] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mobile = !window.matchMedia("(pointer: fine)").matches;
        setIsMobile(mobile);

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setPrefersReducedMotion(reducedMotion);
    }, []);

    const shouldAnimate = !isMobile && !prefersReducedMotion;
    const activeOrbs = isMobile ? mobileOrbs : orbs;

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 hidden md:block bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="absolute inset-0 hidden md:block opacity-[0.015]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }} />

            {activeOrbs.map((orb, index) => (
                shouldAnimate ? (
                    <motion.div
                        key={index}
                        className={`absolute ${orb.size} ${orb.color} ${orb.position} rounded-full blur-[120px] mix-blend-screen will-change-transform`}
                        animate={{
                            x: [0, 80, -40, 60, 0],
                            y: [0, -60, 40, -30, 0],
                            scale: [1, 1.15, 0.9, 1.1, 1],
                            opacity: [0.5, 0.8, 0.6, 0.9, 0.5],
                        }}
                        transition={{
                            duration: orb.duration,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            delay: orb.delay,
                        }}
                    />
                ) : (
                    <div
                        key={index}
                        className={`absolute ${orb.size} ${orb.color} ${orb.position} rounded-full opacity-30`}
                    />
                )
            ))}

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_75%)]" />
        </div>
    );
}
