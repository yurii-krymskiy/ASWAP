import BorderButton from "../../../components/ui/BorderButton";

const ChatHeader = () => {
  return (
    <div className="p-4 border-b border-[#181818] flex flex-row justify-between w-full items-center">
      <div className="flex flex-row gap-3 items-center">
        <div className="w-[40px] h-[40px] rounded-[50%] bg-[#7B7B7B]" />
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-[#E5FFF2] text-[16px] leading-[150%]">
              AnnTomson
            </p>
            <div className="flex items-center justify-center bg-[linear-gradient(180deg,_#FFFD00_-5.87%,_#999800_105.45%)] h-[21px] rounded-[20px] px-2 text-[12px] text-[#020313] leading-[130%]">
              Gold
            </div>
          </div>
          <p className="text-[#7B7B7B] text-[12px]">122 Trades | Jun 2022</p>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <BorderButton
          variant="red"
          text="Cancel Deal"
          icon="/icons/cross-circle.svg"
        />

        <BorderButton
          variant="green"
          text="Mark as Paid"
          icon="/icons/check-circle.svg"
        />
      </div>
    </div>
  );
};

export default ChatHeader;
