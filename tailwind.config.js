/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Noto_Sans": ["Noto Sans", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"],
        "Ubuntu_Mono": ["Ubuntu Mono", "monospace"]
      },
      screens: {
        "Small_Laptop_Design": { "max": "1024px", "min": "769px" },
        "Tablet_Design": { "max": "769px", "min": "426px" },
        "Large_Mobile_Design": { "max": "426px", "min": "321px" },
        "Small_Mobile_Design": { "max": "321px" }
      }
    },
  },
  plugins: [],
}

