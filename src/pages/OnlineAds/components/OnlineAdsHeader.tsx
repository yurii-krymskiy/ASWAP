import CustomButton from "../../../components/ui/CustomButton";
import BorderButton from "../../../components/ui/BorderButton";

const OnlineAdsHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center mb-8">
      <div className="flex flex-row gap-4 items-center">
        <div
          className="
            relative w-[48px] h-[48px] bg-[#7B7B7B] border border-[#181818] rounded-full text-[#020313] flex items-center justify-center
            after:content-[''] after:absolute after:w-[10px] after:h-[10px] after:bg-[#3DF097]
            after:bottom-0 after:right-0 after:rounded-full after:border after:border-[#030303] text-[16px] uppercase
          "
        >
          AT
        </div>

        <div className="flex flex-col">
          <p className="p1 text-[#E5FFF2] mb-1">AnnTomson</p>
          <p className="p3 text-[#7B7B7B]">Online | Joined on 2023-04-25 | Deposit 500.00 USDT</p>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <CustomButton
          text="Follow"
          icon="/icons/follow.svg"
          className="h-[34px] px-3 flex items-center justify-center"
        />
        <BorderButton
          variant="gray"
          text="Block"
          icon="/icons/cross-gray-circle.svg"
        />
        <BorderButton
          variant="gray"
          text="Report"
          icon="/icons/info-octagon.svg"
        />
      </div>
    </div>
  );
};

export default OnlineAdsHeader;
