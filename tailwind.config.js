/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--color-bg)',
          alt: 'var(--color-bg-alt)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          hover: 'var(--color-surface-hover)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          glow: 'var(--color-accent-glow)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        border: 'var(--color-border)',
        card: 'var(--color-card-bg)',
        glass: 'var(--color-glass-bg)',
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
        'glow': '0 0 30px var(--color-accent-glow)',
        'glow-sm': '0 0 15px var(--color-accent-glow)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 40px var(--color-accent-glow)',
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
