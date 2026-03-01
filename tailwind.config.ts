import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                parchment: '#F8F6F1',
                'parchment-light': '#FFFFFF',
                divider: '#F1EFEA',
                heritage: {
                    DEFAULT: '#1F3D2B',
                    50: '#E8F0EA',
                    100: '#D1E1D5',
                    200: '#A3C3AB',
                    300: '#75A581',
                    400: '#478757',
                    500: '#1F3D2B',
                    600: '#1A3424',
                    700: '#152A1D',
                    800: '#102115',
                    900: '#0B170E',
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
                'text-secondary': '#555555',
                'text-muted': '#777777',
            },
            fontFamily: {
                heading: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
                display: ['Playfair Display', 'Georgia', 'serif'],
                serif: ['Cormorant Garamond', 'Georgia', 'serif'],
                body: ['Inter', 'Source Sans 3', 'system-ui', 'sans-serif'],
                sans: ['Inter', 'Source Sans 3', 'system-ui', 'sans-serif'],
            },
            spacing: {
                section: '5rem',
                'section-sm': '3rem',
                content: '4.5rem',
            },
            maxWidth: {
                content: '1200px',
                prose: '72ch',
            },
            borderRadius: {
                card: '8px',
                button: '6px',
            },
            boxShadow: {
                card: '0 1px 3px rgba(0, 0, 0, 0.08)',
                'card-hover': '0 4px 12px rgba(0, 0, 0, 0.1)',
                button: '0 1px 2px rgba(0, 0, 0, 0.05)',
                subtle: '0 1px 2px rgba(0, 0, 0, 0.05)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
