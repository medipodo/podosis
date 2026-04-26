/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#E91E63',
          hover: '#C2185B',
          light: '#FCE4EC',
          ink: '#880E4F',
        },
        ink: {
          DEFAULT: '#1C1C1E',
          muted: '#6E6E73',
        },
        cream: '#FDFCFB',
        bone: '#F7F3F0',
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#128C7E',
        },
        border: '#F0EBEF',
        input: '#F0EBEF',
        ring: '#E91E63',
        background: '#FDFCFB',
        foreground: '#1C1C1E',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1C1C1E',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#1C1C1E',
        },
        primary: {
          DEFAULT: '#E91E63',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#FCE4EC',
          foreground: '#880E4F',
        },
        muted: {
          DEFAULT: '#F7F3F0',
          foreground: '#6E6E73',
        },
        accent: {
          DEFAULT: '#FCE4EC',
          foreground: '#880E4F',
        },
        destructive: {
          DEFAULT: '#DC2626',
          foreground: '#FFFFFF',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        organic: '80px 1rem 80px 1rem',
      },
      boxShadow: {
        'pink-soft': '0 20px 40px -15px rgba(233, 30, 99, 0.18)',
        'pink-glow': '0 8px 24px -8px rgba(233, 30, 99, 0.35)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.6s ease-out both',
        'soft-bounce': 'soft-bounce 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
