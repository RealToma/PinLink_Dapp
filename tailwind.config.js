/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C1FF72",
        pageBase: "#0E0E0E",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],

      },
    },
  },
  plugins: [],
};
