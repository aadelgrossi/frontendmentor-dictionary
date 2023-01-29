/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#A445ED',
        error: '#FF5252',
        text: {
          100: '#3A3A3A',
          200: '#2D2D2D',
          300: '#1F1F1F',
          500: '#050505',
        },
        accent: {
          200: '#F4F4F4',
          300: '#E9E9E9',
          400: '#979797',
          500: '#757575',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif', 'system-ui'],
        serif: ['Lora', 'serif', 'system-ui'],
        mono: ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [],
};
