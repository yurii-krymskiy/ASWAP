import { Link } from "react-router-dom";
import CustomButton from "../ui/CustomButton";

const Header = () => {
  return (
    <header className="h-[77px] border-b border-[#181818] flex justify-between items-center px-10 flex-row">
      <div className="flex flex-row items-center">
        <Link to="/">
          <img src="/logo.svg" alt="aswap logo" className="w-[176px] h-[26px] mr-12 cursor-pointer" />
        </Link>

        <nav>
          <ul className="text-[#7B7B7B] flex flex-row gap-6 text-[14px]">
            <li className="flex flex-row gap-2 items-center cursor-pointer">
              <Link to="/buy" className="flex items-center gap-2">
                Buy Crypto
                <img src="/icons/arrow.svg" alt="arrow" />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/swap-chat">Swap</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/coinjoin">CoinJoin</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/online-ads">Online ads</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/my-account">My Account</Link>
            </li>
          </ul>
        </nav>
      </div>

      <CustomButton text="Connect Wallet" height="40" />
    </header>
  );
};

export default Header;
