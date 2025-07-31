import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const Footer = () => {
  const [cyprusTime, setCyprusTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = DateTime.now().setZone("Europe/Nicosia");
      setCyprusTime(now.toFormat("yyyy-MM-dd HH:mm:ss"));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="h-fit md:h-[92px] flex flex-col-reverse gap-6 md:gap-0 md:flex-row justify-center md:justify-between items-center py-6 md:py-0 text-[#7B7B7B] text-[10px] md:text-[14px] px-4 md:px-10 border-t border-[#181818]">
      <p>CopyRight © 2025 a-swap.xyz. All Rights Reserved.</p>
      <div className="flex flex-row gap-[56px] items-center">
        <p className="w-[200px]">{cyprusTime}</p>
        <p>24h Volume 108,536 USDT</p>
      </div>
    </footer>
  );
};

export default Footer;
