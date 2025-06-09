/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Dark theme colors matching the analytics dashboard
        dark: {
          bg: '#0a0a0a',
          surface: '#111111',
          card: '#1a1a1a',
          cardHover: '#222222',
          border: '#2a2a2a',
          borderHover: '#3a3a3a',
          text: '#ffffff',
          textSecondary: '#a1a1aa',
          textTertiary: '#71717a',
        },
        cosmic: {
          purple: '#667eea',
          indigo: '#764ba2',
          pink: '#f093fb',
          coral: '#f5576c',
          blue: '#4facfe',
          lavender: '#c7a7ff',
          mint: '#7bffdb',
          gold: '#ffd97d',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          medium: 'rgba(255, 255, 255, 0.15)',
          dark: 'rgba(0, 0, 0, 0.3)',
          darkCard: 'rgba(26, 26, 26, 0.8)',
          darkCardHover: 'rgba(34, 34, 34, 0.9)',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'cosmic-flow': 'cosmicFlow 20s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'text-shimmer': 'textShimmer 8s ease-in-out infinite',
        'slide-in-left': 'slideInFromLeft 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        'slide-in-right': 'slideInFromRight 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
        'rotate-slow': 'rotateSlow 30s linear infinite',
        'bounce-slow': 'bounceSlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
        '5xl': '96px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
} 