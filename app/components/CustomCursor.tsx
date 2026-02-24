"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    const outerConfig = { damping: 30, stiffness: 120, mass: 1 };
    const outerX = useSpring(cursorX, outerConfig);
    const outerY = useSpring(cursorY, outerConfig);

    useEffect(() => {
        const hasPointer = window.matchMedia("(pointer: fine)").matches;
        setIsMobile(!hasPointer);

        if (!hasPointer) return;

        document.body.style.cursor = "none";
        document.documentElement.style.cursor = "none";

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseEnterInteractive = () => setIsHovering(true);
        const handleMouseLeaveInteractive = () => setIsHovering(false);

        window.addEventListener("mousemove", moveCursor);

        const setupListeners = () => {
            const interactiveElements = document.querySelectorAll(
                "a, button, [role='button'], input, textarea, select, .cursor-hover"
            );
            interactiveElements.forEach((el) => {
                el.addEventListener("mouseenter", handleMouseEnterInteractive);
                el.addEventListener("mouseleave", handleMouseLeaveInteractive);
            });
            return interactiveElements;
        };

        let elements = setupListeners();

        const observer = new MutationObserver(() => {
            elements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnterInteractive);
                el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
            });
            elements = setupListeners();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.style.cursor = "";
            document.documentElement.style.cursor = "";
            observer.disconnect();
            elements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnterInteractive);
                el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
            });
        };
    }, [cursorX, cursorY]);

    if (isMobile) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isHovering ? 1.8 : 1,
                }}
                transition={{ duration: 0.15 }}
            >
                <div className="w-3 h-3 bg-white rounded-full" />
            </motion.div>

            <motion.div
                className="fixed top-0 left-0 z-[9998] pointer-events-none"
                style={{
                    x: outerX,
                    y: outerY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isVisible ? 0.6 : 0,
                    scale: isHovering ? 2 : 1,
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="w-10 h-10 rounded-full border border-purple-400/50 bg-purple-500/10 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.3)]" />
            </motion.div>

            <motion.div
                className="fixed top-0 left-0 z-[9997] pointer-events-none"
                style={{
                    x: outerX,
                    y: outerY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isVisible ? 0.15 : 0,
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{ duration: 0.5 }}
            >
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl" />
            </motion.div>
        </>
    );
}
