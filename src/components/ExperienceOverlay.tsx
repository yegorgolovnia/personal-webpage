import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextScramble, GlitchCanvas } from "../lib/glitch";
import "../styles/ExperienceOverlay.css";

interface OverlayItem {
    role?: string;
    title?: string;
    company?: string;
    subtitle?: string;
    period?: string;
    year?: string;
    location?: string;
    desc?: string;
    hover_bullets?: string[];
    tags?: string[];
    detail_sections?: { heading: string; content: string }[];
}

const ScrambleText = ({ text, className = "", as: Component = "span" }: { text: string; className?: string; as?: any }) => {
    const ref = useRef<HTMLElement>(null);
    const scrambler = useRef<TextScramble | null>(null);

    useEffect(() => {
        if (ref.current) {
            scrambler.current = new TextScramble(ref.current);
            if (ref.current.innerText !== text) {
                scrambler.current.setText(text, "normal");
            }
        }
    }, [text]);

    useEffect(() => {
        if (scrambler.current) {
            scrambler.current.setText(text, "normal");
        }
    }, []);

    return <Component ref={ref} className={className} data-original-text={text}>{text}</Component>;
};

export default function ExperienceOverlay() {
    const [isOpen, setIsOpen] = useState(false);
    const [item, setItem] = useState<OverlayItem | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const glitchRef = useRef<GlitchCanvas | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOpen = (e: CustomEvent) => {
            setItem(e.detail);
            setIsOpen(true);
            document.body.style.overflow = "hidden";
            document.body.classList.add("overlay-open");
        };

        const handleClose = () => {
            setIsOpen(false);
            document.body.style.overflow = "";
            document.body.classList.remove("overlay-open");
        };

        window.addEventListener("open-overlay" as any, handleOpen);
        window.addEventListener("close-overlay" as any, handleClose);

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("open-overlay" as any, handleOpen);
            window.removeEventListener("close-overlay" as any, handleClose);
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
            document.body.classList.remove("overlay-open");
        };
    }, []);

    useEffect(() => {
        if (isOpen && canvasRef.current && !glitchRef.current) {
            glitchRef.current = new GlitchCanvas(canvasRef.current);
            glitchRef.current.triggerEntrance();
        } else if (isOpen && glitchRef.current) {
            glitchRef.current.triggerEntrance();
        }
    }, [isOpen]);

    const close = () => {
        if (glitchRef.current) glitchRef.current.triggerExit();
        setTimeout(() => {
            setIsOpen(false);
            document.body.style.overflow = "";
            document.body.classList.remove("overlay-open");
        }, 100);
    };

    return (
        <AnimatePresence>
            {isOpen && item && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overlay-backdrop"
                        onClick={close}
                    />

                    {/* Modal */}
                    <motion.div
                        className="overlay-modal"
                        initial={{ opacity: 0, scale: 0.96, x: "-50%", y: "-50%" }}
                        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                        exit={{ opacity: 0, scale: 0.98, x: "-50%", y: "-50%" }}
                        transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
                        ref={containerRef}
                    >
                        <canvas
                            ref={canvasRef}
                            className="glitch-canvas-layer"
                        />

                        <div className="overlay-content">
                            {/* Header */}
                            <div className="overlay-header">
                                <div className="overlay-label">
                                    Detail View
                                </div>
                                <button
                                    onClick={close}
                                    className="overlay-close"
                                    aria-label="Close details"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>

                            {/* Title Section */}
                            <div className="overlay-title">
                                <h2>
                                    <ScrambleText text={item.role || item.title || ""} as="span" />
                                </h2>
                                <div className="overlay-subtitle">
                                    <ScrambleText text={item.company || item.subtitle || ""} as="span" />
                                </div>
                            </div>

                            {/* Meta Row */}
                            <div className="overlay-meta">
                                <span>{item.period || item.year}</span>
                                {item.location && <span>{item.location}</span>}
                            </div>

                            {/* Body */}
                            <div className="overlay-body">
                                {item.desc && (
                                    <p className="overlay-desc">
                                        {item.desc}
                                    </p>
                                )}

                                {item.hover_bullets && (
                                    <ul className="overlay-bullets">
                                        {item.hover_bullets.map((bullet, i) => (
                                            <li key={i}>
                                                <span className="bullet-dash">—</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {item.detail_sections && item.detail_sections.map((section, i) => (
                                    <div key={i} className="overlay-section">
                                        <h3>{section.heading}</h3>
                                        <div className="overlay-section-content">
                                            {section.content}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer Tags */}
                            <div className="overlay-footer">
                                {item.tags?.map((tag, i) => (
                                    <span key={i} className="overlay-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
