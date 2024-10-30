/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'gray-color': '#f2f5fa', 
        'background-color': '#0056d2',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('preline/plugin'),
  ],
}