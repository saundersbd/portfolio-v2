import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Ribbon from "../src/components/Ribbon";
import { soehne, tiemposText } from "./fonts";
import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${soehne.variable} ${tiemposText.variable}`}>
      <body className="font-serif text-slate-12 bg-slate-12 dark:text-slateDark-12 dark:bg-slateDark-3">
        <Ribbon />
        <div className="relative z-0 overflow-hidden shadow-xl bg-slate-1 dark:bg-slateDark-1 rounded-t-2xl dark:shadow-none">
          <Header />
          <div className="max-w-2xl px-6 pb-6 mx-auto sm:px-4 sm:pb-16">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
