import GlobalStyles from "../components/GlobalStyles";
import "../styles/global.css";

import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          href="/images/favicons/favicon.svg"
          rel="icon"
          type="image/svg+xml"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
