import InfoTitle from "../../components/ui/InfoTitle";
import GradientTitle from "../../components/ui/GradientTitle";
import CustomButton from "../../components/ui/CustomButton";
import PaymentCarousel from "./components/PaymentCarousel/PaymentCarousel";
import ExchangeBlock from "./components/ExchangeBlock/ExchangeBlock";
import ProgressSteps from "./components/ProgressCard/ProgressSteps";
import HomeCard from "./components/HomeCard/HomeCard";

const Home = () => {
  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[40px] mt-[78px]">
      <section className="flex flex-row w-full justify-between">
        <div className="flex flex-col basis-[50%] justify-center">
          <InfoTitle text="The Privacy Focused P2P Platform" isDot={false} />
          <GradientTitle text="Get Crypto Now, Instant Purchase Available" size="64" />
          <p className="text-[#AEAEB8] text-[18px] font-normal mt-[24px] mb-[40px] w-[80%]">
            Buy Bitcoin and 70+ cryptos on ASWAP using credit cards, bank transfers, and more.
          </p>

          <CustomButton text="Start Your Free Trial" />

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

      <section className="flex flex-col pt-[100px] items-center mb-[107px]">
        <div className="text-center mb-[64px]">
          <GradientTitle text="Purchase Crypto in Easy Steps" size="48" />
          <p className="text-[#AEAEB8] text-[16px] mt-[24px]">Send, store, and receive BTC, ETH, USDT and more in your free and secure DEX.</p>
        </div>

        <ProgressSteps />
      </section>

      <section className="flex flex-col relative overflow-hidden">
        <div className="absolute rotate-counter w-full top-[50px]">
          <img src="/bg/orbit.svg" alt="orbit" className="object-contain w-full" />
        </div>
        <div className="bg-[url('/bg/dark-circle.png')] bg-no-repeat bg-cover h-[450px] flex flex-col justify-end items-center relative">
          <GradientTitle text="Why Aswap Wallet?" size="48" />
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
          <div className="bg-[#0D0D0D] w-full h-full rounded-[22px] border border-[#161616] grid grid-cols-3 p-8 gap-6">
            <HomeCard
              img="/images/home-block-2.png"
              title="Open Source"
              text="ASWAP is a free and open-source software. Anyone can see, verify and even contribute to the code."
            />
            <HomeCard
              img="/images/home-block-1.png"
              title="Strong Privacy"
              text="Neither the public nor developers can breach your privacy. Use of coinjoins, block filters and the Tor anonymity network guarantee that."
            />
            <HomeCard
              img="/images/home-block-6.png"
              title="Self-Custodial"
              text="Not your keys, not your bitcoin. You're in full control of your private keys."
            />
            <HomeCard
              img="/images/home-block-5.png"
              title="Simple"
              text="With ASWAP good privacy on crypto just works. Use a simple yet functional wallet with all the features you'd expect."
            />
            <HomeCard
              img="/images/home-block-4.png"
              title="Accessible"
              text="CoinJoin with any amount, from 5,000 sats to BTC and anything in between. ASWAP is the coinjoin protocol under the hood that makes it work."
            />
            <HomeCard
              img="/images/home-block-3.png"
              title="Affordable"
              text="Next generation coinjoin protocol, designed with blockspace efficiency as a priority so you save on mining fees."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
