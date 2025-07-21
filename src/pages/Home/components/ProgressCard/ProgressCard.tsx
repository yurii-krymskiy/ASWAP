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
    <div className="bg-[#0D0D0D] border border-[#181818] rounded-xl flex flex-row bg-[url('/bg/dots_card.png')] bg-no-repeat bg-contain bg-right">
      <div className="w-[40%] mr-20">
        <img
          src={img}
          alt="home-card"
        />
      </div>
      <div className="flex flex-col w-[40%] items-start justify-center gap-5">
        <InfoTitle
          isDot={true}
          text={step}
        />
        <GradientTitle text={title} size="24" />
        <p className="text-[16px] text-[#AEAEB8]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ProgressCard;
