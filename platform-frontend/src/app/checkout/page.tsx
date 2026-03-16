'use client';

import Link from 'next/link';
import { ShoppingCart, CreditCard, Lock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export default function CheckoutPage() {
    return (
        <div className="container-app py-8">
            <Link href="/user/library" className="flex items-center gap-2 text-surface-400 hover:text-surface-100 mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back to Library
            </Link>

            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-surface-100 mb-8">Checkout</h1>

                <div className="grid gap-6">
                    {/* Order Summary */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-lg font-semibold text-surface-100">Order Summary</h2>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4 p-4 bg-surface-700/50 rounded-lg">
                                <div className="w-20 h-14 bg-surface-600 rounded-lg" />
                                <div className="flex-1">
                                    <h3 className="font-medium text-surface-100">Space Shooter</h3>
                                    <p className="text-sm text-surface-400">Game</p>
                                </div>
                                <p className="font-medium text-surface-100">$9.99</p>
                            </div>
                            <div className="flex justify-between mt-4 pt-4 border-t border-surface-700">
                                <span className="text-surface-300">Total</span>
                                <span className="text-xl font-bold text-surface-100">$9.99</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Payment */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-lg font-semibold text-surface-100">Payment Method</h2>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3 p-4 border-2 border-primary-500 rounded-lg bg-primary-500/10">
                                <CreditCard className="w-5 h-5 text-primary-400" />
                                <span className="text-surface-100">Credit Card</span>
                            </div>
                            <div className="flex gap-4 text-sm text-surface-400">
                                <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> Secure payment</span>
                            </div>
                            <Button className="w-full" size="lg">
                                Pay $9.99
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
