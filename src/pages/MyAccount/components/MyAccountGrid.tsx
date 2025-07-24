const MyAccountGrid = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-[repeat(7,auto)] justify-items-start gap-y-2 items-center rounded-[8px]">
        <p className="p2 text-[#7B7B7B] mb-1">Type Ad Number</p>
        <p className="p2 text-[#7B7B7B] mb-1">Totla Amount/Order Limit Completed Trade QTY</p>
        <p className="p2 text-[#7B7B7B] mb-1">Price Exchange Rate</p>
        <p className="p2 text-[#7B7B7B] mb-1">Payment Method</p>
        <p className="p2 text-[#7B7B7B] mb-1">Last Updated Time</p>
        <p className="p2 text-[#7B7B7B] mb-1">Status</p>
        <p className="p2 text-[#7B7B7B] mb-1 text-end w-full">Action</p>

        {[...Array(5)].map((_, index) => (
          <div className="contents" key={index}>
            <div className="col-span-full h-[1px] w-[100%] bg-[#181818]" />
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-1 items-center">
                <p className="p1 text-[#DC3434]">Sell</p>
                <p className="p1 text-[#E5FFF2] uppercase">UAH</p>
              </div>
              <p className="p2 text-[#7B7B7B]">55895894587457873</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row items-center">
                <p className="p1 text-[#E5FFF2]">200.00 USDT/</p>
                <p className="p1 text-[#7B7B7B]">200.00 USDT</p>
              </div>
              <p className="p2 text-[#7B7B7B]">55895894587457873</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="p1 text-[#E5FFF2]">10,590.38 UAH</p>
              <p className="p2 text-[#7B7B7B]">
                10,590.38 UAH
              </p>
            </div>
            <p className="p1 text-[#E5FFF2]">Visa</p>
            <div className="flex flex-col gap-1">
              <p className="p1 text-[#E5FFF2]">23-11-2025 20:44</p>
              <p className="p2 text-[#7B7B7B]">
                23-11-2025 20:44
              </p>
            </div>
            <p className="p1 text-[#3DF097]">
              Completed
            </p>
            <div className="flex flex-row items-center gap-2 w-full justify-end">
              <img src="/icons/edit.svg" alt="arrow" className="cursor-pointer" />
              <img src="/icons/trash.svg" alt="arrow" className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAccountGrid;
