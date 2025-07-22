import CustomButton from "../ui/CustomButton";

const Header = () => {
  return (
    <header className="h-[77px] border-b border-[#181818] flex justify-between items-center px-10 flex-row">
      <div className="flex flex-row items-center">
        <img src="/logo.svg" alt="aswap logo" className="w-[176px] h-[26px] mr-12" />
        <nav>
          <ul className="text-[#7B7B7B] flex flex-row gap-6 text-[14px]">
            <li className="flex flex-row gap-2 items-center cursor-pointer">
              Buy Crypto
              <img src="/icons/arrow.svg" alt="arrow" />
            </li>
            <li className="cursor-pointer">Swap</li>
            <li className="cursor-pointer">CoinJoin</li>
          </ul>
        </nav>
      </div>
      <CustomButton text="Connect Wallet" />
    </header>
  );
};

export default Header;
