"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<FormStatus>("idle");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                    name,
                    email,
                    message,
                    from_name: "Portfolio Contact Form",
                }),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setName("");
                setEmail("");
                setMessage("");
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto text-left space-y-5 sm:space-y-6">
            <div className="group">
                <label htmlFor="contact-name" className="block text-neutral-400 text-xs sm:text-sm font-medium mb-2 tracking-wide uppercase">
                    Name
                </label>
                <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={status === "loading"}
                    placeholder="Your name"
                    className="w-full px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-neutral-600 text-sm sm:text-base outline-none transition-all duration-300 focus:border-purple-500/60 focus:bg-white/[0.06] focus:shadow-[0_0_25px_-5px_rgba(168,85,247,0.25)] hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                />
            </div>

            <div className="group">
                <label htmlFor="contact-email" className="block text-neutral-400 text-xs sm:text-sm font-medium mb-2 tracking-wide uppercase">
                    Email
                </label>
                <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    placeholder="you@example.com"
                    className="w-full px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-neutral-600 text-sm sm:text-base outline-none transition-all duration-300 focus:border-purple-500/60 focus:bg-white/[0.06] focus:shadow-[0_0_25px_-5px_rgba(168,85,247,0.25)] hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                />
            </div>

            <div className="group">
                <label htmlFor="contact-message" className="block text-neutral-400 text-xs sm:text-sm font-medium mb-2 tracking-wide uppercase">
                    Message
                </label>
                <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={status === "loading"}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-neutral-600 text-sm sm:text-base outline-none transition-all duration-300 focus:border-purple-500/60 focus:bg-white/[0.06] focus:shadow-[0_0_25px_-5px_rgba(168,85,247,0.25)] hover:border-white/20 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
            </div>

            <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                whileHover={status === "idle" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
                className="w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 transition-all duration-500 cursor-hover disabled:cursor-not-allowed relative overflow-hidden"
                style={{
                    background:
                        status === "success"
                            ? "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(52,211,153,0.15))"
                            : status === "error"
                                ? "linear-gradient(135deg, rgba(239,68,68,0.2), rgba(248,113,113,0.15))"
                                : "white",
                    color:
                        status === "success" ? "#34d399" : status === "error" ? "#f87171" : "black",
                    border:
                        status === "success"
                            ? "1px solid rgba(52,211,153,0.3)"
                            : status === "error"
                                ? "1px solid rgba(248,113,113,0.3)"
                                : "1px solid transparent",
                    boxShadow:
                        status === "idle"
                            ? "0 0 50px -15px rgba(255,255,255,0.3)"
                            : "none",
                }}
            >
                <AnimatePresence mode="wait">
                    {status === "idle" && (
                        <motion.span
                            key="idle"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2"
                        >
                            <Send className="w-5 h-5" />
                            Send Message
                        </motion.span>
                    )}
                    {status === "loading" && (
                        <motion.span
                            key="loading"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2"
                        >
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </motion.span>
                    )}
                    {status === "success" && (
                        <motion.span
                            key="success"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center gap-2"
                        >
                            <CheckCircle className="w-5 h-5" />
                            Message Sent!
                        </motion.span>
                    )}
                    {status === "error" && (
                        <motion.span
                            key="error"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center gap-2"
                        >
                            <AlertCircle className="w-5 h-5" />
                            Failed. Try again.
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </form>
    );
}
