import { cardData } from "../../static/cardData";
import HomeCard from "./HomeCard";
import { TiltWrapper } from "./TiltWrapper";

const HomeCardGrid = () => (
  <div className="md:bg-[#0D0D0D] w-full h-full rounded-[22px] md:border border-[#161616] grid grid-cols-1 md:grid-cols-3 md:p-8 gap-6">
    {cardData.map(({ img, title, text }) => (
      <TiltWrapper key={title} className="h-full">
        <HomeCard img={img} title={title} text={text} />
      </TiltWrapper>
    ))}
  </div>
);

export default HomeCardGrid;
