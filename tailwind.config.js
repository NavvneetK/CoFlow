import { fontFamily } from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
        xs: '360px',
      },
    },
    extend: {
      colors: {
        purple: "#CBACF9",
        blue: {
          100: '#B4C6EE',
          400: '#417BFF',
          500: '#3371FF',
        },
        red: {
          400: '#DD4F56',
          500: '#DC4349',
        },
        dark: {
          100: '#09111F',
          200: '#0B1527',
          300: '#0F1C34',
          350: '#12213B',
          400: '#27344D',
          500: '#2E3D5B',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
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
      },
      backgroundImage: {
        doc: 'url(/assets/images/doc.png)',
        modal: 'url(/assets/images/modal.png)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;