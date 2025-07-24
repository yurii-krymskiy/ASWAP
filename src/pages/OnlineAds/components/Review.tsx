import GridButton from "../../../components/ui/GridButton";

const Review = () => {
  return (
    <div className="flex flex-col border-b border-[#181818] py-4">
      <div className="flex flex-row items-center gap-3 mb-4">
        <div
          className="
            relative w-[26px] h-[26px] bg-[#7B7B7B] border border-[#181818] rounded-full text-[#020313] flex items-center justify-center
            text-[12px] uppercase
          "
        >
          AT
        </div>
        <p className="p1 text-[#E5FFF2]">AnnTomson</p>
        <p className="p3 text-[#7B7B7B]">22-03-2025</p>
        <GridButton variant="primary" content="Monobank" />
      </div>
      <div className="flex flex-row items-center gap-2">
        <img src="/icons/like-green.svg" alt="like-green" />
        <p className="p2 text-[#E5FFF2]">No Feedback</p>
      </div>
    </div>
  );
};

export default Review;
