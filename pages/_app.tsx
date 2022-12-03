import React from "react";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";
import "../styles/global.css";
import "../styles/article.css";

import Head from "next/head";

import Button from "../components/Button";
import Icon from "../components/Icon";
import PostImage from "../components/PostImage";
import PageNote from "../components/PageNote";
import HrSection from "../components/HrSection";
import Reference from "../components/Reference";

const components = {
  Button,
  Icon,
  PostImage,
  PageNote,
  HrSection,
  Reference,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={components}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}
