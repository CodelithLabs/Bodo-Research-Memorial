import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0F3D2E', // Deep Forest Green
                secondary: '#C9A227', // Warm Gold
                background: '#EFF2F7', // Light Blue‑Gray Tint (softer than ivory)
                accent: '#B65E3C', // Muted Terracotta
                slate: '#1A1A1A', // Dark Slate
                parchment: '#F8F6F1',
                'parchment-light': '#FFFFFF',
                divider: '#F1EFEA',
                heritage: {
                    DEFAULT: '#0F3D2E',
                    50: '#E7ECEB',
                    100: '#D0D9D7',
                    200: '#A1B2AF',
                    300: '#728C87',
                    400: '#43655F',
                    500: '#0F3D2E',
                    600: '#0C3125',
                    700: '#09251C',
                    800: '#061913',
                    900: '#030C09',
                },
                gold: {
                    DEFAULT: '#C9A227',
                    50: '#FBF7E8',
                    100: '#F7EFD1',
                    200: '#EFDFA3',
                    300: '#E7CF75',
                    400: '#DFBF47',
                    500: '#C9A227',
                    600: '#A1821F',
                    700: '#796117',
                    800: '#52410F',
                    900: '#2B2008',
                },
                'text-primary': '#1A1A1A',
                'text-secondary': '#4A4A4A',
                'text-muted': '#717171',
            },
            fontFamily: {
                heading: ['Playfair Display', 'serif'],
                display: ['Playfair Display', 'serif'],
                serif: ['Cormorant Garamond', 'serif'],
                body: ['Inter', 'sans-serif'],
                academic: ['Source Serif 4', 'serif'],
            },
            spacing: {
                section: '6rem',
                'section-sm': '4rem',
            },
            borderRadius: {
                card: '4px',
                button: '2px',
            },
            boxShadow: {
                academic: '0 4px 20px -5px rgba(0, 0, 0, 0.1)',
                'card-hover': '0 10px 30px -10px rgba(0, 0, 0, 0.15)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};

export default config;
