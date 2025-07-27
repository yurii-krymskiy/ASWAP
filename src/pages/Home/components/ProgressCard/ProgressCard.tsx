import InfoTitle from "../../../../components/ui/InfoTitle";
import GradientTitle from "../../../../components/ui/GradientTitle";

const ProgressCard = (
  {
    img,
    title,
    text,
    step
  }: {
    img: string,
    title: string,
    text: string,
    step: string,
  }
) => {
  return (
    <div className="bg-[#0D0D0D] border border-[#181818] rounded-xl flex flex-col md:flex-row md:bg-[url('/bg/dots_card.png')] bg-no-repeat bg-contain bg-right">
      <div className="w-full h-[200px] md:h-full md:w-[40%] mr-20">
        <img
          src={img}
          alt="home-card"
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-col w-full p-4 md:p-0 md:w-[40%] items-start justify-center gap-3 md:gap-5">
        <InfoTitle
          isDot={true}
          text={step}
        />
        <GradientTitle text={title} classname="text-[18px] md:text-[24px]" />
        <p className="text-[14px] md:text-[16px] text-[#AEAEB8]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ProgressCard;
