/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { // Added colon here
        primary: "#706FES",
        secondary: "#1E1F4B",
        text: "#2E3E5C", // Added '#' for the hex code
        accent: "#706FES",
      },
    },
  },
  plugins: [],
}


