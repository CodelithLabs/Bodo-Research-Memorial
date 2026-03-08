import React, { useState } from 'react';
import { Mail, MapPin, Github, Twitter } from 'lucide-react';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: wire up to backend/email service
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
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
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded">
                    Thank you! Your message has been sent.
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-12">
                {/* Map Section */}
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
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
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={form.name}
                                onChange={(e) => setForm({...form, name: e.target.value})}
                                className="w-full px-4 py-2 border border-divider rounded-sm focus:outline-none focus:border-secondary"
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
                                className="w-full px-4 py-2 border border-divider rounded-sm focus:outline-none focus:border-secondary"
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
                                className="w-full px-4 py-2 border border-divider rounded-sm focus:outline-none focus:border-secondary"
                                placeholder="How can we help you?"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn-primary bg-secondary text-primary px-8 py-3"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-8 space-y-4 text-text-secondary text-sm">
                        <div className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-primary" />
                            <a
                                href="mailto:archive@codelithlabs.in"
                                className="underline text-primary"
                            >
                                archive@codelithlabs.in
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary" />
                            Kokrajhar, Bodoland Territorial Region, Assam
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <a
                                href="https://github.com/bodoresearch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-secondary transition-colors"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href="https://twitter.com/bodoresearch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-secondary transition-colors"
                            >
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
