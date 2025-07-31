import { Link } from "react-router-dom";
import CustomButton from "../ui/CustomButton";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useOnClickOutside } from "usehooks-ts";
import NavLinks from "../features/NavLinks";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const { connected, connectWallet, disconnectWallet } = useAuth();

  const modalRef = useRef<HTMLDivElement>(null);

  const onClose = () => {
    setNotificationOpen(false);
  };

  useOnClickOutside(modalRef as React.RefObject<HTMLElement>, onClose);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <header style={{ backgroundColor: isMobileMenuOpen ? "#030303" : "transparent" }} className="h-[77px] border-b border-[#181818] flex justify-between items-center px-4 md:px-10 z-20">
      <div className="flex items-center gap-12">
        <Link to="/">
          <img
            src="/logo.svg"
            alt="aswap logo"
            className="w-[106px] h-[29px] md:w-[176px] md:h-[26px] cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
        </Link>

        <nav className="hidden md:block">
          <NavLinks />
        </nav>
      </div>

      <div className="flex flex-row gap-4">
        {connected ? (
          <div className="flex flex-row gap-3 items-center relative">
            <div className="hidden md:flex flex-row gap-3 items-center">
              <div
                className="bg-[#0F0F0F] border border-[#181818] rounded-[4px] w-[40px] h-[40px] flex justify-center items-center"
                onClick={() => setNotificationOpen(!isNotificationOpen)}
              >
                <img src="/icons/notification-box.svg" alt="notification" className="cursor-pointer" />
              </div>
              {isNotificationOpen && (
                <div ref={modalRef} className="absolute flex flex-col gap-3 left-0 h-[450px] w-[350px] overflow-auto bg-[#0F0F0F] border border-[#181818] rounded-[16px] top-[calc(100%+10px)] p-4">
                  {[...Array(5)].map(() => (
                    <div className="w-full flex flex-col bg-[#1D1D1D] rounded-[8px] border border-[#181818] p-4">
                      <p className="text-[#E5FFF2] text-[16px] mb-2">Alarm</p>
                      <p className="text-[#7B7B7B] text-[16px]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
                    </div>
                  ))}
                </div>
              )}

              <Link to="/my-account">
                <div className="bg-[#0F0F0F] cursor-pointer border border-[#181818] px-[6px] rounded-[4px] w-[209px] h-[40px] flex justify-between items-center">
                  <div className="flex flex-row items-center gap-4">
                    <img src="/icons/profile-circle.svg" alt="profile-circle" className="w-[28px]" />
                    <p className="text-[#E3E3E3] text-[14px]">User #344344</p>
                  </div>
                </div>
              </Link>
            </div>
            <Link to="/p2p">
              <CustomButton
                icon="/icons/x-circle-3.svg"
                text="Create order"
                className="h-[36px] md:h-[40px] text-[14px] md:text-[16px] flex flex-row items-center gap-1"
              />
            </Link>
          </div>
        ) : (
          <CustomButton
            text="Connect Wallet"
            onClick={connected ? disconnectWallet : connectWallet}
            className="h-[36px] md:h-[40px] text-[14px] md:text-[16px]"
          />
        )}
        <div className="md:hidden cursor-pointer" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <img
            src={isMobileMenuOpen ? "/icons/close-menu.svg" : "/icons/burger-menu.svg"}
            alt="burger-menu"
          />
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-[77px] left-0 w-full bottom-0 md:hidden mobile-menu-blur" onClick={() => setMobileMenuOpen(false)}>
          <nav className="bg-[#030303] h-fit p-4">
            <NavLinks />
            <p>Notification</p>
            <Link to="/my-account">
              <div className="bg-[#0F0F0F] cursor-pointer border border-[#181818] px-[6px] rounded-[4px] w-full h-[48px] flex justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                  <img src="/icons/profile-circle.svg" alt="profile-circle" className="w-[36px]" />
                  <p className="text-[#E3E3E3] text-[16px]">User #344344</p>
                </div>
              </div>
            </Link>
          </nav>
        </div>
      )}
    </header >
  );
};

export default Header;
