import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Teach you anything in seconds use AI."
          />
          <meta
            property="og:description"
            content="Teach you anything in seconds use AI."
          />
          <meta property="og:title" content="Teach Anything" />
          <meta
            name="twitter:description"
            content="Teach you anything in seconds use AI."
          />
          <meta
            property="og:image"
            content="https://twitterbio.com/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://twitterbio.com/og-image.png"
          />
          {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6121888364111270"
     crossOrigin="anonymous"></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
