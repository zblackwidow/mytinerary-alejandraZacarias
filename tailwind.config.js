/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Zilla Slab"', 'serif'], // Usar 'Zilla Slab' como fuente serif
      },
    },
  },
  plugins: [],
};



