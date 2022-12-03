const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const mono = [
  "ui-monospace",
  "SFMono-Regular",
  "Menlo",
  "Monaco",
  "Consolas",
  "Liberation Mono",
  "Courier New",
  "monospace",
];

module.exports = {
  content: [
    "./pages/**/*.js",
    "./pages/**/*.tsx",
    "./components/**/*.js",
    "./components/**/*.tsx",
    "./layouts/**/*.js",
    "./layouts/**/*.tsx",
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
    fontFamily: {
      mono: ["'iA Writer Mono S'", ...mono],
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "San Francisco",
        "Helvetica Neue",
        "Helvetica",
        "Ubuntu",
        "Roboto",
        "Noto",
        "Segoe UI",
        "Arial",
        "sans-serif",
      ],
      serif: ["Newsreader", "IBM Plex Serif", "serif"],
      display: [
        "Albert Sans",
        "-apple-system",
        "BlinkMacSystemFont",
        "San Francisco",
        "Helvetica Neue",
        "Helvetica",
        "Ubuntu",
        "Roboto",
        "Noto",
        "Segoe UI",
        "Arial",
        "sans-serif",
      ],
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.navy.darkest"),
            a: {
              color: theme("colors.blue.700"),
              "&:hover": {
                color: theme("colors.blue.500"),
              },
            },
            img: {
              marginBottom: "0px",
            },
            hr: {
              borderColor: theme("colors.gray.300"),
            },
            "blockquote p": {
              marginTop: "0px",
              marginBottom: "0px",
            },
            "h3 + blockquote": {
              marginTop: "1.5rem",
            },
          },
        },
        xl: {
          css: {
            blockquote: {
              fontSize: theme("fontSize.lg"),
            },
          },
        },
        lg: {
          css: {
            img: {
              marginBottom: "0px",
            },
            blockquote: {
              padding: ".25rem 1rem",
            },
            "h3 + blockquote": {
              marginTop: "1.5rem",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.white"),
            a: {
              color: theme("colors.blue.700"),
              fontWeight: theme("fontWeight.normal"),
              "&:hover": {
                color: theme("colors.blue.600"),
              },
            },
            h1: {
              color: theme("colors.white"),
            },
            h2: {
              color: theme("colors.white"),
            },
            h3: {
              color: theme("colors.white"),
            },
            h4: {
              color: theme("colors.gray.400"),
            },
            blockquote: {
              color: theme("colors.white"),
              borderColor: theme("colors.gray.500"),
            },
            figcaption: {
              color: theme("colors.white"),
            },
            hr: {
              borderColor: theme("colors.gray.600"),
            },
            "strong, em": {
              color: theme("colors.white"),
            },
          },
        },
      }),
    },
  },
  darkMode: "class",
  variants: {
    typography: ["responsive", "dark"],
    extend: {
      margin: ["last"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
