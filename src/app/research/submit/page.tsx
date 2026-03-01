'use client';

import { useState } from 'react';
import { FileText, AlertCircle, CheckCircle, Upload } from 'lucide-react';
import { Button, Input, Card, CardContent, Badge } from '@/components/ui';

const categories = [
    'Leaders',
    'Culture',
    'Religion',
    'History',
    'Language',
    'Music & Dance',
    'Cuisine',
    'Regions',
];

export default function SubmitResearchPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-stone-50 flex items-center justify-center py-12 px-4">
                <Card className="max-w-md w-full">
                    <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Submission Received!</h2>
                        <p className="text-gray-600 mb-6">
                            Thank you for your contribution. Our editorial team will review your submission.
                        </p>
                        <Button onClick={() => setSubmitted(false)} variant="outline" className="w-full">
                            Submit Another Article
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-stone-50">
            <section className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-3 mb-4">
                        <FileText className="w-8 h-8 text-indigo-300" />
                        <Badge variant="secondary" className="bg-indigo-600">Research Portal</Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Submit Your Research</h1>
                    <p className="text-lg text-indigo-100 max-w-2xl">
                        Contribute to the Bodo Research Archive by submitting articles about Bodo heritage.
                    </p>
                </div>
            </section>

            <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Card className="border-0 shadow-xl">
                    <CardContent className="p-8">
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
                            <div className="flex items-start">
                                <AlertCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-amber-900 mb-1">Submission Guidelines</h3>
                                    <ul className="text-sm text-amber-800 list-disc list-inside space-y-1">
                                        <li>All submissions are reviewed by our editorial team</li>
                                        <li>Include proper citations and references</li>
                                        <li>Content must be original or properly attributed</li>
                                        <li>Minimum 500 words for articles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Article Title <span className="text-red-500">*</span>
                                </label>
                                <Input placeholder="Enter the title of your article" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Category <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
                                    <option value="">Select a category</option>
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Abstract / Summary <span className="text-red-500">*</span>
                                </label>
                                <textarea rows={3} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Provide a brief summary" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Full Content <span className="text-red-500">*</span>
                                </label>
                                <textarea rows={12} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-sm" placeholder="Write your article content here" required />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Your Name <span className="text-red-500">*</span>
                                    </label>
                                    <Input placeholder="Your full name" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <Input type="email" placeholder="your@email.com" required />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">References</label>
                                <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" placeholder="List your references" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Attach Files</label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                    <p className="text-sm text-gray-600">Drag and drop files here, or click to browse</p>
                                    <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX up to 10MB</p>
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 pt-4">
                                <Button type="button" variant="outline">Save as Draft</Button>
                                <Button type="submit" disabled={isSubmitting} className="bg-indigo-600 hover:bg-indigo-700">
                                    {isSubmitting ? 'Submitting...' : 'Submit for Review'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
