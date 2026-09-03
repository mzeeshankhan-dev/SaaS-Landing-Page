/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: {
          950: '#08070C',
          900: '#0B0A11',
          850: '#0F0E17',
          800: '#14131E',
          700: '#1B1A28',
          600: '#242336',
        },
        violet: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        indigo: {
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
        },
        cyan: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
        },
        mist: {
          100: '#F5F4FA',
          300: '#B9B6C9',
          400: '#8D89A3',
          500: '#67637C',
        },
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(139, 92, 246, 0.45)',
        'glow-cyan': '0 0 60px -20px rgba(34, 211, 238, 0.35)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        shimmer: 'shimmer 2.4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
