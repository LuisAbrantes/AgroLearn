/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agriculturalGreen: '#2B5E2E',
        machineOrange: '#F59E0B',
        techBlue: '#1D4ED8',
        neutral: '#374151',
      },
    },
  },
  plugins: [],
}
