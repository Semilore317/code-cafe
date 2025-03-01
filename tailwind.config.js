/** @type {import('tailwindcss').Config} */
export default {
  content: ["*./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
        secondary: "#64748b",
        darkGray: "#f1dabf",
        lightGray: "272c35",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem"
        }
      }
    },
  },
  plugins: [],
}

