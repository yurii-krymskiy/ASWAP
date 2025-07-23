import React from "react";
import SwapChatHeader from "./SwapChatHeader";
import SwapChatInput from "./SwapChatInput";

const SwapChat = () => {
  return (
    <div className="flex basis-[70%] flex-col">
      <SwapChatHeader />
      <div className="h-[420px] overflow-auto p-4 space-y-4">
        <div className="flex flex-col">
          <div className="bg-[#1D1D1D] text-[#E5FFF2] text-[14px] px-2.5 py-2 rounded-[4px] max-w-[70%] w-fit mb-1">
            Hey! Is the deal still on?
          </div>
          <p className="text-[#7B7B7B] text-[12px]">22:11</p>
        </div>

        <div className="flex flex-col items-end">
          <div className="bg-[#C5C30038] text-[#E5FFF2] text-[14px] px-2.5 py-2 rounded-[4px] max-w-[70%] w-fit mb-1">
            Hey! Is the deal still on?
          </div>
          <p className="text-[#7B7B7B] text-[12px]">22:11</p>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#1D1D1D] text-[#E5FFF2] text-[14px] px-2.5 py-2 rounded-[4px] max-w-[70%] w-fit mb-1">
            Hey! Is the deal still on?
          </div>
          <p className="text-[#7B7B7B] text-[12px]">22:11</p>
        </div>

        <div className="flex flex-col items-end">
          <div className="bg-[#C5C30038] text-[#E5FFF2] text-[14px] px-2.5 py-2 rounded-[4px] max-w-[70%] w-fit mb-1">
            Hey! Is the deal still on?
          </div>
          <p className="text-[#7B7B7B] text-[12px]">22:11</p>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#1D1D1D] text-[#E5FFF2] text-[14px] px-2.5 py-2 rounded-[4px] max-w-[70%] w-fit mb-1">
            Hey! Is the deal still on?
          </div>
          <p className="text-[#7B7B7B] text-[12px]">22:11</p>
        </div>
      </div>
      <SwapChatInput />
    </div>
  );
};

export default SwapChat;
