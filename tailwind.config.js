/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        branding: {
          DEFAULT: "#1A75FF",
          secondary: "#0ABFAC",
          tertiary: "#01579B",
          fourth: "#0ECAD5",
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
        light: {
          "yellow-cream": "#FFFBEF",
        },
        warning: "#EF5350",
      },
      fontFamily: {
        Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        Inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backdropBlur: {
        10: "10px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "0",
      },
      screens: {
        sm: "620px",
        md: "750px",
        lg: "960px",
        xl: "1160px",
        "2xl": "1320px",
      },
    },
    screens: {
      xs: "375px",
      xsm: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      base: ["16px", "24px"],
      12: ["12px", "16px"],
      14: ["14px", "20px"],
      18: ["18px", "24px"],
      20: ["20px", "24px"],
      24: ["24px", "28px"],
      26: ["26px"],
      32: ["32px", "36px"],
      40: ["40px", "48px"],
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant(
        "supports-scrollbars",
        "@supports selector(::-webkit-scrollbar)",
      );
      addVariant("scrollbar", "&::-webkit-scrollbar");
      addVariant("scrollbar-track", "&::-webkit-scrollbar-track");
      addVariant("scrollbar-thumb", "&::-webkit-scrollbar-thumb");
    }),
  ],
};
