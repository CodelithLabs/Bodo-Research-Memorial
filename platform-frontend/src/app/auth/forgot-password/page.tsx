'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Gamepad2, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-surface-900 py-12 px-4">
            <div className="w-full max-w-md">
                {/* Back to Login */}
                <Link href="/auth/login" className="flex items-center gap-2 text-surface-400 hover:text-surface-100 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to login
                </Link>

                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-600">
                            <Gamepad2 className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-surface-100">FATHM</span>
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <h1 className="text-2xl font-bold text-surface-100 text-center">Forgot password?</h1>
                        <p className="text-surface-400 text-center mt-2">
                            {submitted
                                ? "Check your email for reset instructions"
                                : "Enter your email and we'll send you a reset link"}
                        </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {!submitted ? (
                            <>
                                <Input
                                    type="email"
                                    label="Email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    leftIcon={<Mail className="w-5 h-5" />}
                                />
                                <Button
                                    className="w-full"
                                    size="lg"
                                    onClick={() => setSubmitted(true)}
                                >
                                    Send Reset Link
                                </Button>
                            </>
                        ) : (
                            <div className="text-center py-4">
                                <p className="text-surface-300 mb-4">
                                    We've sent a password reset link to <strong>{email}</strong>
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => setSubmitted(false)}
                                >
                                    Didn't receive? Resend
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
