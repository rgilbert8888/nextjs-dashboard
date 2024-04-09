import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        green: {
          '50': '#f5f9f4',
          '100': '#e8f2e6',
          '200': '#d2e4ce',
          '300': '#aecea7',
          '400': '#82af79',
          '500': '#5f9255',
          '600': '#4a7742',
          '700': '#44693d',
          '800': '#334c2f',
          '900': '#2b3f28',
          '950': '#142112',
        }
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
