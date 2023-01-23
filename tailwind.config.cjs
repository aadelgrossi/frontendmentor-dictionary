/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
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
