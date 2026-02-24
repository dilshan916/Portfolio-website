"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const techItems = [
    { name: "Next.js", icon: "⚡" },
    { name: "React Native", icon: "📱" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Figma", icon: "🎯" },
    { name: "UI/UX Design", icon: "✨" },
    { name: "Sanity CMS", icon: "📝" },
    { name: "Video Editing", icon: "🎬" },
    { name: "Premiere Pro", icon: "🎥" },
];

const marqueeItems = [...techItems, ...techItems];

export default function TechStack() {
    return (
        <section className="py-10 sm:py-14 md:py-20 relative overflow-hidden border-t border-b border-white/5">
            <SectionReveal>
                <div className="text-center mb-8 sm:mb-10 md:mb-14">
                    <p className="text-neutral-500 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase">Tech I work with</p>
                </div>
            </SectionReveal>

            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-4 sm:gap-6 md:gap-8 w-max will-change-transform"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    style={{ transform: "translate3d(0,0,0)" }}
                >
                    {marqueeItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full border border-white/10 bg-white/[0.03] md:backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition-colors duration-300 group cursor-hover whitespace-nowrap select-none"
                        >
                            <span className="text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                            <span className="text-neutral-300 group-hover:text-white text-xs sm:text-sm md:text-base font-medium transition-colors duration-300">{item.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
