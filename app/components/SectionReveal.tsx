"use client";

import { motion } from "framer-motion";

interface SectionRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

const directionOffset = {
    up: { x: 0, y: 60 },
    down: { x: 0, y: -60 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
};

export default function SectionReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: SectionRevealProps) {
    const offset = directionOffset[direction];

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: offset.x,
                y: offset.y,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.9,
                delay,
                ease: "easeOut" as const,
            }}
            className={`will-change-transform ${className}`}
            style={{ transform: "translate3d(0,0,0)" }}
        >
            {children}
        </motion.div>
    );
}
