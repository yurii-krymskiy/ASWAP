const InputAmount = ({ amount, setAmount }: { amount: string, setAmount: (v: string) => void }) => {
  return (
    <div className="flex flex-row bg-[#1D1D1D] border border-[#181818] h-[48px] rounded-[8px] px-4 items-center gap-4 mb-2">
      <img
        src="/icons/minus.svg"
        alt="minus"
        className="cursor-pointer"
        onClick={() => {
          const newValue = Math.max(0, parseFloat(amount) - 1).toFixed(2);
          setAmount(newValue);
        }}
      />
      <input
        type="number"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="bg-transparent border-none text-[#E5FFF2] text-center w-full outline-none p1 no-spinner"
      />
      <img
        src="/icons/plus.svg"
        alt="plus"
        className="cursor-pointer"
        onClick={() => {
          const newValue = (parseFloat(amount) + 1).toFixed(2);
          setAmount(newValue);
        }}
      />
    </div>

  );
};

export default InputAmount;
