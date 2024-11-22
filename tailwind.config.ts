import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // P521a
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Finlandica', 'sans-serif'],
        fallback: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
      },
      fontSize: {
        'base': '1rem',
        'small': '0.9rem',
        'header-1': '5.653rem',
        'header-2': '3.998rem',
        'header-3': '2.827rem',
        'header-4': '1.999rem',
        'header-5': '1.414rem',
      },
      fontWeight: {
        thin: '300',
        normal: '400',
        bold: '700',
      },
      lineHeight: {
        base: '1.6',
        header: '1.15',
      },
      transitionTimingFunction: {
        DEFAULT: '0.35s cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      borderRadius: {
        bubble: '2rem',
        input: '0.25rem',
      },
      spacing: {
        xxs: '0.15rem',
        xs: '0.25rem',
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '2rem',
        xxl: '3rem',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
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
        'bf-gradient-1': '#000068',
        'bf-gradient-2': '#0048ff',
        'bf-gradient-3': '#19b2ff',
        'bf-brand-secondary': '#CCD7F5',
        'dark-bg': '#1a202c', // P0e4c
        'dark-text': '#a0aec0', // P0e4c
        'dark-primary': '#2d3748', // P0e4c
        'dark-secondary': '#4a5568', // P0e4c
        'dark-accent': '#718096', // P0e4c
      },
    },
  },
  plugins: [],
};
export default config;
