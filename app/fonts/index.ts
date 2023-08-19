import localFont from "next/font/local";

export const soehne = localFont({
  src: [
    {
      path: "./soehne-buch.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./soehne-buch-kursiv.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./soehne-kraftig.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-sohne",
  display: "auto",
});

export const tiemposText = localFont({
  src: [
    {
      path: "./tiempos-text-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./tiempos-text-regular-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-tiempos",
  display: "auto",
});
