const ChatInput = () => {
  return (
    <div className="bg-[#0F0F0F] p-4 flex items-center flex-1">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Type your message..."
          className="pl-6 pr-10 h-[44px] w-full bg-[#1D1D1D] text-[#7B7B7B] text-[14px] rounded-[8px] outline-none"
        />
        <img
          src="/icons/paperclip.svg"
          alt="paperclip"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5"
        />
      </div>
      <button className="flex items-center justify-center px-6">
        <img src="/icons/navigation-pointer.svg" alt="Send" className="cursor-pointer" />
      </button>
    </div>
  );
};

export default ChatInput;
