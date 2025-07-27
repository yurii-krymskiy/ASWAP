import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Start with first open

  const toggleFAQ = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What is Aswap wallet?",
      answer:
        "Aswap Wallet is a non-custodial wallet that enables secure and private access to decentralized P2P trading.",
    },
    {
      question: "How do I connect my wallet to the platform?",
      answer:
        "Click the “Connect Wallet” button and choose your preferred Web3 wallet, such as MetaMask or WalletConnect.",
    },
    {
      question: "Is Aswap Wallet safe to use?",
      answer:
        "Yes, Aswap Wallet uses industry-standard encryption and never stores your private keys or funds. You remain in full control.",
    },
    {
      question: "What can I trade on the platform?",
      answer:
        "You can trade cryptocurrencies directly with other users in a decentralized, peer-to-peer environment—no middlemen involved.",
    },
    {
      question: "Are there any fees for using Aswap Wallet?",
      answer:
        "Aswap charges minimal protocol fees, and you only pay gas fees required by the blockchain. No hidden costs.",
    },
  ];

  return (
    <section className="w-full h-[550px] md:h-[600px] text-[#DFDFDFB2]">
      <div className="space-y-6">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="relative transition-all duration-300">
              <div className="bg-[#0E0E0E] rounded-[20px] z-10 relative transition-all duration-300 ease-in-out">
                <button
                  className="flex items-center justify-between w-full p-[21px] pl-4 gap-2"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-[14px] md:text-[18px] text-left font-normal">{faq.question}</h2>
                  <img
                    src={isOpen ? "/icons/close-minus.svg" : "/icons/open-plus.svg"}
                    alt={isOpen ? "Close" : "Open"}
                  />
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mt-[-10px]" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="rounded-[30px] p-6 pb-0 z-0 relative">
                  <p className="text-[14px] md:text-[18px] font-medium">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
