/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        'primary':'hsl(47, 88%, 63%)',
        'secondary':'hsl(0, 0%, 42%)',
        'dark':'hsl(0, 0%, 7%)',
      },
      fontFamily: {
        figtree: ['Figtree'],
      }
    },
  },
  plugins: [],
}