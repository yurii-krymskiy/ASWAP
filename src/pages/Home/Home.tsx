import InfoTitle from "../../components/ui/InfoTitle";
import GradientTitle from "../../components/ui/GradientTitle";
import CustomButton from "../../components/ui/CustomButton";
import PaymentCarousel from "./components/PaymentCarousel/PaymentCarousel";
import ExchangeBlock from "./components/ExchangeBlock/ExchangeBlock";
import ProgressSteps from "./components/ProgressCard/ProgressSteps";
import HomeCardGrid from "./components/HomeCardGrid/HomeCardGrid";
import GlassCardWrapper from "../../components/ui/GlassCardWrapper";
import FAQ from "../../components/layout/FAQ";
import LightRay from "../../components/ui/LightRay";

const Home = () => {
  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[40px] mt-[78px]">
      <LightRay side="left" width={400} />
      <LightRay side="right" width={200} />
      <section className="flex flex-row w-full justify-between">
        <div className="flex flex-col basis-[50%] justify-center">
          <InfoTitle text="The Privacy Focused P2P Platform" isDot={false} />
          <GradientTitle text="Get Crypto Now, Instant Purchase Available" size="64" />
          <p className="text-[#AEAEB8] text-[18px] font-normal mt-[24px] mb-[40px] w-[80%]">
            Buy Bitcoin and 70+ cryptos on ASWAP using credit cards, bank transfers, and more.
          </p>

          <CustomButton text="Let's swap!" className="px-6 h-[48px] w-fit" />

          <PaymentCarousel />
        </div>

        <div className="flex flex-col basis-[40%] items-center justify-center">
          <div className="
            bg-[url('/bg/dots.png')] bg-no-repeat bg-contain bg-top 
            absolute h-[800px] w-[40%] top-0 z-0
          "></div>

          <ExchangeBlock />
        </div>
      </section>

      <section className="flex flex-col pt-[100px] items-center mb-[50px]">
        <div className="text-center mb-[64px]">
          <GradientTitle text="Purchase Crypto in Easy Steps" size="48" />
          <p className="text-[#AEAEB8] text-[16px] mt-[24px]">Send, store, and receive BTC, ETH, USDT and more in your free and secure DEX.</p>
        </div>

        <ProgressSteps />
      </section>

      <section className="flex flex-col relative overflow-hidden mb-[200px]">
        <div className="absolute rotate-counter w-full top-[50px]">
          <img src="/bg/orbit.svg" alt="orbit" className="object-contain w-full" />
        </div>
        <div className="bg-[url('/bg/dark-circle.png')] bg-no-repeat bg-cover h-[450px] flex flex-col justify-end items-center relative">
          <GradientTitle text="Why Aswap Platform?" size="48" />
          <p className="text-[16px] text-[#AEAEB8] mt-[24px]">Your secure gateway to fast, private, and fully decentralized P2P Platform.</p>
          <img src="/bg/stars.png" alt="stars" className="w-[40%]" />

          <div
            className="absolute w-[300px] bottom-0 z-10 
             bg-gradient-to-l from-yellow-400/20 to-transparent
             shadow-[0_0_100px_40px_rgba(255,255,0,0.3)]
             pointer-events-none"
          />
        </div>

        <div className="gradientDiv p-[15px]">
          <HomeCardGrid />
        </div>
      </section>

      <section className="flex flex-row mb-[100px]">
        <div className="basis-[50%] flex justify-center">
          <GlassCardWrapper width="520">
            <div className="bg-[url('/bg/dots-top.png'),url('/bg/dots-bottom.png')] bg-no-repeat bg-[length:100%] bg-[position:top,left_bottom] p-[24px]">
              <div className="p-[24px, 24px, 0, 24px]">
                <GradientTitle
                  size="18"
                  text="Privacy Progress"
                />
                <p className="p2 text-[#AEAEB8] mt-3 mb-6">Empowering your digital freedom with private, secure, and transparent technologies</p>
              </div>
              <div className="flex items-center justify-center relative my-8 w-[90%] m-auto">
                <div className="absolute flex flex-col items-center justify-center z-20 inset-0">
                  <div className="flex items-center flex-row gap-2 mb-2">
                    <img src="/icons/shield-tick.svg" alt="shield-tick" />
                    <GradientTitle size="24" text="99%" />
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

        <div className="basis-[45%] flex flex-col gap-10 justify-center">
          <GradientTitle text="A Coinjoin is..." size="48" />
          <div className="flex flex-row items-start gap-4">
            <img src="/icons/shield-tick-2.svg" alt="shield-tick-2" />
            <p className="p1 text-[#AEAEB8]">
              A collaborative crypto transaction, In a coinjoin, many different users coordinate the creation of one single transaction with inputs and outputs from different users.
            </p>
          </div>
          <div className="flex flex-row items-start gap-4">
            <img src="/icons/shield-tick-2.svg" alt="shield-tick-2" />
            <p className="p1 text-[#AEAEB8]">
              A coinjoin transaction has many standard outputs of the same amounts, which makes it very hard to track them back to their initial inputs.
            </p>
          </div>
          <div className="flex flex-row items-start gap-4">
            <img src="/icons/shield-tick-2.svg" alt="shield-tick-2" />
            <p className="p1 text-[#AEAEB8]">
              Coinjoins allow users to conceal the history of their coins from the public to make their UTXOs fungible on the public Bitcoin network.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-row justify-between">
        <div className="absolute bottom-0 right-0 w-[200px] h-[800px] bg-[url('/bg/dots.right.png')] bg-no-repeat bg-right bg-contain pointer-events-none z-0" />

        <div className="basis-[40%] z-10">
          <GradientTitle text="Got Questions? We've Got Answers!" size="48" />
          <p className="p1 text-[#AEAEB8] mt-6">
            Send, store, and receive BTC, ETH, USDT and more in your free and secure ASWAP P2P Platform.
          </p>
        </div>

        <div className="basis-[50%] z-10">
          <FAQ />
        </div>
      </section>
    </main>
  );
};

export default Home;
