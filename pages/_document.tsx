import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/maker.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/maker.png" />
          <link rel="manifest" href="/site.webmanifest"></link>
          <meta
            name="description"
            content="Customizing Realistic Human Photos via Stacked ID Embedding."
          />
          <meta
            property="og:description"
            content="Customizing Realistic Human Photos via Stacked ID Embedding."
          />
          <meta property="og:title" content="PhotoMaker" />
{/*           <meta */}
{/*             name="twitter:description" */}
{/*             content="PhotoMaker: Customizing Realistic Human Photos via Stacked ID Embedding" */}
{/*           /> */}
          <meta
            property="og:image"
            content="https://www.replaceany.co/og-image.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@JOJOhanbo" />
          <meta name="twitter:title" content="PhotoMaker" />
          <meta name="twitter:description" content="Customizing Realistic Human Photos via Stacked ID Embedding" />
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
