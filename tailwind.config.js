/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* — Paleta Light Premium (Minimalista & Luxo) — */
        primary: {
          DEFAULT: '#FFFFFF',
          light: '#F8FAFC',
          dark: '#E2E8F0',
        },
        accent: {
          DEFAULT: '#0F172A', // Slate 900
          hover: '#334155', // Slate 700
          glow: 'rgba(15, 23, 42, 0.15)',
        },
        bg: {
          DEFAULT: '#FFFFFF', // Fundo Branco
          alt: '#E2E8F0', // Slate 200 (Cinza sólido para contraste forte)
        },
        text: {
          primary: '#0F172A', // Quase preto para máxima legibilidade
          secondary: '#475569', // Cinza médio
          muted: '#94A3B8', // Cinza claro
        },
        border: 'rgba(15, 23, 42, 0.1)',
        surface: '#FFFFFF',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(2rem, 1.5rem + 4vw, 4.5rem)',
        '4xl': 'clamp(2rem, 1.5rem + 2.5vw, 2.75rem)',
        '3xl': 'clamp(1.75rem, 1.3rem + 2vw, 2.25rem)',
        '2xl': 'clamp(1.375rem, 1.1rem + 1.2vw, 1.75rem)',
        'xl': 'clamp(1.125rem, 1rem + 0.5vw, 1.375rem)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(15, 23, 42, 0.15)',
        'glow-sm': '0 0 15px rgba(15, 23, 42, 0.1)',
        'card': '0 8px 30px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 12px 40px rgba(15, 23, 42, 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      spacing: {
        'section': 'clamp(4rem, 3rem + 5vw, 8rem)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
