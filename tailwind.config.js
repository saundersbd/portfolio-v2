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
      colors: {
        slate: {
          1: "#fcfcfd",
          2: "#f9f9fb",
          3: "#f2f2f5",
          4: "#ebebef",
          5: "#e4e4e9",
          6: "#dddde3",
          7: "#d3d4db",
          8: "#b9bbc6",
          9: "#8b8d98",
          10: "#7e808a",
          11: "#60646c",
          12: "#1c2024",
        },
        slateDark: {
          1: "#18181a",
          2: "#1b1b1f",
          3: "#27282d",
          4: "#2e3035",
          5: "#35373c",
          6: "#3c3f44",
          7: "#464b50",
          8: "#5a6165",
          9: "#696e77",
          10: "#7d828a",
          11: "#adb1b8",
          12: "#edeef0",
        },
        jade: {
          1: "#fbfefd",
          2: "#effdf6",
          3: "#e4faef",
          4: "#d7f4e6",
          5: "#c6ecdb",
          6: "#b0e0cc",
          7: "#8fcfb9",
          8: "#56ba9f",
          9: "#29a383",
          10: "#259678",
          11: "#1a7a5e",
          12: "#1d3b31",
        },
        jadeDark: {
          1: "#081911",
          2: "#0b1f16",
          3: "#0f291e",
          4: "#123124",
          5: "#143a2b",
          6: "#184635",
          7: "#1e5e48",
          8: "#238b6f",
          9: "#29a383",
          10: "#25ba92",
          11: "#1fd8a4",
          12: "#adf0d4",
        },
      },
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
