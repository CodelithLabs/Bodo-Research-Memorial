'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Gamepad2, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="min-h-screen flex items-center justify-center bg-surface-900 py-12 px-4">
            <div className="w-full max-w-md">
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
                        <h1 className="text-2xl font-bold text-surface-100 text-center">Welcome back</h1>
                        <p className="text-surface-400 text-center mt-2">Sign in to your account</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input
                            type="email"
                            label="Email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            leftIcon={<Mail className="w-5 h-5" />}
                        />
                        <Input
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            leftIcon={<Lock className="w-5 h-5" />}
                        />
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4 rounded border-surface-600 bg-surface-800 text-primary-500" />
                                <span className="text-sm text-surface-400">Remember me</span>
                            </label>
                            <Link href="/auth/forgot-password" className="text-sm text-primary-400 hover:text-primary-300">
                                Forgot password?
                            </Link>
                        </div>
                        <Button className="w-full" size="lg">Sign In</Button>
                        <p className="text-center text-surface-400">
                            Don't have an account?{' '}
                            <Link href="/auth/register" className="text-primary-400 hover:text-primary-300">
                                Sign up
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
