import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Script from 'next/script';
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />

    </>
  );
}

export default MyApp;
