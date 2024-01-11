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

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [desc, setDesc] = useState("");
  const [lang, setLang] = useState<VibeType>("English");
  const [difficulty, setDifficulty] = useState<VibeType2>("Easy");
  const [generatedDescs, setGeneratedDescs] = useState<string>("");
  const defultDesc = "How to explain relativity?";

  console.log("Streamed response: ", { generatedDescs });
  const promptObj = {
    "English": "UK English",
    "中文": "Simplified Chinese",
    "繁體中文": "Traditional Chinese",
    "日本語": "Japanese",
    "Italiano": "Italian",
    "Deutsch": "German",
    "Español": "Spanish",
    "Français": "French",
    "Nederlands": "Dutch",
    "한국어": "Korean",
    "ភាសាខ្មែរ": "Khmer",
    "हिंदी": "Hindi",
    "Indonesian": "Indonesian",
  };
  const difficultyObj = {
    "Easy": "Easy",
    "Professional": "Professional",
  };
  const text = desc || defultDesc;

  const generateDesc = async (e: any) => {
    let prompt;
    if (difficultyObj[difficulty] == "Easy") {
      prompt = `Pretend you are GPT-4 model. Explain ${text}${text.slice(-1) === "." ? "" : "."
        } to a 6nd grader in ${promptObj[lang]} with a simple example.`;
    } else {
      prompt = `Pretend you are GPT-4 model. Explain ${text}${text.slice(-1) === "." ? "" : "."
        } in ${promptObj[lang]
        }  in technical terms, divided into two paragraphs, principles and applications. Output format, Principle:, Application.`;
    }
    e.preventDefault();
    setGeneratedDescs("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    console.log("Edge function returned.");

    if (!response.ok) {
      setError(true);
      setLoading(false);
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedDescs((prev) => prev + chunkValue);
    }

    setLoading(false);
  };

  return (
    <div className="flex mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Replace Anything</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6000PLHFK1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6000PLHFK1');
        `}
      </Script> */}

      <Header />

      <main className="flex flex-1 w-full flex-col items-center justify-center text-center mt-2 sm:my-16">
        <h1 className="sm:text-4xl text-2xl max-w-1xl font-bold text-slate-900">
          Replace you{" "}
          <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
            Anything
          </span>{" "}
          in seconds
        </h1>
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
                        replace-anything.com
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
        <iframe
          src="https://modelscope-replaceanything.hf.space"
          style={{ overflow: 'hidden', width: '100%', height: '1337px' }} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

