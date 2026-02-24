"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionStyle } from "framer-motion";

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
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const mobile = !window.matchMedia("(pointer: fine)").matches;
        setIsMobile(mobile);
    }, []);

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springConfig = { damping: 20, stiffness: 200 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(smoothMouseY, [0, 1], [8, -8]);
    const rotateY = useTransform(smoothMouseX, [0, 1], [-8, 8]);

    const glowX = useTransform(smoothMouseX, [0, 1], [0, 100]);
    const glowY = useTransform(smoothMouseY, [0, 1], [0, 100]);

    const glowBackground = useTransform(
        glowX,
        (xVal) => {
            const yVal = glowY.get();
            return `radial-gradient(circle at ${xVal}% ${yVal}%, ${glowColor}, transparent 60%)`;
        }
    );

    const shineBackground = useTransform(
        glowX,
        (xVal) => {
            const yVal = glowY.get();
            return `radial-gradient(circle at ${xVal}% ${yVal}%, rgba(255,255,255,0.06) 0%, transparent 50%)`;
        }
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || isMobile) return;

        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseEnter = () => {
        if (isMobile) return;
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        if (isMobile) return;
        setIsHovered(false);
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    const cardStyle: MotionStyle = isMobile
        ? {}
        : {
            rotateX: isHovered ? rotateX : 0,
            rotateY: isHovered ? rotateY : 0,
            transformPerspective: 1200,
        };

    const cardContent = (
        <motion.div
            ref={ref}
            className={`relative ${!isMobile ? 'cursor-hover' : ''} ${className}`}
            onMouseMove={!isMobile ? handleMouseMove : undefined}
            onMouseEnter={!isMobile ? handleMouseEnter : undefined}
            onMouseLeave={!isMobile ? handleMouseLeave : undefined}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut" as const,
            }}
            style={cardStyle}
        >
            {!isMobile && (
                <>
                    <motion.div
                        className="absolute -inset-[1px] rounded-2xl sm:rounded-[2rem] z-0 transition-opacity duration-500"
                        style={{
                            background: glowBackground,
                            opacity: isHovered ? 1 : 0,
                        }}
                    />
                    <motion.div
                        className="absolute inset-0 rounded-2xl sm:rounded-[2rem] z-[1] pointer-events-none overflow-hidden"
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
                            style={{
                                background: shineBackground,
                            }}
                        />
                    </motion.div>
                </>
            )}

            <div className="relative z-[2] h-full" style={{ transform: "translateZ(0)" }}>
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
