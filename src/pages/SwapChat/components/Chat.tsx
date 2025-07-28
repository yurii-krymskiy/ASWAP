import SwapChatHeader from "./ChatHeader";
import SwapChatInput from "./ChatInput";

const Chat = () => {
  return (
    <div className="flex basis-[70%] flex-col md:border-none md:bg-transparent border border-[#181818] rounded-[8px] bg-[#0F0F0F]">
      <SwapChatHeader />
      <div className="h-[420px] overflow-auto p-4 space-y-4">
        <div className="flex flex-col">
          <div className="bg-[#1D1D1D] text-[#E5FFF2] p2 px-2.5 py-2 rounded-[4px] max-w-[70%] w-fit mb-1">
            Hey! Is the deal still on?
          </div>
          <p className="text-[#7B7B7B] p3">22:11</p>
        </div>

        <div className="flex flex-col items-end">
          <div className="bg-[#C5C30038] text-[#E5FFF2] p2 px-2.5 py-2 rounded-[4px] max-w-[70%] w-fit mb-1">
            Hey! Is the deal still on?
          </div>
          <p className="text-[#7B7B7B] p3">22:11</p>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#1D1D1D] text-[#E5FFF2] p2 px-2.5 py-2 rounded-[4px] max-w-[70%] w-fit mb-1">
            Hey! Is the deal still on?
          </div>
          <p className="text-[#7B7B7B] p3">22:11</p>
        </div>

        <div className="flex flex-col items-end">
          <div className="bg-[#C5C30038] text-[#E5FFF2] p2 px-2.5 py-2 rounded-[4px] max-w-[70%] w-fit mb-1">
            Hey! Is the deal still on?
          </div>
          <p className="text-[#7B7B7B] p3">22:11</p>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#1D1D1D] text-[#E5FFF2] p2 px-2.5 py-2 rounded-[4px] max-w-[70%] w-fit mb-1">
            Hey! Is the deal still on?
          </div>
          <p className="text-[#7B7B7B] p3">22:11</p>
        </div>
      </div>
      <SwapChatInput />
    </div>
  );
};

export default Chat;
