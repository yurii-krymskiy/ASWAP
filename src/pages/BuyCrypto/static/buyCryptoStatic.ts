export interface CryptoCardData {
  id: string;
  img: string;
  title: string;
  text: string;
}

export const cryptoCards: CryptoCardData[] = [
  {
    id: "bank-transfers",
    img: "/images/crypto-img-1.png",
    title: "Transact Seamlessly Through Bank Transfers",
    text: "Transact effortlessly with an extensive selection of banks and payment networks",
  },
  {
    id: "robust-security",
    img: "/images/crypto-img-3.png",
    title: "Swift Transactions With Robust Security",
    text: "Experience rapid transactions and rest easy knowing your funds are secure",
  },
  {
    id: "zero-fees",
    img: "/images/crypto-img-2.png",
    title: "Zero Fees & Competitive Rates",
    text: "Maximize your investment with zero fees and competitive currency rates",
  },
  {
    id: "large-transactions",
    img: "/images/crypto-img-4.png",
    title: "Tailored for Large Transactions",
    text: "Our platform is optimized to handle and support all transaction sizes.",
  },
];

export const sortOptions = [
  "Completed order",
  "Completion rate",
  "Rating",
];