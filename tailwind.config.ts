import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Finlandica', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bf-white': '#ffffff',
        'bf-black': '#191919',
        'bf-darkgray': '#343a40',
        'bf-lightgray': '#e7ebef',
        'bf-gray': '#c7cace',
        'bf-red': '#c12d3b',
        'bf-green': '#0b7724',
        'bf-yellow': '#ffc107',
        'bf-brand-primary': '#002da1',
        'bf-brand-primary-dark': '#002280',
      },
    },
  },
  plugins: [],
};
export default config;
