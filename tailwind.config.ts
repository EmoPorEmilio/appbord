import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');
import animatePlugin from 'tailwindcss-animate';

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        xs: '475px',
        ...defaultTheme.screens,
      },
      colors: {
        transparent: 'transparent',
        'bg-100': '#3B5260',
        'bg-200': '#293E4B',
        'bg-300': '#24313a',
        'bg-400': '#1D272E',
        'accent-200': '#FFB2D7',
        'accent-300': '#FF88C0',
        'accent-500': '#DF5C9A',
        white: '#FFFFFF',
        'gray-100': '#C0C6CA',
        'gray-200': '#A2AEB4',
        'primary-100': '#D9F2FF',
        'primary-200': '#D0E9F5',
        'primary-300': '#ADCCDC',
        'primary-400': '#B8DFFF',
        'primary-500': '#75ABC7',
        'primary-600': '#58748B',
        'primary-700': '#4F6D85',
        'primary-800': '#4C6477',
        'success-100': '#E5FFF3',
        'success-400': '#C2FFC8',
        'success-600': '#559D87',
        'warning-100': '#FFFBE5',
        'warning-400': '#FFDD87',
        'warning-600': '#9D8D55',
        'danger-100': '#FFE5E5',
        'danger-400': '#FF8787',
        'danger-600': '#9D5555',
      },
      animation: {
        'star-victory': 'star-victory 2s ease-in-out',
        'gradient-x': 'gradient-x 2s ease',
      },
      keyframes: {
        'gradient-x': {
          '0%, 50%, 100%': {
            'background-size': '500% 100%',
            'background-position': 'left center',
            'background-color': '#DF5C9A',
          },
          '15%, 75%': {
            'background-size': '100% 100%',
            'background-position': 'right center',
            'background-color': '#C2FFC8',
          },
        },
        'star-victory': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.2)',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(2)',
          },
        },
      },
    },
  },
  plugins: [animatePlugin],
};
export default config;
