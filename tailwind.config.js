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
    "./components/**/*.js",
    "./layouts/**/*.js",
    "./data/**/*.mdx",
  ],
  theme: {
    colors: {
      black: "#060606",
      white: "#fff",
      gray: colors.slate,
      blue: colors.sky,
      yellow: colors.yellow,
      purple: colors.indigo,
      green: colors.green,
      red: colors.rose,
      orange: {
        lightest: "#fceadd",
        lighter: "rgba(234, 126, 49, 0.35)",
        light: "rgba(234, 126, 49, 0.4)",
        DEFAULT: "#ea7e31",
      },
      beige: {
        dark: "#e5e1d9",
        darker: "#DAD7D1",
        DEFAULT: "#f9f7f8",
      },
      navy: {
        lightest: "#F6F9FF",
        lighter: "#8EA3CD",
        light: "#264177",
        DEFAULT: "#192F5B",
        dark: "#182142",
        darkest: "#0A0C1F",
      },
      teal: {
        DEFAULT: "#117C83",
      },
      gold: {
        DEFAULT: "#F3CF4C",
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
      mono: ["'iA Quattro'", ...mono],
      sans: [
        "Untitled",
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
      lineHeight: {
        "extra-loose": "2.25",
      },
      width: {
        "1/20": "5%",
        "3/20": "15%",
        "5/20": "25%",
        "8/20": "40%",
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
