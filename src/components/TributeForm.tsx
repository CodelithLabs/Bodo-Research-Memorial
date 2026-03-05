'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, User, MessageSquare, ShieldCheck } from 'lucide-react';

interface TributeFormProps {
    onSubmit?: (tribute: { name: string; message: string }) => void;
}

export default function TributeForm({ onSubmit }: TributeFormProps) {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && message) {
            onSubmit?.({ name, message });
            setIsSubmitted(true);
            setName('');
            setMessage('');
        }
    };

    return (
        <div className="bg-white border border-divider shadow-sm overflow-hidden h-full">
            <div className="bg-primary p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-weave" />
                <div className="relative z-10">
                    <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">Community Memorial</span>
                    <h3 className="text-2xl font-bold italic">Leave a <span className="text-secondary">Tribute</span></h3>
                </div>
            </div>

            <div className="p-8 md:p-10">
                <AnimatePresence mode="wait">
                    {isSubmitted ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="py-12 text-center"
                        >
                            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-secondary/20">
                                <CheckCircle className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="text-2xl font-bold text-primary mb-4">Message Recorded</h4>
                            <p className="text-text-secondary mb-8 leading-relaxed max-w-xs mx-auto">
                                Your tribute has been submitted to the digital archive and will be published after formal review.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors inline-flex items-center gap-2"
                            >
                                Submit another record <Send className="w-3 h-3" />
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onSubmit={handleSubmit}
                            className="space-y-8"
                        >
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                                    <User className="w-3 h-3" /> Full Name / Signature
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 bg-background border border-divider focus:outline-none focus:border-secondary transition-colors font-medium text-sm"
                                    placeholder="e.g. Dr. Barnali Brahma"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                                    <MessageSquare className="w-3 h-3" /> Memorial Message
                                </label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-4 py-3 bg-background border border-divider focus:outline-none focus:border-secondary transition-colors font-medium text-sm min-h-[160px] resize-none"
                                    placeholder="Share your reflections, prayers, or historical context..."
                                    required
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-secondary px-8 py-4 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-lg shadow-primary/10"
                                >
                                    <Send className="w-4 h-4" /> Finalize Submission
                                </button>
                                <p className="mt-6 flex items-start gap-2 text-[9px] text-text-muted leading-relaxed uppercase tracking-wider">
                                    <ShieldCheck className="w-3 h-3 mt-0.5 text-secondary shrink-0" />
                                    All submissions are checked for historical accuracy and respectful tone before being committed to the permanent archive.
                                </p>
                            </div>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
