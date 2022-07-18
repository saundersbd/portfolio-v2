import Document, { Html, Head, Main, NextScript } from "next/document";
import { Helmet } from "react-helmet";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Helmet>
          <html lang="en" />
        </Helmet>
        <Head>
          <link
            href="/images/favicons/favicon.svg"
            rel="icon"
            type="image/svg+xml"
          />
        </Head>
        <body className="font-sans text-black bg-black dark:text-white bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-700 dark:to-blue-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
