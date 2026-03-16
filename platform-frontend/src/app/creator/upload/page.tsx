'use client';

import { useState } from 'react';
import { Upload, Image, File, X, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';

export default function UploadPage() {
    const [formData, setFormData] = useState({
        title: '',
        shortDescription: '',
        description: '',
        type: 'game',
        category: 'action',
        tags: [] as string[],
        price: 0,
        version: '1.0.0',
        thumbnail: null as string | null,
    });
    const [tagInput, setTagInput] = useState('');
    const [screenshots, setScreenshots] = useState<string[]>([]);
    const [isDragging, setIsDragging] = useState(false);

    const projectTypes = [
        { value: 'game', label: 'Game' },
        { value: 'mod', label: 'Mod' },
        { value: 'asset', label: 'Asset' },
        { value: 'digital_art', label: 'Digital Art' },
    ];

    const categories = {
        game: ['action', 'adventure', 'rpg', 'strategy', 'simulation', 'sports', 'puzzle', 'horror', 'multiplayer'],
        mod: ['minecraft', 'gta', 'skyrim', 'other'],
        asset: ['audio', 'models', 'textures', 'ui_kits', 'icons'],
        digital_art: ['illustrations', '3d_art', 'concept_art'],
    };

    const handleAddTag = () => {
        if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
            setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
            setTagInput('');
        }
    };

    const handleRemoveTag = (tag: string) => {
        setFormData({ ...formData, tags: formData.tags.filter(t => t !== tag) });
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        // Handle file upload
    };

    return (
        <div className="container-app py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-surface-100 mb-2">Upload Project</h1>
                <p className="text-surface-400">Share your creation with the community</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Form */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Basic Info */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-lg font-semibold text-surface-100">Basic Information</h2>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input
                                label="Project Title"
                                placeholder="Enter your project name"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />

                            <div>
                                <label className="label">Short Description</label>
                                <textarea
                                    placeholder="Brief description (max 200 characters)"
                                    maxLength={200}
                                    value={formData.shortDescription}
                                    onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                                    className="input min-h-[80px]"
                                />
                                <p className="text-xs text-surface-500 mt-1">{formData.shortDescription.length}/200</p>
                            </div>

                            <div>
                                <label className="label">Full Description</label>
                                <textarea
                                    placeholder="Detailed description of your project..."
                                    rows={6}
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="input min-h-[150px]"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Category & Tags */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-lg font-semibold text-surface-100">Category & Tags</h2>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="label">Project Type</label>
                                    <select
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value, category: categories[e.target.value as keyof typeof categories][0] })}
                                        className="input"
                                    >
                                        {projectTypes.map((type) => (
                                            <option key={type.value} value={type.value}>{type.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="label">Category</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="input"
                                    >
                                        {categories[formData.type as keyof typeof categories].map((cat) => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="label">Tags</label>
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Add a tag"
                                        value={tagInput}
                                        onChange={(e) => setTagInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                                    />
                                    <Button type="button" onClick={handleAddTag}>
                                        <Plus className="w-4 h-4" />
                                    </Button>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {formData.tags.map((tag) => (
                                        <Badge key={tag} variant="neutral" className="flex items-center gap-1">
                                            {tag}
                                            <button onClick={() => handleRemoveTag(tag)} className="hover:text-red-400">
                                                <X className="w-3 h-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Media */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-lg font-semibold text-surface-100">Media</h2>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/* Thumbnail */}
                            <div>
                                <label className="label">Thumbnail</label>
                                <div
                                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${isDragging ? 'border-primary-500 bg-primary-500/10' : 'border-surface-600 hover:border-surface-500'
                                        }`}
                                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                    onDragLeave={() => setIsDragging(false)}
                                    onDrop={handleDrop}
                                >
                                    {formData.thumbnail ? (
                                        <div className="relative">
                                            <img src={formData.thumbnail} alt="Thumbnail" className="max-h-48 mx-auto rounded-lg" />
                                            <button
                                                onClick={() => setFormData({ ...formData, thumbnail: null })}
                                                className="absolute top-2 right-2 p-1 bg-surface-800 rounded-full hover:bg-surface-700"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <Image className="w-12 h-12 mx-auto text-surface-400 mb-4" />
                                            <p className="text-surface-400 mb-2">Drag and drop an image or click to browse</p>
                                            <Button variant="outline" size="sm">Choose File</Button>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Screenshots */}
                            <div>
                                <label className="label">Screenshots (max 8)</label>
                                <div className="grid grid-cols-4 gap-3">
                                    {screenshots.map((screenshot, index) => (
                                        <div key={index} className="relative aspect-video bg-surface-700 rounded-lg overflow-hidden">
                                            <img src={screenshot} alt={`Screenshot ${index + 1}`} className="w-full h-full object-cover" />
                                            <button
                                                onClick={() => setScreenshots(screenshots.filter((_, i) => i !== index))}
                                                className="absolute top-1 right-1 p-1 bg-surface-800/80 rounded-full hover:bg-surface-700"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        </div>
                                    ))}
                                    {screenshots.length < 8 && (
                                        <button className="aspect-video border-2 border-dashed border-surface-600 rounded-lg flex items-center justify-center hover:border-surface-500 transition-colors">
                                            <Plus className="w-6 h-6 text-surface-400" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Pricing */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-lg font-semibold text-surface-100">Pricing</h2>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="priceType"
                                        checked={formData.price === 0}
                                        onChange={() => setFormData({ ...formData, price: 0 })}
                                        className="w-4 h-4 text-primary-500"
                                    />
                                    <span className="text-surface-200">Free</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="priceType"
                                        checked={formData.price > 0}
                                        onChange={() => setFormData({ ...formData, price: 9.99 })}
                                        className="w-4 h-4 text-primary-500"
                                    />
                                    <span className="text-surface-200">Paid</span>
                                </label>
                                {formData.price > 0 && (
                                    <Input
                                        type="number"
                                        step="0.01"
                                        min="0.99"
                                        value={formData.price}
                                        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                                        className="w-32"
                                        leftIcon={<span className="text-surface-400">$</span>}
                                    />
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Upload File */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-lg font-semibold text-surface-100">Project File</h2>
                        </CardHeader>
                        <CardContent>
                            <div className="border-2 border-dashed border-surface-600 rounded-xl p-8 text-center hover:border-surface-500 transition-colors cursor-pointer">
                                <File className="w-12 h-12 mx-auto text-surface-400 mb-4" />
                                <p className="text-surface-400 mb-2">Drag and drop your project file</p>
                                <p className="text-xs text-surface-500 mb-4">ZIP, RAR, EXE (max 2GB)</p>
                                <Button variant="outline" size="sm">Choose File</Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Version */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-lg font-semibold text-surface-100">Version</h2>
                        </CardHeader>
                        <CardContent>
                            <Input
                                value={formData.version}
                                onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                                placeholder="1.0.0"
                            />
                            <p className="text-xs text-surface-500 mt-2">Use semantic versioning</p>
                        </CardContent>
                    </Card>

                    {/* Submit */}
                    <div className="space-y-3">
                        <Button className="w-full" size="lg">
                            <Upload className="w-4 h-4" />
                            Publish Project
                        </Button>
                        <Button variant="outline" className="w-full">
                            Save as Draft
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
