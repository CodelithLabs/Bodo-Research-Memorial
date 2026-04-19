import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                parrot: {
                    DEFAULT: '#44CC44',
                    50: '#E8F5E8',
                    100: '#D1EBD1',
                    200: '#A3D7A3',
                    300: '#75C375',
                    400: '#55BB55',
                    500: '#44CC44',
                    600: '#33AA33',
                    700: '#228822',
                    800: '#116611',
                    900: '#004400',
                },
                maroon: {
                    DEFAULT: '#800000',
                    50: '#F5E6E6',
                    100: '#EBCCCC',
                    200: '#D79999',
                    300: '#C36666',
                    400: '#A33333',
                    500: '#800000',
                    600: '#660000',
                    700: '#4D0000',
                    800: '#330000',
                    900: '#1A0000',
                },
                ivory: {
                    DEFAULT: '#FFFFF0',
                },
                divider: '#E5E5E5',
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
                'text-primary': '#1A1A1A',
                'text-secondary': '#555555',
                'text-muted': '#777777',
                navy: {
                    950: '#060D1F',
                    900: '#09122A',
                    800: '#0D1A38',
                    700: '#122047',
                    600: '#1A2D5A',
                    500: '#243870',
                },
                amber: {
                    50: '#FDF6E7',
                    100: '#FAE8C0',
                    200: '#F5CE80',
                    400: '#D4A853',
                    500: '#C9922A',
                    600: '#A87420',
                    700: '#7A5215',
                    800: '#4E330C',
                },
                cream: {
                    DEFAULT: '#EDE8DC',
                    muted: '#D6CFBE',
                    faint: 'rgba(237,232,220,0.55)',
                    ghost: 'rgba(237,232,220,0.25)',
                    line: 'rgba(237,232,220,0.08)',
                },
            },
            fontFamily: {
                heading: ['Merriweather', 'serif'],
                display: ['var(--font-playfair)', 'Merriweather', 'serif'],
                body: ['Inter', 'sans-serif'],
                sans: ['var(--font-source-sans)', 'Inter', 'system-ui', 'sans-serif'],
                academic: ['Source Serif Pro', 'serif'],
                serif: ['Source Serif Pro', 'serif'],
            },
            borderColor: {
                gold: 'rgba(212,168,83,0.2)',
                'gold-strong': 'rgba(212,168,83,0.4)',
                subtle: 'rgba(237,232,220,0.08)',
                'subtle-md': 'rgba(237,232,220,0.12)',
            },
            boxShadow: {
                'amber-glow': '0 0 24px rgba(201,146,42,0.12)',
                'card-hover': '0 8px 32px rgba(0,0,0,0.4)',
            },
            backgroundImage: {
                'hero-radial':
                    'radial-gradient(ellipse at 70% 40%, rgba(201,146,42,0.07) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(15,40,100,0.5) 0%, transparent 50%)',
                'gold-line':
                    'linear-gradient(90deg, transparent, rgba(201,146,42,0.5), transparent)',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
                'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'slide-down': 'slideDown 0.5s ease-out forwards',
                'scale-in': 'scaleIn 0.3s ease-out forwards',
                shimmer: 'shimmer 2s infinite',
                float: 'float 3s ease-in-out infinite',
                'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
            },
        },
    },
    plugins: [typography],
};

export default config;
