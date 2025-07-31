import GradientTitle from "../../components/ui/GradientTitle";
import CustomButton from "../../components/ui/CustomButton";
import PaymentCarousel from "./components/PaymentCarousel/PaymentCarousel";
import ProgressSteps from "./components/ProgressCard/ProgressSteps";
import HomeCardGrid from "./components/HomeCardGrid/HomeCardGrid";
import { coinjoinPoints, faqData } from "./static/data";
import FAQ from "../../components/layout/FAQ";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LightRay from "../../components/features/LightRay";
import InfoTitle from "../../components/features/InfoTitle";
import GlassCardWrapper from "../../components/features/GlassCardWrapper";
import { StarsBackground } from "./components/StarsBG/StarsBG";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[16px] md:px-[40px] mt-[20px] md:mt-[78px]">
      <LightRay side="left" className="w-[200px] left-0 md:w-[400px] md:left-50" />
      <LightRay side="right" className="w-[100px] right-0 md:w-[200px] md:right-75" />
      <section className="flex gap-8 md:gap-0 flex-col-reverse md:flex-row w-full justify-between mb-20 md:mb-40 overflow-hidden">
        <div className="flex flex-col w-[100%] md:w-[50%] justify-center">
          <InfoTitle text="The Privacy Focused P2P Platform" isDot={false} />
          <GradientTitle text="Get Crypto Now, Instant Purchase Available" classname="text-[32px] md:text-[64px]" />
          <p className="text-[#AEAEB8] text-[16px] md:text-[18px] font-normal mt-[12px] md:mt-[24px] mb-[24px] md:mb-[40px] w-[100%] md:w-[80%]">
            Buy Bitcoin and 70+ cryptos on ASWAP using credit cards, bank transfers, and more.
          </p>

          <Link to="/buy-crypto">
            <CustomButton text="Let's swap!" className="px-6 h-[48px] w-fit text-[14px] md:text-[16px]" />
          </Link>

          <div className="w-full">
            <PaymentCarousel />
          </div>
        </div>

        <div
          className={`md:flex hidden flex-col w-[100%] md:w-[55%] h-[600px] items-center justify-center absolute right-0 transition-opacity duration-500 ${isLoaded ? "invisible opacity-0" : "visible opacity-100"
            }`}
        >
          <Spline scene="/robot/scene.splinecode.json" />
        </div>
      </section>

      <section className="flex flex-col items-center md:mb-[50px]">
        <div className="text-center mb-[32px] md:mb-[64px] flex flex-col items-center">
          <GradientTitle text="Purchase Crypto in Easy Steps" classname="text-[24px] md:text-[48px]" />
        </div>

        <ProgressSteps />
      </section>

      <section className="flex flex-col relative overflow-hidden mb-20 md:mb-50">
        <div className="hidden md:block absolute rotate-counter w-full top-[100px]">
          <img src="/bg/orbit.svg" alt="orbit" className="object-contain w-full" />
        </div>

        <div className="h-[250px] md:h-[450px] flex flex-col justify-end items-center relative pb-10 md:p-0">
          <div className="w-full h-full md:w-[80%] md:h-[90%] relative bottom-[-100px]" style={{ clipPath: "ellipse(50% 100% at 50% 100%)" }}>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <GradientTitle text="Why Aswap Platform?" classname="text-[24px] md:text-[48px]" />
              <p className="text-[14px] md:text-[16px] text-[#AEAEB8] mt-3 md:mt-[24px] text-center pb-5 md:pb-0 w-[60%] md:w-[40%]">
                Your secure gateway to fast, private, and fully decentralized P2P Platform.
              </p>
            </div>
            <StarsBackground className="absolute inset-0 w-full h-full z-0" />
          </div>

          <div
            className="absolute w-[100px] md:w-[300px] bottom-0 z-10 
             bg-gradient-to-l from-yellow-400/20 to-transparent
             shadow-[0_0_100px_40px_rgba(255,255,0,0.3)]
             pointer-events-none"
          />
        </div>

        <div className="gradientDiv p-[15px]">
          <HomeCardGrid />
        </div>
      </section>

      <section className="flex flex-col md:flex-row mb-20 md:mb-25">
        <div className="basis-[50%] flex justify-center mb-8 md:mb-0">
          <GlassCardWrapper>
            <div className="bg-[url('/bg/dots-top.png'),url('/bg/dots-bottom.png')] bg-no-repeat bg-[length:100%] bg-[position:top,left_bottom] p-[12px] md:p-[24px]">
              <div className="p-[24px, 24px, 0, 24px]">
                <GradientTitle
                  classname="text-[14px] md:text-[18px]"
                  text="Privacy Progress"
                />
                <p className="text-[12px] md:text-[16px] text-[#AEAEB8] mt-3 mb-6">Empowering your digital freedom with private, secure, and transparent technologies</p>
              </div>
              <div className="flex items-center justify-center relative my-8 w-[90%] m-auto">
                <div className="absolute flex flex-col items-center justify-center z-20 inset-0">
                  <div className="flex items-center flex-row gap-2 mb-2">
                    <img src="/icons/shield-tick.svg" alt="shield-tick" />
                    <GradientTitle classname="text-[14px] md:text-[24px]" text="99%" />
                  </div>
                  <p className="p2 text-[#AEAEB8]">0.8943894894 BTC</p>
                </div>
                <div
                  className="absolute inset-0 z-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle, 
                      rgba(111,207,151,0) 25%, 
                      rgba(111,207,151,0.3) 35%, 
                      rgba(111,207,151,0.5) 45%, 
                      rgba(56,105,77,0.5) 55%, 
                      rgba(56,105,77,0.3) 70%, 
                      rgba(56,105,77,0) 85%)`,
                    filter: "blur(8px)",
                  }}
                />
                <img src="/images/block-circle.png" alt="block-circle" className="z-0" />
              </div>
            </div>
          </GlassCardWrapper>
        </div>

        <div className="basis-[45%] flex flex-col gap-4 md:gap-10 justify-center">
          <GradientTitle text="A Coinjoin is..." classname="text-[24px] md:text-[48px]" />
          {coinjoinPoints.map((text, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-4">
              <img
                src="/icons/shield-tick-2.svg"
                alt="shield tick icon"
                className="w-[16px] md:w-[24px]"
              />
              <p className="text-[14px] md:text-[16px] text-[#AEAEB8]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-between mb-10">
        <div className="absolute bottom-0 right-0 w-[200px] h-[800px] bg-[url('/bg/dots.right.png')] bg-no-repeat bg-right bg-contain pointer-events-none z-0" />

        <div className="w-[100%] md:w-[40%] z-10 mb-8 md:mb-0">
          <GradientTitle text="Got Questions? We've Got Answers!" classname="text-center md:text-left text-[24px] md:text-[48px]" />
          <p className="text-[14px] md:text-[16px] text-[#AEAEB8] mt-3 md:mt-6 text-center md:text-left">
            Send, store, and receive BTC, ETH, USDT and more in your free and secure ASWAP P2P Platform.
          </p>
        </div>

        <div className="w-[100%] md:w-[50%] z-10">
          <FAQ faqData={faqData} />
        </div>
      </section>
    </main>
  );
};

export default Home;
