import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest"></link>
          <meta
            name="description"
            content="Replace you anything in seconds use AI."
          />
          <meta
            property="og:description"
            content="Replace you anything in seconds use AI."
          />
          <meta property="og:title" content="Replace Anything" />
          <meta
            name="twitter:description"
            content="Replace you anything in seconds use AI."
          />
          <meta
            property="og:image"
            content="https://www.replaceany.co/og-image.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@JOJOhanbo" />
          <meta name="twitter:title" content="Replace Anything" />
          <meta name="twitter:description" content="Replace you anything in seconds use AI" />
          <meta name="twitter:image" content="https://www.replaceany.co/og-image.png" />
{/*           <script async src="https://www.googletagmanager.com/gtag/js?id=G-FKCCWR6NB5"></script> */}
{/*           <script */}
{/*             dangerouslySetInnerHTML={{ */}
{/*               __html: ` */}
{/*             window.dataLayer = window.dataLayer || []; */}
{/*             function gtag(){dataLayer.push(arguments);} */}
{/*             gtag('js', new Date()); */}
{/*             gtag('config', 'G-FKCCWR6NB5'); */}
{/*           `, */}
{/*             }} */}
{/*           /> */}

{/*           <script */}
{/*             async src="https://analytics.azhubaby.com/script.js" */}
{/*             data-website-id="c64ce814-2df1-4637-a53b-e07564f1b746"></script> */}

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
