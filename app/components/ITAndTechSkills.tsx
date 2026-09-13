"use client";

import { motion } from "framer-motion";
import {
    Cpu,
    Wrench,
    CircuitBoard,
    MonitorSmartphone,
    Settings,
    Terminal
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

const hardwareSkills = [
    { name: "PC Assembling", desc: "Custom building and upgrading workstation hardware", icon: <Cpu className="w-6 h-6 text-emerald-400" /> },
    { name: "Hardware Troubleshooting", desc: "Diagnosing and repairing component-level hardware failures", icon: <Wrench className="w-6 h-6 text-emerald-400" /> },
    { name: "Arduino & Electronics", desc: "Prototyping, sensor integration, and basic electronic circuitry", icon: <CircuitBoard className="w-6 h-6 text-emerald-400" /> }
];

const softwareSkills = [
    { name: "OS Troubleshooting", desc: "Resolving complex Operating System issues (Windows/Linux)", icon: <Terminal className="w-6 h-6 text-violet-400" /> },
    { name: "System Optimization", desc: "Improving software performance, resource management, and debloating", icon: <Settings className="w-6 h-6 text-violet-400" /> },
    { name: "Software Configuration", desc: "Installing, testing, and managing specialized technical software environments", icon: <MonitorSmartphone className="w-6 h-6 text-violet-400" /> }
];

export default function ITAndTechSkills() {
    return (
        <section id="it-tech-skills" className="pb-32 pt-10 relative overflow-hidden">
            {/* Background Glows (Optimized Radial Gradients) */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] rounded-full pointer-events-none hidden md:block" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)] rounded-full pointer-events-none hidden md:block" />

            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center md:text-left"
                >
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                        <span className="h-[2px] w-12 bg-gradient-to-r from-emerald-500 to-violet-500"></span>
                        <span className="text-gray-300 font-medium tracking-widest text-sm uppercase">IT & Systems Infrastructure</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Hardware & Software Diagnostics</h2>
                    <p className="text-neutral-400 max-w-2xl text-lg mx-auto md:mx-0">
                        In-depth expertise in assembling, configuring, and optimizing high-performance workstations and complex operating environments.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Category 1: Hardware & Electronics */}
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative bg-[#0a0a0a] rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-emerald-500/30 transition-colors duration-500"
                    >
                        {/* Hover Gradient Border Effect for Desktop */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none hidden md:block" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
                                    <Cpu className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Hardware & Electronics</h3>
                                    <p className="text-emerald-400/80 text-sm font-medium tracking-wide">Assembly & Repair</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {hardwareSkills.map((skill, idx) => (
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

                    {/* Category 2: Software & Systems */}
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative bg-[#0a0a0a] rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-violet-500/30 transition-colors duration-500"
                    >
                        {/* Hover Gradient Border Effect for Desktop */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none hidden md:block" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-4 rounded-2xl bg-violet-500/10 text-violet-400 ring-1 ring-violet-500/20">
                                    <MonitorSmartphone className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Software & Systems</h3>
                                    <p className="text-violet-400/80 text-sm font-medium tracking-wide">Troubleshooting & Config</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {softwareSkills.map((skill, idx) => (
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
