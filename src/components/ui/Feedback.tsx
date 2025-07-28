import Stars from "./Stars";

const Feedback = () => {
  return (
    <div className="flex flex-col gap-1 items-start md:items-end">
      <div className="flex flex-row md:flex-col md:gap-1 items-center gap-2">
        <p className="text-[14px] text-[#7B7B7B]">Positive Feedback</p>
        <div className="flex flex-row items-center">
          <Stars />
          <p className="text-[14px] text-[#E5FFF2] ml-1">100% (1234)</p>
        </div>
      </div>
      <div className="flex flex-row items-center text-[#7B7B7B] gap-2">
        <p className="text-[14px] text-[#3DF097]">Positive:</p>
        <p className="text-[14px] text-[#3DF097]">1000</p>
        |
        <p className="text-[14px] text-[#DC3434]">Positive:</p>
        <p className="text-[14px] text-[#DC3434]">1000</p>
      </div>
    </div>
  );
};

export default Feedback;
