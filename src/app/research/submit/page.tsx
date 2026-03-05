'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Upload, CheckCircle, Info, FileText } from 'lucide-react';
import Link from 'next/link';

export default function ResearchSubmitPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        university: '',
        year: '',
        category: 'Politics',
        abstract: '',
        email: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => setIsSubmitted(true), 1000);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-6 font-body">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-white border border-divider p-12 text-center"
                >
                    <div className="w-20 h-20 bg-secondary/20 flex items-center justify-center mx-auto mb-8 rounded-full">
                        <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-primary mb-4">Submission Received</h2>
                    <p className="text-text-secondary mb-10 leading-relaxed font-serif italic text-sm">
                        Your research paper has been successfully uploaded to the repository.
                        Our academic committee will review the document for verification before public listing.
                    </p>
                    <Link href="/research/papers" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all w-full">
                        Return to Repository
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background font-body">
            {/* Header */}
            <section className="bg-primary text-white pt-24 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-weave" />
                <div className="container-institutional relative z-10">
                    <Link href="/research/papers" className="inline-flex items-center text-secondary/80 hover:text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-12 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Repository
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 italic">Submit <span className="text-secondary">Scholarship</span></h1>
                    <p className="text-xl text-white/70 max-w-3xl leading-relaxed font-serif">
                        Contribute your academic work to the Bodo Research Memorial. We welcome theses,
                        dissertations, and peer-reviewed articles.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-institutional">
                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-7">
                            <form onSubmit={handleSubmit} className="space-y-8 bg-white border border-divider p-10 md:p-16 shadow-sm">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary">Paper Title *</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-background border border-divider p-4 focus:outline-none focus:border-secondary transition-colors font-medium text-sm"
                                            placeholder="e.g. Bodo Language Evolution"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary">Author Name *</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-background border border-divider p-4 focus:outline-none focus:border-secondary transition-colors font-medium text-sm"
                                            placeholder="Full Name"
                                            value={formData.author}
                                            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary">University / Institution *</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-background border border-divider p-4 focus:outline-none focus:border-secondary transition-colors font-medium text-sm"
                                            placeholder="e.g. Gauhati University"
                                            value={formData.university}
                                            onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary">Year of Publication *</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-background border border-divider p-4 focus:outline-none focus:border-secondary transition-colors font-medium text-sm"
                                            placeholder="YYYY"
                                            value={formData.year}
                                            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary">Academic Category</label>
                                    <select
                                        className="w-full bg-background border border-divider p-4 focus:outline-none focus:border-secondary transition-colors font-medium text-sm appearance-none"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        <option>Politics</option>
                                        <option>Culture</option>
                                        <option>Language</option>
                                        <option>History</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary">Abstract / Summary *</label>
                                    <textarea
                                        required
                                        rows={6}
                                        className="w-full bg-background border border-divider p-4 focus:outline-none focus:border-secondary transition-colors font-serif italic text-sm"
                                        placeholder="Briefly describe the key findings and methodology of your research..."
                                        value={formData.abstract}
                                        onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary">Contact Email *</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full bg-background border border-divider p-4 focus:outline-none focus:border-secondary transition-colors font-medium text-sm"
                                        placeholder="scholar@university.edu"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className="border-2 border-dashed border-divider p-12 text-center group hover:border-secondary transition-colors cursor-pointer">
                                    <Upload className="w-10 h-10 text-text-muted mx-auto mb-4 group-hover:text-secondary transition-colors" />
                                    <p className="text-xs font-bold uppercase tracking-widest group-hover:text-primary">Click to upload PDF</p>
                                    <p className="text-[10px] text-text-muted mt-2">Maximum file size: 20MB</p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-5 bg-primary text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-secondary hover:text-primary transition-all shadow-xl"
                                >
                                    Submit for Verification
                                </button>
                            </form>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="sticky top-32 space-y-8">
                                <div className="bg-primary/5 p-10 border-l-4 border-secondary">
                                    <Info className="w-8 h-8 text-secondary mb-6" />
                                    <h3 className="text-xl font-display font-bold text-primary mb-4">Submission Ethics</h3>
                                    <p className="text-text-secondary leading-relaxed text-sm italic font-serif">
                                        By submitting your work, you confirm that you are the original author or have the
                                        rights to distribute this research. All submissions undergo a verification process
                                        by our board of historians and scholars.
                                    </p>
                                    <ul className="mt-8 space-y-4">
                                        {[
                                            'Peer-reviewed status preferred',
                                            'Institutional affiliation required',
                                            'Open access compliance'
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary">
                                                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-10 border border-divider bg-white shadow-sm">
                                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-6 flex items-center">
                                        <FileText className="w-4 h-4 mr-2" />
                                        Review Process
                                    </h3>
                                    <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-divider">
                                        {[
                                            { step: 'Initial Screening', time: '2-3 Days' },
                                            { step: 'Expert Verification', time: '1-2 Weeks' },
                                            { step: 'Public Archiving', time: 'Immediate' }
                                        ].map((item, idx) => (
                                            <div key={idx} className="relative pl-10">
                                                <div className="absolute left-0 top-1 w-6 h-6 bg-white border-2 border-divider rounded-full flex items-center justify-center z-10">
                                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                                </div>
                                                <p className="text-xs font-bold uppercase tracking-widest text-primary">{item.step}</p>
                                                <p className="text-[10px] text-text-muted mt-1 italic">{item.time}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
