/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        branding: {
          DEFAULT: "#1A75FF",
          secondary: "#0ABFAC",
          tertiary: "#01579B",
        },
        bg: {
          DEFAULT: "#EBF7FC",
        },
        grey: {
          100: "#F7F7F7",
          200: "#EBEEF0",
          300: "#A1ABB2",
          400: "#52616B",
        },
        "neutral-dark": {
          500: "#2C2F33",
        },
        warning: "#EF5350",
      },
      fontFamily: {
        Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        Inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
    },
    fontSize: {
      base: ["16px", "24px"],
      24: ["24px", "28px"],
    },
  },
  plugins: [],
};
