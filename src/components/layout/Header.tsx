import { Link } from "react-router-dom";
import CustomButton from "../ui/CustomButton";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Buy Crypto", path: "/buy" },
  { label: "Swap Chat", path: "/swap-chat" },
  { label: "Swap", path: "/swap" },
  { label: "Online ads", path: "/online-ads" },
  { label: "My Account", path: "/my-account" },
  { label: "Coin join", path: "/coin-join" },
  { label: "P2P", path: "/p2p" },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  return (
    <header style={{ backgroundColor: isMobileMenuOpen ? "#030303" : "transparent" }} className="h-[77px] border-b border-[#181818] flex justify-between items-center px-4 md:px-10 z-20">
      <div className="flex items-center gap-12">
        <Link to="/">
          <img
            src="/logo.svg"
            alt="aswap logo"
            className="w-[106px] h-[29px] md:w-[176px] md:h-[26px] cursor-pointer"
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-6 text-[14px] text-[#7B7B7B]">
            {navLinks.map(({ label, path }) => (
              <li key={path}>
                <Link to={path} className="flex items-center gap-2 cursor-pointer">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-row gap-4">
        <CustomButton text="Connect Wallet" className="h-[36px] md:h-[40px] text-[14px] md:text-[16px]" />
        <div className="md:hidden cursor-pointer" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <img
            src={isMobileMenuOpen ? "/icons/close-menu.svg" : "/icons/burger-menu.svg"}
            alt="burger-menu"
          />
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-[77px] left-0 w-full bottom-0 md:hidden backdrop-blur-[20px] backdrop-filter bg-[rgba(3,3,3,0.2)]">
          <nav className="bg-[#030303] h-fit p-4">
            <ul className="flex flex-col gap-6 text-[16px] text-[#7B7B7B]">
              {navLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="flex items-center gap-2 cursor-pointer">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
