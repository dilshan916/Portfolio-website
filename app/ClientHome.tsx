"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    ArrowDownCircle,
    Github,
    Linkedin,
    Mail,
    Facebook,
    Download,
    Smartphone,
    Video,
    PenTool,
    Code2,
    Cpu,
    MonitorPlay,
    Phone,
    ExternalLink
} from "lucide-react";
import CustomCursor from "./components/CustomCursor";
import AnimatedBackground from "./components/AnimatedBackground";
import TiltCard from "./components/TiltCard";
import SectionReveal from "./components/SectionReveal";
import TechStack from "./components/TechStack";
import ContactForm from "./components/ContactForm";

// Freelancer SVG Component
const FreelancerIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2L2 7l10 5 10-5-10-5Z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
    </svg>
)

// Fiverr SVG Component
const FiverrIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100" className={className}>
        <path fill="currentColor" d="M85,76.5h-10.4V43.8c0-5-3.3-6.5-5.9-6.5c-3.9,0-7.2,3-7.2,8.5v30.7H51.2V43.8c0-5-3.3-6.5-5.9-6.5c-3.9,0-7.2,3-7.2,8.5v30.7H27.7V17c0-2.6,2.6-4.9,5.2-4.9h26.4v13.4c2.6-3.6,7.2-6.2,12.7-6.2c4.9,0,9.1,2.3,11.4,6.2C85.7,21.9,90.2,19.2,95.1,19.2c7.8,0,13.7,5.5,13.7,16.6v40.7H98.5V40.5c0-4.2-2-5.5-4.2-5.5c-2.9,0-5.5,2.6-5.5,6.5V76.5zM17.2,29.9c0-4.5-3.6-8.1-8.1-8.1S1,25.4,1,29.9s3.6,8.1,8.1,8.1S17.2,34.4,17.2,29.9z" transform="translate(-1, 8) scale(0.9)" />
        <circle fill="#1dbf73" cx="80" cy="18" r="10" />
    </svg>
)

// Enhanced Animation Variants
const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

const fadeInUpSpring = {
    initial: { opacity: 0, y: 40 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" as const }
    },
};

const hoverScale = {
    scale: 1.05,
    transition: { type: "spring" as const, stiffness: 400, damping: 10 }
};

const colorThemes = [
    {
        gradient: "from-purple-500 to-indigo-500",
        glowColor: "rgba(168, 85, 247, 0.5)",
        accentText: "text-purple-300",
    },
    {
        gradient: "from-blue-500 to-cyan-500",
        glowColor: "rgba(59, 130, 246, 0.5)",
        accentText: "text-blue-300",
    },
    {
        gradient: "from-emerald-500 to-teal-500",
        glowColor: "rgba(16, 185, 129, 0.5)",
        accentText: "text-emerald-300",
    },
    {
        gradient: "from-pink-500 to-rose-500",
        glowColor: "rgba(236, 72, 153, 0.5)",
        accentText: "text-pink-300",
    },
    {
        gradient: "from-amber-500 to-orange-500",
        glowColor: "rgba(245, 158, 11, 0.5)",
        accentText: "text-amber-300",
    }
];

