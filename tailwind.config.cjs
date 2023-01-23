/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#A445ED',
        secondary: '#FF5252',
        text: {
          100: '#3A3A3A',
          200: '#2D2D2D',
          300: '#1F1F1F',
          500: '#050505',
        },
        accent: {
          100: '#ffffff',
          200: '#F4F4F4',
          400: '#E9E9E9',
          500: '#757575',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui'],
        serif: ['Lora', 'system-ui'],
        mono: ['Inconsolata', 'system-ui'],
      },
    },
  },
  plugins: [],
};
