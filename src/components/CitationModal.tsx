'use client';

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Quote } from 'lucide-react';
import { CitationData, generateAPA, generateMLA, generateChicago } from '@/lib/citations';

interface CitationModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: CitationData;
}

export default function CitationModal({ isOpen, onClose, data }: CitationModalProps) {
    const [copied, setCopied] = useState<string | null>(null);

    const citations = [
        { id: 'APA', label: 'APA Style', text: generateAPA(data) },
        { id: 'MLA', label: 'MLA Style', text: generateMLA(data) },
        { id: 'Chicago', label: 'Chicago Manual of Style', text: generateChicago(data) },
    ];

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm font-body">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-white max-w-2xl w-full overflow-hidden shadow-2xl border border-secondary/20"
                    >
                        {/* Header */}
                        <div className="bg-primary p-6 text-white flex items-center justify-between border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-secondary/20 flex items-center justify-center">
                                    <Quote className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-bold tracking-tight">Cite This Work</h3>
                                    <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Academic Reference Tool</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 transition-colors rounded-none"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
                            {citations.map((citation) => (
                                <div key={citation.id} className="group">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary/40">
                                            {citation.label}
                                        </span>
                                        <button
                                            onClick={() => handleCopy(citation.text, citation.id)}
                                            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors"
                                        >
                                            {copied === citation.id ? (
                                                <React.Fragment><Check className="w-3 h-3" /> Copied</React.Fragment>
                                            ) : (
                                                <React.Fragment><Copy className="w-3 h-3" /> Copy Citation</React.Fragment>
                                            )}
                                        </button>
                                    </div>
                                    <div className="p-5 bg-background border-l-4 border-secondary text-sm text-primary leading-relaxed font-serif italic">
                                        {citation.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-6 bg-background border-t border-secondary/10 flex justify-between items-center italic text-[11px] text-primary/60">
                            <span>Source: Bodo Research Memorial Digital Repository</span>
                            <span className="flex items-center gap-1">
                                Verified Academic Source <Check className="w-3 h-3 text-secondary" />
                            </span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