// Magnetic social link component
function MagneticLink({ children, href, target, rel, className, hoverColor }: {
    children: React.ReactNode;
    href: string;
    target?: string;
    rel?: string;
    className?: string;
    hoverColor: string;
}) {
    return (
        <motion.a
            href={href}
            target={target}
            rel={rel}
            className={`relative p-3 rounded-2xl transition-colors hover:bg-white/5 ${className}`}
            whileHover={{ y: -6, scale: 1.15, color: hoverColor }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
            {children}
        </motion.a>
    );
}

export default function ClientHome({ projects, socialLinks }: { projects: any[], socialLinks?: any }) {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Parallax for hero text
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const skills = [
        { name: "Adobe Premiere Pro", icon: <MonitorPlay className="w-5 h-5 sm:w-6 sm:h-6" />, category: "Video" },
        { name: "After Effects", icon: <Video className="w-5 h-5 sm:w-6 sm:h-6" />, category: "Video" },
        { name: "Graphic Design", icon: <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />, category: "Design" },
        { name: "React Native", icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />, category: "Dev" },
        { name: "Python", icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />, category: "Dev" },
        { name: "AI Content Creation", icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />, category: "AI" },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-pink-500/30 overflow-x-hidden font-sans w-full max-w-full">

            {/* Custom Cursor */}
            <CustomCursor />

            {/* Animated Mesh Background */}
            <AnimatedBackground />

            <main className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">

                {/* Navbar */}
                <header className="flex justify-between items-center py-5 md:py-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-xl sm:text-2xl font-bold tracking-tight"
                    >
                        dilshan<span className="text-pink-500">.creative</span>
                    </motion.div>
                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        href="#contact"
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-sm font-medium backdrop-blur-md group"
                    >
                        <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        <span>Get in touch</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </motion.a>
                </header>

                {/* Hero Section — with parallax */}
                <section ref={heroRef} className="min-h-[85vh] flex flex-col justify-center items-start pt-6 sm:pt-10 pb-16 sm:pb-24 md:pb-32 relative">
                    <motion.div
                        style={{ y: heroY, opacity: heroOpacity }}
                        className="max-w-5xl"
                    >
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUpSpring} className="flex items-center gap-3 mb-4 sm:mb-6 md:mb-8">
                                <span className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-purple-500 to-pink-500"></span>
                                <span className="text-gray-300 font-medium tracking-widest text-xs sm:text-sm uppercase">Creative + Tech</span>
                            </motion.div>

                            <motion.h1 variants={fadeInUpSpring} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-5 sm:mb-6 md:mb-8 tracking-tight">
                                I build <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text inline-block animate-gradient-shift bg-[length:200%_auto]">digital</span> <br />
                                <span className="relative">
                                    experiences.
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-purple-500/50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7535 2.16909 51.5273 2.05929 74.2003 4.97624C83.2721 6.14328 100.22 8.7849 101 9C104.992 7.74971 123.011 3.52554 133 3.00002C150.315 2.08888 172.937 4.90806 181 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                                </span>
                            </motion.h1>

                            <motion.p variants={fadeInUpSpring} className="text-base sm:text-lg md:text-2xl text-neutral-400 max-w-3xl leading-relaxed mb-8 sm:mb-10 md:mb-12">
                                Hi, I&apos;m Dilshan. A Multi-Disciplinary Professional blending creative vision with technical execution.
                                Specializing in <span className="text-white font-semibold decoration-purple-500/50 underline underline-offset-4">Video Editing</span>, <span className="text-white font-semibold decoration-pink-500/50 underline underline-offset-4">UI/UX Design</span>, and <span className="text-white font-semibold decoration-blue-500/50 underline underline-offset-4">Mobile App Development</span>.
                            </motion.p>

                            <motion.div variants={fadeInUpSpring} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 w-full sm:w-auto">
                                <motion.a
                                    href="/dilshan_cv.pdf?v=updated"
                                    download
                                    whileHover={hoverScale}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 overflow-hidden w-full sm:w-auto cursor-hover"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <span className="relative flex items-center gap-2">
                                        Download CV <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                                    </span>
                                </motion.a>

                                <motion.a
                                    href="#projects"
                                    whileHover={hoverScale}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 hover:bg-white/5 hover:border-white/40 transition-colors font-medium text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 md:backdrop-blur-sm w-full sm:w-auto cursor-hover"
                                >
                                    View Projects
                                    <ArrowDownCircle className="w-5 h-5" />
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                    >
                        <span className="text-neutral-500 text-xs tracking-widest uppercase">Scroll</span>
                        <motion.div
                            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
                            animate={{ opacity: [0.3, 0.7, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <motion.div
                                className="w-1 h-1.5 bg-white/60 rounded-full"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </motion.div>
                </section>

                {/* Tech Stack Marquee */}
                <TechStack />

                {/* Skills Section */}
                <section id="skills" className="py-16 sm:py-20 md:py-32 relative">
                    <SectionReveal>
                        <div className="mb-10 md:mb-16 text-center md:text-left">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Core Skills</h2>
                            <p className="text-neutral-400 max-w-2xl text-base md:text-lg mx-auto md:mx-0">Technologies and tools I use to bring ideas to life, from code to content.</p>
                        </div>
                    </SectionReveal>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUpSpring}
                                whileHover={{
                                    y: -8,
                                    scale: 1.04,
                                    boxShadow: "0 20px 40px -15px rgba(168, 85, 247, 0.15)",
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="glass-card p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 text-center group hover:bg-white/[0.06] transition-colors duration-500 border border-white/5 hover:border-white/15 cursor-hover"
                            >
                                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-colors duration-500 ring-1 ring-white/10 group-hover:ring-purple-500/30">
                                    {skill.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-200 text-xs sm:text-sm md:text-base group-hover:text-white transition-colors">{skill.name}</h3>
                                    <p className="text-[10px] sm:text-xs text-neutral-500 mt-1 sm:mt-2 font-medium uppercase tracking-widest">{skill.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-16 sm:py-20 md:py-32 border-t border-dashed border-white/10">
                    <SectionReveal>
                        <div className="mb-10 sm:mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-6">Featured Work</h2>
                                <p className="text-neutral-400 text-base md:text-lg">A selection of my recent projects.</p>
                            </div>
                        </div>
                    </SectionReveal>

                    {projects && projects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                            {projects.map((project, index) => {
                                const theme = colorThemes[index % colorThemes.length];
                                const imageUrl = project.imageUrl;

                                return (
                                    <TiltCard
                                        key={index}
                                        href={project.link || "#"}
                                        target={project.link ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        glowColor={theme.glowColor}
                                        index={index}
                                        className="h-full"
                                    >
                                        <div className="group flex flex-col h-full rounded-2xl sm:rounded-[2rem] overflow-hidden bg-black/50 md:backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors duration-500">
                                            {/* 16:9 Image Container */}
                                            <div className="relative w-full aspect-video overflow-hidden bg-gray-900/80 border-b border-white/5">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-10 group-hover:opacity-30 transition-opacity duration-700 z-0`}></div>

                                                {imageUrl ? (
                                                    <img
                                                        src={imageUrl}
                                                        alt={project.title || "Project Image"}
                                                        className="w-full h-full object-cover z-10 transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100 absolute inset-0"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm font-medium tracking-widest uppercase z-10">
                                                        <div className="flex flex-col items-center gap-2">
                                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${theme.gradient} opacity-30 flex items-center justify-center`}>
                                                                <ExternalLink className="w-5 h-5" />
                                                            </div>
                                                            <span className="text-xs">Preview</span>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Decorative shapes */}
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 z-0"></div>
                                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/40 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2 z-0"></div>

                                                {/* Top gradient overlay for depth */}
                                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            </div>

                                            {/* Card Content */}
                                            <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow relative z-10">
                                                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:${theme.accentText} transition-colors duration-300`}>{project.title}</h3>
                                                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 sm:mb-6 flex-grow">{project.description}</p>

                                                {project.tags && project.tags.length > 0 && (
                                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                                                        {project.tags.map((tag: string, tagIndex: number) => (
                                                            <span key={tagIndex} className="px-3 py-1 text-[11px] font-medium text-white/50 bg-white/[0.03] rounded-full border border-white/10 transition-colors duration-300 group-hover:border-white/25 group-hover:text-white/70 group-hover:bg-white/[0.06]">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* CTA */}
                                                <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between text-sm font-medium text-neutral-500 group-hover:text-white transition-colors duration-300">
                                                    <span className="flex items-center gap-2">
                                                        View Details
                                                        <motion.span
                                                            className="inline-block"
                                                            animate={{ x: [0, 4, 0] }}
                                                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                                                        >
                                                            →
                                                        </motion.span>
                                                    </span>
                                                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </TiltCard>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-20 border border-white/5 rounded-3xl bg-white/5 md:backdrop-blur-md">
                            <p className="text-neutral-400">Loading projects or no projects found.</p>
                        </div>
                    )}
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-16 sm:py-20 md:py-32 text-center overflow-hidden relative">

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[500px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <SectionReveal>
                        <motion.div
                            className="relative z-10 max-w-4xl mx-auto bg-white/[0.04] md:backdrop-blur-2xl p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl group overflow-hidden"
                        >
                            {/* Subtle animated gradient line at top of card */}
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-gradient-shift bg-[length:200%_auto]" />

                            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">Let&apos;s work together.</h2>
                            <p className="text-neutral-400 mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
                                Whether you need a mobile app, video production, or a complete brand overhaul — drop me a message and I&apos;ll get back to you.
                            </p>

                            {/* Working Contact Form */}
                            <ContactForm />

                            {/* Social Links below form */}
                            <div className="mt-10 sm:mt-14 md:mt-16 pt-8 border-t border-white/5">
                                <p className="text-neutral-500 text-xs sm:text-sm mb-4 font-medium tracking-wider uppercase">Or find me on</p>
                                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-neutral-500">
                                    {socialLinks?.github && (
                                        <MagneticLink href={socialLinks.github} target="_blank" rel="noopener noreferrer" hoverColor="#fff">
                                            <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                                        </MagneticLink>
                                    )}
                                    {socialLinks?.linkedin && (
                                        <MagneticLink href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" hoverColor="#60a5fa">
                                            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                                        </MagneticLink>
                                    )}
                                    {socialLinks?.facebook && (
                                        <MagneticLink href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" hoverColor="#3b5998">
                                            <Facebook className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                                        </MagneticLink>
                                    )}
                                    {socialLinks?.freelancer && (
                                        <MagneticLink href={socialLinks.freelancer} target="_blank" rel="noopener noreferrer" hoverColor="#29b2fe">
                                            <FreelancerIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                                        </MagneticLink>
                                    )}
                                    {socialLinks?.fiverr && (
                                        <MagneticLink href={socialLinks.fiverr} target="_blank" rel="noopener noreferrer" hoverColor="#1dbf73">
                                            <FiverrIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                                        </MagneticLink>
                                    )}
                                    {socialLinks?.phone && (
                                        <MagneticLink href={`tel:${socialLinks.phone}`} hoverColor="#10b981">
                                            <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                                        </MagneticLink>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </SectionReveal>
                </section>

                {/* Footer */}
                <SectionReveal delay={0.1}>
                    <footer className="py-8 sm:py-10 md:py-12 text-center text-neutral-600 text-xs sm:text-sm border-t border-white/5 px-4">
                        <p>© {new Date().getFullYear()} Dilshan Madushankha. All rights reserved.</p>
                    </footer>
                </SectionReveal>

            </main>
        </div>
    );
}
