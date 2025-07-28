import GridButton from "../../../components/ui/GridButton";
import SideButton from "../../../components/ui/SideButton";

const SellGrid = () => {
  return (
    <div className="mb-4">
      <p className="p1 text-[#E5FFF2] mb-4">Online Buy Ads</p>
      <div className="bg-[#1D1D1D] border border-[#181818] grid grid-cols-[repeat(1,auto)] md:grid-cols-[repeat(5,auto)] p-3 md:p-4 justify-items-start gap-y-4 md:gap-y-2 items-center rounded-[8px]">
        <div className="hidden md:contents">
          <p className="p3 text-[#7B7B7B] mb-1">Coin</p>
          <p className="p3 text-[#7B7B7B] mb-1">Price</p>
          <p className="p3 text-[#7B7B7B] mb-1">Order Limits/Available</p>
          <p className="p3 text-[#7B7B7B] mb-1">Payment</p>
          <p className="p3 text-[#7B7B7B] mb-1">Trade</p>
        </div>

        {[...Array(2)].map((_, index) => (
          <div className="contents" key={index}>
            {index === 1 && (<div className="col-span-full h-[1px] w-[100%] bg-[#181818]" />)}
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 inline md:hidden text-[#7B7B7B]">Coin</p>
              <div className="flex flex-row gap-3 items-center">
                <img src="/images/Tether(USDT).png" alt="Tether" className="w-[30px] object-contain" />
                <p className="p1 text-[#E5FFF2]">USDT</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 inline md:hidden text-[#7B7B7B]">Price</p>
              <p className="text-[16px] text-[#E5FFF2] leading-[150%]">55.55 UAH</p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 inline md:hidden text-[#7B7B7B]">Order Limits/Available</p>

              <div className="flex flex-col mt-1">
                <p className="p1 text-[#E5FFF2] mb-1">134.70 USDT</p>
                <p className="text-[#7B7B7B] p2">$5.654 - $2,867</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 inline md:hidden text-[#7B7B7B]">Payment</p>
              <div className="flex gap-1.5">
                <GridButton content="Monobank" />
                <GridButton content="A-bank" />
                <GridButton content={<img src="/icons/more.svg" alt="more" />} />
              </div>
            </div>
            <SideButton text="Sell" variant="sell" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellGrid;
