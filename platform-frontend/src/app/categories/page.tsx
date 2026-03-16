'use client';

import Link from 'next/link';
import { Gamepad2, Puzzle, FolderOpen, Palette, Sword, Skull, Car, Brain, Music, Box, Image, Type } from 'lucide-react';

const categories = [
    {
        name: 'Games',
        description: 'Full games and prototypes',
        icon: Gamepad2,
        href: '/subjects/games',
        color: 'bg-blue-500',
        subcategories: ['Action', 'Adventure', 'RPG', 'Strategy', 'Simulation', 'Sports', 'Puzzle', 'Horror', 'Multiplayer'],
    },
    {
        name: 'Mods',
        description: 'Game modifications and add-ons',
        icon: Puzzle,
        href: '/subjects/mods',
        color: 'bg-green-500',
        subcategories: ['Minecraft', 'GTA', 'Skyrim', 'Fallout', 'Other'],
    },
    {
        name: 'Assets',
        description: 'Development resources and tools',
        icon: FolderOpen,
        href: '/subjects/assets',
        color: 'bg-purple-500',
        subcategories: ['3D Models', '2D Art', 'Audio', 'UI Kits', 'Icons', 'Textures', 'Fonts'],
    },
    {
        name: 'Digital Art',
        description: 'Artwork and illustrations',
        icon: Palette,
        href: '/subjects/digital-arts',
        color: 'bg-pink-500',
        subcategories: ['Illustrations', 'Concept Art', '3D Art', 'Character Design', 'Environments'],
    },
];

const popularTags = [
    'free', 'indie', '2d', '3d', 'pixel-art', 'open-source',
    'multiplayer', 'singleplayer', 'horror', 'rpg', 'adventure'
];

export default function CategoriesPage() {
    return (
        <div className="container-app py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-surface-100 mb-2">Categories</h1>
                <p className="text-surface-400">Browse projects by category</p>
            </div>

            {/* Main Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                        <Link
                            key={category.name}
                            href={category.href}
                            className="group card card-interactive"
                        >
                            <div className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className={`p-4 ${category.color} rounded-xl group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-semibold text-surface-100 mb-1 group-hover:text-primary-400 transition-colors">
                                            {category.name}
                                        </h2>
                                        <p className="text-surface-400">{category.description}</p>
                                    </div>
                                </div>

                                {/* Subcategories */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {category.subcategories.map((sub) => (
                                        <span
                                            key={sub}
                                            className="px-3 py-1 bg-surface-700/50 text-surface-300 text-sm rounded-full hover:bg-surface-700 transition-colors"
                                        >
                                            {sub}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* Popular Tags */}
            <div>
                <h2 className="text-xl font-semibold text-surface-100 mb-4">Popular Tags</h2>
                <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                        <Link
                            key={tag}
                            href={`/explore?tag=${tag}`}
                            className="px-4 py-2 bg-surface-800 text-surface-300 rounded-lg hover:bg-surface-700 hover:text-surface-100 transition-colors"
                        >
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
