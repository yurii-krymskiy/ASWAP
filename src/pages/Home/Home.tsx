import InfoTitle from "../../components/ui/InfoTitle";
import GradientTitle from "../../components/ui/GradientTitle";
import CustomButton from "../../components/ui/CustomButton";
import PaymentCarousel from "./components/PaymentCarousel";
import ExchangeBlock from "./components/ExchangeBlock";

const Home = () => {

  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[40px] mt-[78px]">
      <section className="flex flex-row w-full justify-between">
        <div className="flex flex-col basis-[50%] justify-center">
          <InfoTitle text="The Privacy Focused P2P Platform" />
          <GradientTitle text="Get Crypto Now, Instant Purchase Available" />
          <p className="text-[#AEAEB8] text-[18px] font-normal mt-[24px] mb-[40px] w-[80%]">
            Buy Bitcoin and 70+ cryptos on ASWAP using credit cards, bank transfers, and more.
          </p>

          <CustomButton text="Start Your Free Trial" />

          <PaymentCarousel />
        </div>

        <div className="flex flex-col basis-[40%] items-center justify-center">
          <div className="
            bg-[url('/bg/dots.png')] bg-no-repeat bg-contain bg-top 
            absolute h-full w-1/2 top-0 z-0
            animate-dots-scroll
          "></div>

          <ExchangeBlock />
        </div>
      </section>
    </main>
  );
};

export default Home;
