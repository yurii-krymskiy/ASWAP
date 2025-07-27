import HomeCard from "./HomeCard";

const cardData = [
  {
    img: "/images/home-img-2.png",
    title: "Open Source",
    text: "ASWAP is a free and open-source software. Anyone can see, verify and even contribute to the code.",
  },
  {
    img: "/images/home-img-1.png",
    title: "Strong Privacy",
    text: "Neither the public nor developers can breach your privacy. Use of coinjoins, block filters and the Tor anonymity network guarantee that.",
  },
  {
    img: "/images/home-img-6.png",
    title: "Self-Custodial",
    text: "Not your keys, not your bitcoin. You're in full control of your private keys.",
  },
  {
    img: "/images/home-img-5.png",
    title: "Simple",
    text: "With ASWAP good privacy on crypto just works. Use a simple yet functional wallet with all the features you'd expect.",
  },
  {
    img: "/images/home-img-4.png",
    title: "Accessible",
    text: "CoinJoin with any amount, from 5,000 sats to BTC and anything in between. ASWAP is the coinjoin protocol under the hood that makes it work.",
  },
  {
    img: "/images/home-img-3.png",
    title: "Affordable",
    text: "Next generation coinjoin protocol, designed with blockspace efficiency as a priority so you save on mining fees.",
  },
];

const HomeCardGrid = () => (
  <div className="md:bg-[#0D0D0D] w-full h-full rounded-[22px] md:border border-[#161616] grid grid-cols-1 md:grid-cols-3 md:p-8 gap-6">
    {cardData.map(({ img, title, text }) => (
      <HomeCard key={title} img={img} title={title} text={text} />
    ))}
  </div>
);

export default HomeCardGrid;
