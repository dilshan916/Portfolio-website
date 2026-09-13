"use client";

import { motion } from "framer-motion";
import {
    Settings,
    Ruler,
    Hammer,
    ClipboardList,
    ShieldCheck,
    Cog,
    Box,
    PenTool,
    Anvil,
    Layers,
    Crosshair
} from "lucide-react";

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
    initial: {},
    whileInView: {
        transition: { staggerChildren: 0.1 }
    }
};

const machiningSkills = [
    { name: "Manual Lathe Operations", desc: "Turning, facing, threading & grooving", icon: <Cog className="w-6 h-6 text-amber-400" /> },
    { name: "Milling & Shaping", desc: "Universal milling, gear cutting & shapers", icon: <Hammer className="w-6 h-6 text-amber-400" /> },
    { name: "Precision Drilling", desc: "Pillar/radial drilling & counterboring", icon: <Crosshair className="w-6 h-6 text-amber-400" /> },
    { name: "Precision Measurement", desc: "Micrometers, Vernier Calipers & Dial Gauges", icon: <Ruler className="w-6 h-6 text-amber-400" /> }
];

const productionSkills = [
    { name: "Manufacturing Processes", desc: "Casting, welding & metal forming", icon: <Anvil className="w-6 h-6 text-cyan-400" /> },
    { name: "Material Science", desc: "Metallurgy, heat treatment & properties", icon: <Layers className="w-6 h-6 text-cyan-400" /> },
    { name: "CAD / CAM", desc: "2D/3D modeling using AutoCAD & SolidWorks", icon: <Box className="w-6 h-6 text-cyan-400" /> },
    { name: "Industrial Management", desc: "Production planning & resource allocation", icon: <ClipboardList className="w-6 h-6 text-cyan-400" /> },
    { name: "Quality & Maintenance", desc: "QA/QC standards, 5S & preventive maintenance", icon: <ShieldCheck className="w-6 h-6 text-cyan-400" /> }
];

export default function IndustrialSkills() {
    return (
        <section id="engineering-skills" className="py-32 relative border-t border-dashed border-white/10 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none hidden md:block" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none hidden md:block" />

            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center md:text-left"
                >
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                        <span className="h-[2px] w-12 bg-gradient-to-r from-amber-500 to-cyan-500"></span>
                        <span className="text-gray-300 font-medium tracking-widest text-sm uppercase">Dual-Skillset Advantage</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Engineering & Production</h2>
                    <p className="text-neutral-400 max-w-2xl text-lg mx-auto md:mx-0">
                        Bridging the gap between hands-on precision machining and high-level production management. Certified NVQ Level 4 Machinist & Diploma in Production Technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Category 1: Hands-on Machining */}
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative bg-[#0a0a0a] rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-amber-500/30 transition-colors duration-500"
                    >
                        {/* Hover Gradient Border Effect for Desktop */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none hidden md:block" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20">
                                    <Settings className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Hands-on Machining</h3>
                                    <p className="text-amber-400/80 text-sm font-medium tracking-wide">NVQ Level 4 Certified</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {machiningSkills.map((skill, idx) => (
                                    <motion.div key={idx} variants={fadeIn} className="flex gap-4">
                                        <div className="mt-1 flex-shrink-0 opacity-80">{skill.icon}</div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{skill.name}</h4>
                                            <p className="text-neutral-500 text-sm leading-relaxed">{skill.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Category 2: Production Technology */}
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative bg-[#0a0a0a] rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-cyan-500/30 transition-colors duration-500"
                    >
                        {/* Hover Gradient Border Effect for Desktop */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none hidden md:block" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/20">
                                    <PenTool className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Production Technology</h3>
                                    <p className="text-cyan-400/80 text-sm font-medium tracking-wide">Diploma Program</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {productionSkills.map((skill, idx) => (
                                    <motion.div key={idx} variants={fadeIn} className="flex gap-4">
                                        <div className="mt-1 flex-shrink-0 opacity-80">{skill.icon}</div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{skill.name}</h4>
                                            <p className="text-neutral-500 text-sm leading-relaxed">{skill.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
