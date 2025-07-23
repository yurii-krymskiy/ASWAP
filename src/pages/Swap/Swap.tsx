import React from "react";
import SwapHeader from "./components/SwapHeader";
import SwapChat from "./components/SwapChat";
import SwapRatings from "./components/SwapRatings";

const Swap = () => {
  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[40px] mt-[78px] mb-15">
      <section>
        <SwapHeader />
        <div className="bg-[#0F0F0F] rounded-[12px] border border-[#181818] flex flex-row">
          <SwapRatings />
          <SwapChat />
        </div>
      </section>
    </main>
  );
};

export default Swap;
