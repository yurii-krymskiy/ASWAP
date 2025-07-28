const PlaceOrderModal = () => {
  const coins = [
    {
      name: "USDC",
      label: "USDC Coin",
      image: "/images/usdc.png",
    },
    {
      name: "BNB",
      label: "BNB Coin",
      image: "/images/bnb.png",
    },
    {
      name: "SOL",
      label: "Solana",
      image: "/images/sol.png",
    }
  ];

  return (
    <div className="h-fit w-[300px] md:w-[460px] bg-[#0F0F0F] border border-[#181818] rounded-[12px] p-4">
      <div className="flex items-center gap-2 bg-[#1D1D1D] border border-[#181818] h-[45px] w-full rounded-[8px] px-3 mb-2">
        <img src="/icons/search-lg.svg" alt="search" className="w-5 h-5" />
        <input
          type="text"
          className="bg-transparent text-[#7B7B7B] outline-none w-full text-[12px]"
          placeholder="Search..."
        />
      </div>
      <div className="h-[300px] overflow-auto">
        {coins.map((coin) => (
          <div
            key={coin.name}
            className="flex items-center gap-2 p-2 hover:bg-[#C5C30038] cursor-pointer rounded-[4px]"
          >
            <img src={coin.image} alt={coin.name} className="w-6 h-6" />
            <div>
              <p className="text-[#E5FFF2] text-[14px]">{coin.label}</p>
              <p className="text-[#7B7B7B] text-[12px]">{coin.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceOrderModal;
