/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Mapping Tailwind classes to our CSS variables
      colors: {
        sacalii: {
          teal: 'var(--color-teal)',
          gold: 'var(--color-gold)',
          dark: 'var(--color-dark)',
          light: 'var(--color-light)',
          red: 'var(--color-red)',
          bg: 'var(--color-bg)',
        }
      }
    },
  },
  plugins: [],
}