'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Radar, Satellite, Sparkles, Orbit } from 'lucide-react';

const STATS = [
    { value: '148', label: 'Leaders Documented' },
    { value: '2,400+', label: 'Archive Items' },
    { value: '320', label: 'Research Papers' },
    { value: '19', label: 'Cultural Topics' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function Hero() {
    return (
        <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-navy-950">
            <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
            <div className="absolute inset-0 pointer-events-none opacity-60">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-[linear-gradient(90deg,transparent,rgba(201,146,42,0.6),rgba(110,91,211,0.7),transparent)]" />
                <div className="absolute left-[8%] top-[18%] w-72 h-72 rounded-full bg-amber-500/10 blur-3xl animate-pulse" />
                <div className="absolute right-[10%] top-[14%] w-96 h-96 rounded-full bg-violet-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }} />
                <div className="absolute bottom-[12%] left-[28%] w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" style={{ animationDelay: '2.4s' }} />
            </div>

            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(201,146,42,0.8) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(201,146,42,0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: '72px 72px',
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16">
                <div className="grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7">
                        <motion.div
                            custom={0}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <span className="cyber-pill scanline">
                                <Sparkles className="w-3 h-3" />
                                Digital Research Platform
                            </span>
                        </motion.div>

                        <motion.h1
                            custom={1}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="hero-title text-5xl md:text-6xl xl:text-8xl mb-6 max-w-4xl"
                        >
                            Preserving the
                            <br />
                            <span className="text-amber-300 glow-text">Bodo Future</span>
                        </motion.h1>

                        <motion.p
                            custom={2}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="text-cream/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10 tracking-[0.02em]"
                        >
                            A cinematic archive for the Bodo people, combining scholarship,
                            memory, data visualization, and editorial governance in one
                            living knowledge system.
                        </motion.p>

                        <motion.div
                            custom={3}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap gap-3 mb-12"
                        >
                            <Link
                                href="/leaders"
                                className="
                                    inline-flex items-center gap-2 px-6 py-3 rounded-full
                                    bg-[linear-gradient(135deg,rgba(201,146,42,0.98),rgba(110,91,211,0.9))]
                                    text-navy-950 text-[12px] font-bold tracking-[0.22em] uppercase
                                    hover:brightness-110 transition-all duration-150
                                "
                            >
                                Explore Leaders
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/archive"
                                className="
                                    inline-flex items-center gap-2 px-6 py-3 rounded-full
                                    border border-cream/15 bg-white/5 text-cream/75
                                    text-[12px] font-medium tracking-[0.18em] uppercase
                                    hover:border-amber-500/35 hover:text-cream transition-all duration-150
                                "
                            >
                                Browse Archive
                                <Orbit className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            custom={4}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap gap-3"
                        >
                            {['Searchable', 'Curated', 'Cited', 'Responsive'].map((chip) => (
                                <span key={chip} className="data-chip">
                                    {chip}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        custom={5}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-5"
                    >
                        <div className="futuristic-shell neon-frame p-5 md:p-6 scanline">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <p className="section-kicker mb-2">Signal Deck</p>
                                    <h2 className="text-lg font-semibold text-cream">Archive telemetry</h2>
                                </div>
                                <Radar className="w-5 h-5 text-amber-300" />
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="glass-panel p-4">
                                    <p className="text-[10px] uppercase tracking-[0.28em] text-cream/35 mb-2">Leaders</p>
                                    <p className="font-display text-3xl text-cream font-bold">148</p>
                                </div>
                                <div className="glass-panel p-4">
                                    <p className="text-[10px] uppercase tracking-[0.28em] text-cream/35 mb-2">Sources</p>
                                    <p className="font-display text-3xl text-cream font-bold">2.4k</p>
                                </div>
                                <div className="glass-panel p-4">
                                    <p className="text-[10px] uppercase tracking-[0.28em] text-cream/35 mb-2">Papers</p>
                                    <p className="font-display text-3xl text-cream font-bold">320</p>
                                </div>
                                <div className="glass-panel p-4">
                                    <p className="text-[10px] uppercase tracking-[0.28em] text-cream/35 mb-2">Topics</p>
                                    <p className="font-display text-3xl text-cream font-bold">19</p>
                                </div>
                            </div>

                            <div className="glass-panel p-4 mb-4 flex items-center gap-3">
                                <Satellite className="w-10 h-10 text-amber-300" />
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.24em] text-cream/35 mb-1">Live mode</p>
                                    <p className="text-sm text-cream/75">Editorial, research, and archival workflows online.</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <span className="data-chip">Open Access</span>
                                <span className="data-chip">SEO Ready</span>
                                <span className="data-chip">Legally Structured</span>
                                <span className="data-chip">Future-proof UI</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
