/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      fontFamily: {
        'ibm-serif': ['IBM Plex Serif'],
        'poppins': ['Poppins', 'Sans-Serif'],
        'nunito-sans': ['Nunito Sans', 'Sans-Serif'],
      },
      
    },
  },
  plugins: [],
}

