'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Gamepad2, Mail, Lock, User, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [displayName, setDisplayName] = useState('');

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
                        <h1 className="text-2xl font-bold text-surface-100 text-center">Create an account</h1>
                        <p className="text-surface-400 text-center mt-2">Join the community of creators</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input
                            label="Username"
                            placeholder="Choose a username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            leftIcon={<User className="w-5 h-5" />}
                        />
                        <Input
                            label="Display Name"
                            placeholder="How you want to be called"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            leftIcon={<UserPlus className="w-5 h-5" />}
                        />
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
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            leftIcon={<Lock className="w-5 h-5" />}
                        />
                        <Button className="w-full" size="lg">Create Account</Button>
                        <p className="text-center text-surface-400">
                            Already have an account?{' '}
                            <Link href="/auth/login" className="text-primary-400 hover:text-primary-300">
                                Sign in
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
