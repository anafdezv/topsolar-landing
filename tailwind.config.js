/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './assets/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        cta: "url('../public/images/ctabg.webp')",
        future: "url('../public/images/futurebg.webp')",
      },
    },
  },
  plugins: [],
};
