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
        <body className="font-sans text-black bg-blue-500 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
