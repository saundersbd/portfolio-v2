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
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./layouts/**/*.js",
    "./data/**/*.mdx",
  ],
  important: true,
  theme: {
    colors: {
      black: "#060606",
      white: "#fff",
      gray: colors.trueGray,
      blue: colors.sky,
      yellow: colors.yellow,
      purple: colors.indigo,
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
      mono: ["'iA Quattro'", ...mono],
      sans: [
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
    extend: {
      width: {
        "1/20": "5%",
        "3/20": "15%",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray-900"),
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
  darkMode: "media",
  variants: {
    typography: ["responsive", "dark"],
    extend: {
      margin: ["last"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
