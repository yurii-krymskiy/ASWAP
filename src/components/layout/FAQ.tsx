import { useState } from "react";

const FAQ = ({ faqData }: { faqData: { question: string, answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-full h-fit md:h-[600px] text-[#DFDFDFB2]">
      <div className="space-y-6">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="relative transition-all duration-300">
              {/* Question container */}
              <div className="bg-[#0E0E0E] rounded-[20px] z-10 relative transition-all duration-300 ease-in-out">
                <button
                  className="flex items-center justify-between w-full p-[21px] pl-4 gap-2"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-[14px] md:text-[18px] text-left font-normal">
                    {faq.question}
                  </h2>
                  <img
                    src={isOpen ? "/icons/close-minus.svg" : "/icons/open-plus.svg"}
                    alt={isOpen ? "Close" : "Open"}
                  />
                </button>
              </div>

              {/* Answer container – no background */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[300px] opacity-100 pt-2" : "max-h-0 opacity-0 pt-0"
                }`}
              >
                <div className="rounded-[30px] p-6 pt-0 pb-0 z-0 relative">
                  <p className="text-[14px] md:text-[18px] font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
