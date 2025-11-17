/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A2E6A",
        primaryDark: "#0F2348",
        // accent: "#F0C050",
        // accentDark: "#D4A032",
        neutral: "#111827",
        accent: "#F36B21",      // orange
        accentDark: "#D94A1F",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: [],
};
