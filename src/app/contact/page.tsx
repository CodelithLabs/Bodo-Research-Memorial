'use client';

'use client';

import type { Metadata } from 'next';
import React, { useState } from 'react';

export const metadata: Metadata = {
  title: 'Contact – Bodo Research Memorial',
  description: 'Get in touch with the Bodo Research Memorial team via email, phone or visit.',
};
import { Mail, MapPin, Github, Twitter, Phone } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, SOCIAL_GITHUB, SOCIAL_TWITTER, CONTACT_WHATSAPP } from '@/lib/constants';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '', hp: '' }); // hp is honeypot
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const validate = () => {
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setError('Please fill out all fields.');
            return false;
        }
        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailRegex.test(form.email)) {
            setError('Please enter a valid email address.');
            return false;
        }
        // honeypot must be empty
        if (form.hp) {
            setError('Bad submission.');
            return false;
        }
        setError(null);
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setSubmitted(true);
                setForm({ name: '', email: '', message: '', hp: '' });
            } else {
                const data = await res.json();
                setError(data.error || 'Submission failed.');
            }
        } catch (err) {
            console.error('contact submit error', err);
            setError('Unknown error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container-institutional section-padding">
            <h1 className="text-4xl font-heading mb-6">Contact Us</h1>
            <p className="mb-6 text-text-secondary max-w-xl">
                Whether you have a question about the archive, want to contribute material, or
                simply wish to connect, we&apos;d love to hear from you. Use the form below or
                reach out via email, phone or social media.
            </p>

            {submitted && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
                    Thank you! Your message has been sent.
                </div>
            )}
            {error && !submitted && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded">
                    {error}
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-12">
                {/* Map Section */}
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14285.925493676912!2d90.36371159450169!3d26.41321027783685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375bf1b22f6f50af%3A0x6a0a84c047e4dca4!2sKokrajhar%2C%20Assam!5e0!3m2!1sen!2sin!4v1709823474000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        title="Kokrajhar, Assam map"
                    ></iframe>
                </div>

                {/* Contact Form & Info */}
                <div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* honeypot field (hidden) */}
                        <input
                            type="text"
                            name="hp"
                            value={form.hp}
                            onChange={(e) => setForm({...form, hp: e.target.value})}
                            className="hidden"
                            autoComplete="off"
                        />
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={form.name}
                                onChange={(e) => setForm({...form, name: e.target.value})}
                                className="w-full px-4 py-2 border border-divider rounded-sm focus:outline-none focus:border-secondary bg-white dark:bg-slate-800 text-text-primary dark:text-white"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={form.email}
                                onChange={(e) => setForm({...form, email: e.target.value})}
                                className="w-full px-4 py-2 border border-divider rounded-sm focus:outline-none focus:border-secondary bg-white dark:bg-slate-800 text-text-primary dark:text-white"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                value={form.message}
                                onChange={(e) => setForm({...form, message: e.target.value})}
                                className="w-full px-4 py-2 border border-divider rounded-sm focus:outline-none focus:border-secondary bg-white dark:bg-slate-800 text-text-primary dark:text-white"
                                placeholder="How can we help you?"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn-primary bg-secondary text-primary px-8 py-3 flex items-center justify-center"
                            disabled={loading}
                        >
                            {loading ? 'Sending…' : 'Send Message'}
                        </button>
                    </form>

                    <div className="mt-8 space-y-4 text-text-secondary dark:text-white text-sm">
                        <div className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-primary" />
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="underline text-primary"
                            >
                                {CONTACT_EMAIL}
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-5 h-5 text-primary" />
                            <a href={`tel:${CONTACT_PHONE}`} className="underline text-primary">
                                {CONTACT_PHONE}
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary" />
                            {CONTACT_ADDRESS}
                        </div>
                        <div className="text-text-muted text-[10px]">
                            Office Hours: Mon–Fri 9&nbsp;AM – 5&nbsp;PM IST
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <a
                                href={SOCIAL_GITHUB}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-secondary transition-colors"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href={SOCIAL_TWITTER}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-secondary transition-colors"
                            >
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a
                                href={CONTACT_WHATSAPP}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-secondary transition-colors"
                            >
                                <Phone className="w-6 h-6 rotate-45" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
