const DatePicker = () => {
  return (
    <div className="relative w-full px-2 md:px-4 bg-[#0F0F0F] border border-[#181818] rounded-[8px] h-[38px] flex flex-row text-[#7B7B7B] text-[14px] items-center justify-between">
      <input
        type="text"
        placeholder="YYYY-MM-DD"
        className="w-[100px] outline-none"
      />
      <div className="w-[16px]">
        <img src="/icons/arrow-narrow-right.svg" alt="arrow-narrow-right" />
      </div>
      <input
        type="text"
        placeholder="YYYY-MM-DD"
        className="w-[100px] outline-none"
      />
      <div className="w-[16px]">
        <img src="/icons/calendar.svg" alt="calendar" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default DatePicker;
