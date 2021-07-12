import { MDXProvider } from "@mdx-js/react";
import "../styles/global.css";
import "../styles/prose-styles.css";
import { Helmet } from "react-helmet";

import Head from "next/head";

import Button from "../components/Button";

const components = { Button };

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Helmet>
        <html lang="en" />
      </Helmet>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          href="/images/favicons/favicon.svg"
          rel="icon"
          type="image/svg+xml"
        />
      </Head>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
