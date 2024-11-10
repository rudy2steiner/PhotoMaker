import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../components/DropDown";
import DropDown2, { VibeType2 } from "../components/DropDown2";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Github from "../components/GitHub";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
import Script from "next/script";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gradio-app': any;
    }
  }
}

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [generatedDescs, setGeneratedDescs] = useState<string>("");


  return (
    <div className="flex mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Customizing Realistic Human Photos - PhotoMaker</title>
        <meta name='keywords' content='photomaker v2, photomaker style, photomaker, photomakers, photo maker v2, photo maker customizing realistic, photomaker2, photomaker customizing realistic human photos,stacked id embedding, photo maker, image generator' />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/maker.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/maker.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5YS9DK365X"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5YS9DK365X');
        `}
      </Script>
      <Script
            type="module"
            src="https://gradio.s3-us-west-2.amazonaws.com/5.5.0/assets/index-Ya43XIXp.js"
      ></Script>
      <Header />

      <main className="flex flex-1 w-full flex-col items-center justify-center text-center mt-2 sm:my-16">
        <Toaster position="top-center" reverseOrder={false} toastOptions={{ duration: 2000 }} />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <ResizablePanel>
          <AnimatePresence mode="wait">
            <motion.div className="space-y-10 my-4">
              {generatedDescs && (
                <>
                  <div>
                    <h2 className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto">
                      The answer is
                    </h2>
                  </div>
                  <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto  whitespace-pre-wrap">
                    <div
                      className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border text-left"
                      onClick={() => {
                        navigator.clipboard.writeText(generatedDescs);
                        toast("Text copied to clipboard", {
                          icon: "✂️",
                        });
                      }}
                    >
                      <p>{generatedDescs}</p>
                      <blockquote className="mt-4 text-sm border-l-4 border-slate-300 pl-3 text-slate-400">
                        photo-maker.co
                      </blockquote>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
        {error && (
          <p className="text-gray-400 my-5">
            🚨 Server is busy, please try again later, or you can
            <a href="https://azhubaby.com/" className=" underline hover:text-black ml-1">
              Get Pro version
            </a>
            .
          </p>
        )}
        <img src="/images/rf.gif" />
        <h1  className="mx-auto text-xl mb-5 mt-5 font-bold">How to use PhotoMaker V2</h1>
        <video preload="none" controls  muted width="1280" height="800">
          <source src="https://photo-maker.github.io/assets/demo_pm_v2_full.mp4" type="video/mp4" >
          </source>
          Your browser does not support the video tag.
        </video>
        <h1  className="mx-auto text-xl text-left mb-5 mt-10 font-bold">Get Started to Using PhotoMaker</h1>
        <div className="mx-auto max-w-full h-1337px ml-50">
           <gradio-app  src="https://tencentarc-photomaker-v2.hf.space"
            border="0" eager="true" control_page_title="false"
            initial_height="300px" ></gradio-app>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

