'use client';

import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export default function SettingsPage() {
    return (
        <div className="container-app py-8">
            <h1 className="text-3xl font-bold text-surface-100 mb-8">Settings</h1>
            <div className="max-w-2xl space-y-6">
                <Card>
                    <CardHeader>
                        <h2 className="text-lg font-semibold text-surface-100">Profile</h2>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input label="Display Name" placeholder="Your display name" />
                        <Input label="Username" placeholder="username" />
                        <Input label="Email" type="email" placeholder="email@example.com" />
                        <Button>Save Changes</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
