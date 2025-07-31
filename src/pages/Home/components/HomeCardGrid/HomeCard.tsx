import GradientTitle from "../../../../components/ui/GradientTitle";

const HomeCard = ({ img, title, text }: { img: string, title: string, text: string }) => {
  return (
    <div className="border h-full bg-[#0F0F0F] md:bg-transparent border-white/7 backdrop-blur-[20px] rounded-[12px] p-3 md:p-6 flex flex-col gap-2 md:gap-4">
      <img src={img} alt="" className="w-[46px] h-[46px]" />
      <GradientTitle text={title} classname="text-[16px] md:text-[18px]" />
      <p className="text-[14px] text-[#AEAEB8] leading-[150%]">
        {text}
      </p>
    </div>
  );
};

export default HomeCard;
