'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Quote, History, Award } from 'lucide-react';
import TributeForm from '@/components/TributeForm';

// Sample tributes (would come from database in production)
const sampleTributes = [
    {
        id: 1,
        name: 'Dr. Rohit Sharma',
        message: 'The intellectual legacy of Bodofa Upendra Nath Brahma continues to be the foundation of our socio-political consciousness. His sacrifice remains the ultimate benchmark of leadership.',
        date: '2024-06-20',
    },
    {
        id: 2,
        name: 'Mina Devi',
        message: 'Reflecting on the courage shown by our leaders during the mid-20th century. Their vision for a recognized Bodo identity is what we live today.',
        date: '2024-03-15',
    },
    {
        id: 3,
        name: 'Bhim Rongphar',
        message: 'The martyrdom of Sujit Narzary at such a young age is a poignant reminder of the cost of our struggle. We are eternally indebted to these brave souls.',
        date: '2024-01-20',
    },
];

export default function TributePage() {
    const [tributes, setTributes] = useState(sampleTributes);

    const handleNewTribute = (tribute: { name: string; message: string }) => {
        const newTribute = {
            id: Date.now(),
            name: tribute.name,
            message: tribute.message,
            date: new Date().toISOString().split('T')[0],
        };
        setTributes([newTribute, ...tributes]);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <section className="bg-primary text-white pt-24 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-weave" />
                <div className="container-institutional relative z-10">
                    <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Memorial Space</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 italic">Tributes <span className="text-secondary">& Reflections</span></h1>
                    <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                        A digital sanctuary for honor and remembrance. Share your reflections on the lives of our
                        leaders and martyrs who paved the way for Bodo dignity and progress.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-institutional">
                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Form Column */}
                        <div className="lg:col-span-4 order-2 lg:order-1">
                            <div className="sticky top-24">
                                <TributeForm onSubmit={handleNewTribute} />
                                <div className="mt-8 p-6 bg-primary/5 border border-divider">
                                    <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <History className="w-4 h-4 text-secondary" /> Memorial Policy
                                    </h4>
                                    <p className="text-text-muted text-[11px] leading-relaxed">
                                        This memorial wall is for high-standard academic and respectful tributes.
                                        Submissions containing political vitriol or informal language may be redirected
                                        to our research discussion forums.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* List Column */}
                        <div className="lg:col-span-8 order-1 lg:order-2">
                            <div className="flex items-center justify-between mb-12 pb-4 border-b border-divider">
                                <div className="flex items-center gap-3">
                                    <MessageSquare className="w-5 h-5 text-secondary" />
                                    <h2 className="text-primary text-xl font-bold uppercase tracking-widest">Recorded Tributes</h2>
                                </div>
                                <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Showing Last {tributes.length} Entries</span>
                            </div>

                            <div className="space-y-12">
                                <AnimatePresence>
                                    {tributes.map((tribute, index) => (
                                        <motion.div
                                            key={tribute.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="group relative pl-12 md:pl-16 pb-12 border-l border-divider last:pb-0"
                                        >
                                            {/* Timeline Dot Icon */}
                                            <div className="absolute left-0 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-white border border-divider flex items-center justify-center group-hover:border-secondary transition-colors">
                                                <Quote className="w-3 h-3 text-primary group-hover:text-secondary" />
                                            </div>

                                            <div className="bg-white border border-divider p-8 shadow-sm group-hover:shadow-md transition-shadow">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                                    <div>
                                                        <h3 className="text-primary font-bold text-lg">{tribute.name}</h3>
                                                        <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Contributor Verified</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{tribute.date}</span>
                                                    </div>
                                                </div>

                                                <div className="prose-institutional text-text-secondary italic leading-relaxed text-lg border-l-2 border-secondary/30 pl-6 py-2">
                                                    &quot;{tribute.message}&quot;
                                                </div>

                                                <div className="mt-8 pt-6 border-t border-divider flex items-center gap-4">
                                                    <Award className="w-4 h-4 text-secondary/40" />
                                                    <span className="text-[9px] uppercase tracking-[0.2em] text-text-muted">Part of the Permanent Digital Record</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            {tributes.length === 0 && (
                                <div className="py-24 text-center border-2 border-dashed border-divider">
                                    <MessageSquare className="w-12 h-12 text-text-muted/20 mx-auto mb-6" />
                                    <p className="text-text-muted font-medium italic">No formal records have been added yet in this section.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
