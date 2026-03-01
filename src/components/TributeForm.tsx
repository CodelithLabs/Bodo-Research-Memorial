'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, CheckCircle } from 'lucide-react';
import styles from './TributeForm.module.css';

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

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={styles.successMessage}
            >
                <CheckCircle size={48} className={styles.successIcon} />
                <h3>Thank You!</h3>
                <p>Your tribute has been submitted for review.</p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className={styles.submitAnother}
                >
                    Submit Another Tribute
                </button>
            </motion.div>
        );
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.header}>
                <Heart className={styles.heartIcon} />
                <h3 className={styles.title}>Leave a Tribute</h3>
                <p className={styles.subtitle}>
                    Share your thoughts and honor the memory of our heroes
                </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Your Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.input}
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Your Tribute</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={styles.textarea}
                        placeholder="Share your thoughts, memories, or messages of respect..."
                        rows={5}
                        required
                    />
                </div>

                <button type="submit" className={styles.submitButton}>
                    <Send size={18} />
                    Submit Tribute
                </button>
            </form>

            <p className={styles.note}>
                Your tribute will be reviewed before being published
            </p>
        </div>
    );
}
