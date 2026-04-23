// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#428a26",
          dark: "#2e6a1a",
        },
        secondary: "#86b437",
        accent: "#007ab9",
        authority: "#05417d",
      },
      boxShadow: {
        card: "0 4px 24px rgba(4, 65, 125, 0.08)",
        "card-hover": "0 8px 40px rgba(4, 65, 125, 0.16)",
        button: "0 4px 16px rgba(66, 138, 38, 0.35)",
      },
    },
  },
  plugins: [],
};