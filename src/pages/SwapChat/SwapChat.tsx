import Chat from "./components/Chat";
import SwapHeader from "./components/SwapHeader";
import SwapRatings from "./components/SwapRatings";

const SwapChat = () => {
  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[16px] md:px-[40px] mt-[20px] md:mt-[40px] mb-10 md:mb-15">
      <section>
        <SwapHeader />
        <div className="bg-transparent md:bg-[#0F0F0F] rounded-[12px] md:border border-[#181818] flex flex-col-reverse md:flex-row gap-4 md:gap-0">
          <SwapRatings />
          <Chat />
        </div>
      </section>
    </main>
  );
};

export default SwapChat;
