'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
    const pathname = usePathname();

    // Determine which section the user was trying to access
    const getSectionInfo = () => {
        const path = pathname.toLowerCase();

        if (path.includes('/leaders') || path.includes('/leader')) {
            return {
                title: 'Leader Not Found',
                description: 'The leader you are looking for may have been removed or does not exist in our records.',
                suggestions: [
                    'Browse our complete list of Bodo leaders',
                    'Search for a different leader by name',
                    'Explore leaders by category or movement'
                ],
                link: '/leaders',
                linkText: 'Explore All Leaders'
            };
        }

        if (path.includes('/movements') || path.includes('/movement')) {
            return {
                title: 'Movement Not Found',
                description: 'The historical movement you are looking for is not in our database.',
                suggestions: [
                    'Explore major Bodo movements throughout history',
                    'Learn about the Bodoland Statehood Movement',
                    'Discover cultural preservation movements'
                ],
                link: '/movements',
                linkText: 'Explore All Movements'
            };
        }

        if (path.includes('/organizations') || path.includes('/organization')) {
            return {
                title: 'Organization Not Found',
                description: 'The organization you are looking for may no longer be active or listed.',
                suggestions: [
                    'Browse historical and current Bodo organizations',
                    'Learn about student unions like ABSU',
                    'Explore political parties and cultural bodies'
                ],
                link: '/organizations',
                linkText: 'Explore All Organizations'
            };
        }

        if (path.includes('/culture') || path.includes('/cultural')) {
            return {
                title: 'Cultural Page Not Found',
                description: 'The cultural topic you are looking for may have been moved or does not exist.',
                suggestions: [
                    'Explore Bodo traditional clothing and attire',
                    'Learn about Bodo music and dance forms',
                    'Discover Bodo cuisine and food traditions'
                ],
                link: '/culture',
                linkText: 'Explore Bodo Culture'
            };
        }

        if (path.includes('/religion') || path.includes('/religious')) {
            return {
                title: 'Religious Content Not Found',
                description: 'The religious topic you are looking for is not available in our records.',
                suggestions: [
                    'Learn about Bathouism - the traditional Bodo religion',
                    'Explore the Kherai festival and its rituals',
                    'Discover Bodo religious traditions and beliefs'
                ],
                link: '/religion',
                linkText: 'Explore Bodo Religion'
            };
        }

        if (path.includes('/history') || path.includes('/historical')) {
            return {
                title: 'Historical Content Not Found',
                description: 'The historical content you are looking for is not available in our records.',
                suggestions: [
                    'Explore the timeline of Bodo history',
                    'Learn about significant historical events',
                    'Discover the journey of the Bodo movement'
                ],
                link: '/history',
                linkText: 'Explore Bodo History'
            };
        }

        if (path.includes('/archive') || path.includes('/digital-archive')) {
            return {
                title: 'Archive Item Not Found',
                description: 'The archive item you are looking for may have been removed or the link is incorrect.',
                suggestions: [
                    'Browse our digital archive collection',
                    'Search for specific documents or images',
                    'Explore historical photographs and records'
                ],
                link: '/archive',
                linkText: 'Explore Digital Archive'
            };
        }

        if (path.includes('/research') || path.includes('/paper')) {
            return {
                title: 'Research Content Not Found',
                description: 'The research paper or topic you are looking for is not available.',
                suggestions: [
                    'Browse available research papers',
                    'Submit your own research for publication',
                    'Explore academic resources on Bodo studies'
                ],
                link: '/research',
                linkText: 'Explore Research'
            };
        }

        if (path.includes('/timeline')) {
            return {
                title: 'Timeline Event Not Found',
                description: 'The historical event you are looking for is not in our timeline.',
                suggestions: [
                    'Explore the complete Bodo history timeline',
                    'Learn about key events from the Bodo movement',
                    'Discover important dates in Bodo history'
                ],
                link: '/timeline',
                linkText: 'Explore Timeline'
            };
        }

        // Default fallback
        return {
            title: 'Page Not Found',
            description: 'The page you are looking for does not exist or has been moved.',
            suggestions: [
                'Return to the homepage to explore our content',
                'Use the search bar to find specific information',
                'Browse our navigation menu for available sections'
            ],
            link: '/',
            linkText: 'Return Home'
        };
    };

    const sectionInfo = getSectionInfo();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
            <div className="max-w-2xl w-full">
                {/* 404 Number */}
                <div className="text-center mb-8">
                    <h1 className="text-8xl md:text-9xl font-bold text-gray-200 select-none">
                        404
                    </h1>
                </div>

                {/* Main Content Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="text-center">
                        {/* Icon */}
                        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg
                                className="w-10 h-10 text-amber-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            {sectionInfo.title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-8">
                            {sectionInfo.description}
                        </p>

                        {/* Suggestions */}
                        <div className="bg-gray-50 rounded-xl p-6 mb-8">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                You might want to:
                            </h3>
                            <ul className="space-y-2">
                                {sectionInfo.suggestions.map((suggestion, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <svg
                                            className="w-4 h-4 text-amber-500 mr-3 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Action Button */}
                        <Link
                            href={sectionInfo.link}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            {sectionInfo.linkText}
                        </Link>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
                    <Link href="/about" className="text-gray-500 hover:text-amber-600 transition-colors">
                        About Us
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/contact" className="text-gray-500 hover:text-amber-600 transition-colors">
                        Contact
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/tribute" className="text-gray-500 hover:text-amber-600 transition-colors">
                        Pay Tribute
                    </Link>
                </div>
            </div>
        </div>
    );
}
