const CoinJoinGrid = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-[repeat(7,auto)] justify-items-start gap-y-2 items-center rounded-[8px]">
        <p className="p2 text-[#7B7B7B] mb-1">Type/Date</p>
        <p className="p2 text-[#7B7B7B] mb-1">Deposit Wallet</p>
        <p className="p2 text-[#7B7B7B] mb-1">Coin</p>
        <p className="p2 text-[#7B7B7B] mb-1">Amount</p>
        <p className="p2 text-[#7B7B7B] mb-1">Destination</p>
        <p className="p2 text-[#7B7B7B] mb-1">TxiD</p>
        <p className="p2 text-[#7B7B7B] mb-1">Status</p>

        {[...Array(5)].map((_, index) => (
          <div className="contents" key={index}>
            <div className="col-span-full h-[1px] w-[100%] bg-[#181818]" />
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-1 items-center">
                <p className="p1 text-[#3DF097]">Deposit</p>
                <p className="p1 text-[#E5FFF2] uppercase">UAH</p>
              </div>
              <p className="p2 text-[#7B7B7B]">23-11-2025 20:44</p>
            </div>
            <p className="p1 text-[#E5FFF2]">Spot Wallet</p>
            <p className="p1 text-[#E5FFF2]">USDT</p>
            <p className="p1 text-[#E5FFF2]">440</p>
            <div className="flex flex-row items-center gap-2">
              <p className="p1 text-[#E5FFF2]">22759648584630833152</p>
              <img src="/icons/copy.svg" alt="copy" className="cursor-pointer" />
              <img src="/icons/link.svg" alt="link" className="cursor-pointer" />
            </div>
            <div className="flex flex-row items-center gap-2">
              <p className="p1 text-[#E5FFF2]">22759648584630833152</p>
              <img src="/icons/copy.svg" alt="copy" className="cursor-pointer" />
              <img src="/icons/link.svg" alt="link" className="cursor-pointer" />
            </div>
            <p className="p1 text-[#3DF097]">
              Completed
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinJoinGrid;
