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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime.",
    },
    {
      question: "How do I connect my wallet to the platform?",
      answer:
        "It depends on your insurance provider and coverage. Please consult with them directly to confirm details.",
    },
    {
      question: "Is Aswap Wallet safe to use?",
      answer:
        "No referral is required for most services. You can book an appointment directly through our platform.",
    },
    {
      question: "What can I trade on the platform?",
      answer:
        "We’re open from 8:00 AM to 6:00 PM, Monday to Friday. Weekend appointments are available by request.",
    },
    {
      question: "Are there any fees for using Aswap Wallet?",
      answer:
        "You’ll meet with a professional who will assess your needs and suggest a treatment plan tailored to you.",
    },
  ];

  return (
    <section className="w-full h-[600px] text-[#DFDFDFB2]">
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
                  <h2 className="text-[18px] text-left font-normal">{faq.question}</h2>
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
                  <p className="text-[20px] font-medium">{faq.answer}</p>
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
