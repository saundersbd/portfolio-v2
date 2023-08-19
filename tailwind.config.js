const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./app/**/*.tsx",
    "./src/components/**/*.tsx",
    "./data/**/*.mdx",
  ],
  theme: {
    colors: {
      black: "#060606",
      white: "#fefff8",
      gray: colors.gray,
      darkGray: colors.slate,
      stone: colors.stone,
      blue: colors.sky,
      yellow: colors.yellow,
      purple: colors.indigo,
      green: colors.green,
      red: colors.rose,
      orange: colors.orange,
      cyan: colors.blue,
      transparent: colors.transparent,
      mint: {
        50: "#ebf7f2",
        100: "#aee1c9",
        200: "#81d0ac",
        300: "#52be8d",
        400: "#3ca877",
        500: "#339267",
        700: "#2A7955",
      },
    },
    screens: {
      xs: "500px",
      ...defaultTheme.screens,
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    fontSize: {
      xxs: ".75rem",
      xs: ".8125rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sohne)"],
        serif: ["var(--font-tiempos)"],
      },
      lineHeight: {
        "extra-loose": "2.25",
      },
      width: {
        "1/20": "5%",
        "3/20": "15%",
        "5/20": "25%",
        "8/20": "40%",
        "10/20": "50%",
        "16/20": "80%",
        "18/20": "90%",
      },
    },
  },
  variants: {
    typography: ["responsive", "dark"],
    extend: {
      margin: ["last"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
