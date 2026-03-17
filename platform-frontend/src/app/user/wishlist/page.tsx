'use client';

import { Heart } from 'lucide-react';

export default function WishlistPage() {
    return (
        <div className="container-app py-8">
            <h1 className="text-3xl font-bold text-surface-100 mb-8">Wishlist</h1>
            <div className="text-center py-16">
                <Heart className="w-16 h-16 text-surface-600 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-surface-200 mb-2">Your wishlist is empty</h2>
                <p className="text-surface-400">Save projects to your wishlist to buy later</p>
            </div>
        </div>
    );
}
