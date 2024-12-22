import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Script from 'next/script';
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <head>
        <script defer data-domain="photomaker.co" src="https://app.pageview.app/js/script.js"></script>
      </head>
      <Component {...pageProps} />
      <Analytics />

    </>
  );
}

export default MyApp;
