import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

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
                // ============================================
                // INSTITUTIONAL IDENTITY (20%) - Parrot Green
                // ============================================
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

                // ============================================
                // CULTURAL ACCENT (7%) - Deep Maroon
                // ============================================
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

                // ============================================
                // INTERACTION HIGHLIGHT (3%) - Golden Yellow
                // ============================================
                gold: {
                    DEFAULT: '#FFD700',
                    50: '#FFFCE6',
                    100: '#FFF8CC',
                    200: '#FFF099',
                    300: '#FFE866',
                    400: '#FFE033',
                    500: '#FFD700',
                    600: '#CCAB00',
                    700: '#998100',
                    800: '#665600',
                    900: '#332B00',
                },

                // ============================================
                // BACKGROUND / BASE LAYER (70%)
                // ============================================
                ivory: {
                    DEFAULT: '#FFFFF0',
                    50: '#FFFFF8',
                    100: '#FFFFF5',
                    200: '#FFFFF0',
                    300: '#FFFFEB',
                    400: '#FFFFE5',
                    500: '#FFFFF0',
                },

                // Primary text colors
                'text-primary': '#1A1A1A',
                'text-secondary': '#555555',
                'text-muted': '#777777',
                'text-light': '#999999',

                // Border colors
                border: '#E5E5E5',
                'border-light': '#F0F0F0',
                'border-dark': '#CCCCCC',

                // White card base
                'card-white': '#FFFFFF',

                // ============================================
                // EXISTING COLOR PALETTE (for backward compatibility)
                // Primary now points to heritage green (#0F3D2E)
                // ============================================
                primary: {
                    DEFAULT: '#0F3D2E',
                    50: '#E8F0ED',
                    100: '#D1E1DB',
                    200: '#A3C3B7',
                    300: '#75A593',
                    400: '#558779',
                    500: '#0F3D2E',
                    600: '#0C3528',
                    700: '#09251C',
                    800: '#061913',
                    900: '#030C09',
                },

                secondary: {
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

                background: '#FFFFF0',
                'background-paper': '#FDFCF8',

                accent: {
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

                // Semantic colors
                success: {
                    DEFAULT: '#059669',
                    50: '#ECFDF5',
                    100: '#D1FAE5',
                    200: '#A7F3D0',
                    300: '#6EE7B7',
                    400: '#34D399',
                    500: '#059669',
                    600: '#047857',
                    700: '#065F46',
                    800: '#064E3B',
                    900: '#022C22',
                },

                warning: {
                    DEFAULT: '#D97706',
                    50: '#FFFBEB',
                    100: '#FEF3C7',
                    200: '#FDE68A',
                    300: '#FCD34D',
                    400: '#FBBF24',
                    500: '#D97706',
                    600: '#B45309',
                    700: '#92400E',
                    800: '#78350F',
                    900: '#451A03',
                },

                error: {
                    DEFAULT: '#DC2626',
                    50: '#FEF2F2',
                    100: '#FEE2E2',
                    200: '#FECACA',
                    300: '#FCA5A5',
                    400: '#F87171',
                    500: '#DC2626',
                    600: '#B91C1C',
                    700: '#991B1B',
                    800: '#7F1D1D',
                    900: '#450A0A',
                },

                info: {
                    DEFAULT: '#0284C7',
                    50: '#F0F9FF',
                    100: '#E0F2FE',
                    200: '#BAE6FD',
                    300: '#7DD3FC',
                    400: '#38BDF8',
                    500: '#0284C7',
                    600: '#0369A1',
                    700: '#075985',
                    800: '#0C4A6E',
                    900: '#0C4A6E',
                },

                slate: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                },

                parchment: '#F8F6F1',
                'parchment-light': '#FFFFFF',
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
            },

            fontFamily: {
                // ============================================
                // TYPOGRAPHY SYSTEM
                // ============================================
                // Headings - Merriweather for academic feel
                heading: ['Merriweather', 'serif'],
                display: ['Merriweather', 'serif'],

                // Body text - Inter for readability
                body: ['Inter', 'sans-serif'],

                // Citations / research metadata - Source Serif Pro
                academic: ['Source Serif Pro', 'serif'],
                serif: ['Source Serif Pro', 'serif'],

                // Legacy support
                'sans': ['Inter', 'sans-serif'],
            },

            spacing: {
                section: '6rem',
                'section-sm': '4rem',
            },

            borderRadius: {
                card: '4px',
                button: '2px',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },

            boxShadow: {
                academic: '0 2px 8px -2px rgba(0, 0, 0, 0.1)',
                'card-hover': '0 4px 12px -2px rgba(0, 0, 0, 0.15)',
                'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
                'glow-primary': '0 0 20px rgba(68, 204, 68, 0.3)',
                'glow-secondary': '0 0 15px rgba(128, 0, 0, 0.2)',
                'inner-light': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            },

            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-primary': 'linear-gradient(135deg, #FFFFF0 0%, #F8F6F1 100%)',
                'gradient-accent': 'linear-gradient(135deg, #44CC44 0%, #33AA33 100%)',
                'gradient-hero': 'linear-gradient(180deg, #FFFFF0 0%, #F8F6F1 50%, #F0EEE8 100%)',

                // Woven textile pattern - subtle
                'textile-pattern': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23800000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,

                // Aronai geometric motif - subtle border pattern
                'aronai-pattern': `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q25 0 50 10 T100 10' stroke='%23800000' stroke-width='1' fill='none' opacity='0.1'/%3E%3C/svg%3E")`,
            },

            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
                'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'slide-down': 'slideDown 0.5s ease-out forwards',
                'scale-in': 'scaleIn 0.3s ease-out forwards',
                'shimmer': 'shimmer 2s infinite',
                'float': 'float 3s ease-in-out infinite',
                'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
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
        },
    },
    plugins: [
        typography,
    ],
};

export default config;
