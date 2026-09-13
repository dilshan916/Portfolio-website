"use client";

import { motion } from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
    href?: string;
    target?: string;
    rel?: string;
    index?: number;
}

export default function TiltCard({
    children,
    className = "",
    glowColor = "rgba(168, 85, 247, 0.4)",
    href,
    target,
    rel,
    index = 0,
}: TiltCardProps) {
    const cardContent = (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
                duration: 0.5,
                delay: Math.min(index * 0.1, 0.3),
                ease: "easeOut",
            }}
            className={`group relative h-full transition-all duration-300 ease-out hover:-translate-y-1.5 ${className}`}
        >
            {/* Subtle glow border effect on hover via CSS */}
            <div
                className="absolute -inset-[1px] rounded-2xl sm:rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${glowColor}, transparent 70%)`
                }}
            />

            <div className="relative z-10 h-full">
                {children}
            </div>
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} target={target} rel={rel} className="block h-full">
                {cardContent}
            </a>
        );
    }

    return cardContent;
}
