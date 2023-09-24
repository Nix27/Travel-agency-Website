/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-green": {
          light: "rgba(138, 227, 83, 0.52)",
          DEFAULT: "#8AE353"
        },
        "primary-white": "#F4F4F4",
        "primary-black": "#000000"
      }
    },
    screens: {
      xs: "480px",
      sm: "620px",
      md: "768px",
      lg: "1060px",
      xl: "1200px",
      '2xl': "1700px",
    }
  },
  plugins: [],
}

