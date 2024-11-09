import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Script from 'next/script';
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <script defer data-domain="photomaker.co" src="https://plausible.io/js/script.js"></script>
    </>
  );
}

export default MyApp;
