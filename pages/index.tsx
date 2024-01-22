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
  const [generatedDescs, setGeneratedDescs] = useState<string>("");


  return (
    <div className="flex mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Customizing Realistic Human Photos - PhotoMaker</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/maker.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/maker.png" />
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
        <h1> PhotoMaker - Customizing Realistic Human Photos via Stacked ID Embedding </h1>
        <img src="https://github.com/TencentARC/PhotoMaker/assets/21050959/e72cbf4d-938f-417d-b308-55e76a4bc5c8" alt="photo maker " />
        <iframe
          src="https://tencentarc-photomaker.hf.space"
          style={{ overflow: 'hidden', width: '100%', height: '1337px' }} />
        <div style={{marginTop:'50px'}}>
            <h2 style={{textAlign: 'center'}}>PhotoMaker Q &amp;A</h2>
            <p style={{textAlign:left}>
            <strong>Q:What is Stacked ID Embedding for Customizing Realistic Human Photos?</strong>
            </p>
            <p style={{marginTop:'20px'}}>A:Stacked ID Embedding is a novel technique for personalizing realistic human photographs. It leverages deep learning and generative adversarial networks (GANs) to generate high-fidelity photorealistic images of individuals based on a limited number of input images. This approach employs a stacked embedding architecture, where the input images are encoded into latent representations and then combined with identity embeddings to control the attributes and appearance of the generated images.</p>
            <p style={{marginTop:'20px'}}>
                <strong>Q:What are the Key Components of Stacked ID Embedding?</strong>
            </p>
            <p style={{marginTop:'20px'}}>A:Stacked ID Embedding comprises several key components:</p>
            <p>1.<strong>Encoder Network</strong>: The encoder network extracts latent representations from the input images using a deep convolutional neural network (CNN).</p>
            <p>2.<strong>Stacked Embedding Module</strong>: The stacked embedding module consists of multiple embedding layers. Each layer learns to embed the identity information into the latent representations, allowing for fine-grained control over the generated image's appearance and attributes.</p>
            <p>3.<strong>Generator Network</strong>: The generator network utilizes the latent representations and the embedded identity information to synthesize new photorealistic human images.</p>
            <p>4.<strong>Discriminator Network</strong>: The discriminator network distinguishes between real images and generated images, providing feedback to the generator network to improve the realism and quality of the generated photos..</p>
            <p style={{marginTop:'20px'}}>
                <strong>Q:What are the Advantages of Stacked ID Embedding for Photo Customization?</strong>
            </p>
            <p>A:Stacked ID Embedding offers several advantages for customizing photorealistic human photos:</p>
            <p>1.<strong>High Fidelity</strong>: The generated images exhibit remarkable photorealism, capturing fine details, textures, and subtle variations in facial expressions and poses.</p>
            <p>2.<strong>Personalization</strong>: The approach enables extensive personalization by allowing users to control various attributes such as hair color, eye color, facial shape, and expressions, resulting in images that accurately reflect the user's desired appearance.</p>
            <p>3.<strong>Controllable Variation</strong>: The stacked embedding module enables fine-grained control over the attributes and appearance of the generated images, allowing for seamless blending and morphing between different input images.</p>
            <p>4.<strong>Diverse Applications</strong>: Stacked ID Embedding can be utilized in a wide range of applications, including photo editing, fashion design, entertainment, and social media.</p>
            <p style={{marginTop:'20px'}}>
                <strong>Q:What are Some Real-World Applications of Stacked ID Embedding?</strong>
            </p>
            <p>A:Stacked ID Embedding has potential applications in various domains:</p>
            <p>1.<strong>Personalized Avatars</strong>: It can be employed to create personalized avatars for gaming, social media platforms, and virtual reality environments.</p>
            <p>2.<strong>Virtual Try-Ons</strong>: The technique can facilitate virtual try-ons of clothing and accessories, enabling users to visualize how different items would look on them.</p>
            <p>3.<strong>Photo Editing</strong>: Stacked ID Embedding can be integrated into photo editing software, allowing users to enhance and customize their portraits and selfies.</p>
            <p>4.<strong>Fashion Design</strong>: The approach can assist fashion designers in creating realistic product visualizations, showcasing clothing and accessories on virtual models.</p>
            <p>5.<strong>Entertainment</strong>: It can be utilized in the entertainment industry to generate realistic digital doubles for actors and characters in films, television shows, and video games.</p>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

