/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* — Paleta Dark Premium (Autoridade & Luxo) — */
        primary: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          dark: '#020617',
        },
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          glow: 'rgba(59, 130, 246, 0.35)',
        },
        bg: {
          DEFAULT: '#0B0F19',
          alt: '#111827',
        },
        text: {
          primary: '#F1F5F9',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        border: 'rgba(255, 255, 255, 0.08)',
        surface: '#1F2937',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 2rem + 5vw, 5rem)',
        '4xl': 'clamp(2rem, 1.5rem + 2.5vw, 2.75rem)',
        '3xl': 'clamp(1.75rem, 1.3rem + 2vw, 2.25rem)',
        '2xl': 'clamp(1.375rem, 1.1rem + 1.2vw, 1.75rem)',
        'xl': 'clamp(1.125rem, 1rem + 0.5vw, 1.375rem)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(59, 130, 246, 0.4)',
        'glow-sm': '0 0 15px rgba(59, 130, 246, 0.25)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.5)',
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
