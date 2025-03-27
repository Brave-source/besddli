"use client"

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

interface FAQData {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className="flex items-start gap-4 w-full pt-5 pb-6 px-6 rounded-xl border border-[#b3b3b3] bg-[#fcfcfc] mb-4"
      onClick={toggleAccordion}
    >
      <div className="container flex flex-col items-start gap-4 pr-4 flex-grow">
        <div className="flex flex-col items-start gap-4 self-stretch w-full">
          <div className="self-stretch text-black font-['Inter'] text-lg font-medium leading-7">
            {question}
          </div>
          
          {isOpen && (
            <div className="self-stretch text-[#0d0d0d] font-['Inter'] text-lg font-medium leading-7 mt-2">
              {answer}
            </div>
          )}
        </div>
      </div>
      
      <svg 
        width={28} 
        height={29} 
        viewBox="0 0 28 29" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 mt-1 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
      >
        <path 
          d="M13.9999 17.7591L20.1584 11.6423C20.6178 11.1867 21.3626 11.1867 21.822 11.6423C22.2814 12.0978 22.2814 12.8364 21.822 13.2919L14.8318 20.2335C14.3723 20.6891 13.6274 20.6891 13.168 20.2335L6.17766 13.2919C5.71836 12.8364 5.71836 12.0978 6.17766 11.6423C6.63706 11.1867 7.38186 11.1867 7.84126 11.6423L13.9999 17.7591Z" 
          fill="#4D4D4D" 
        />
      </svg>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqData: FAQData[] = [
    {
      question: "What is BESDDLI all about?",
      answer: "BESDDLI (Benue State Diaspora Development and Linkage Initiative) is a platform that connects Benue State diaspora members with opportunities to contribute to the state's development through investments, mentorship, cultural preservation, and advocacy."
    },
    {
      question: "How can I contribute to Benue's development?",
      answer: "You can contribute by investing in vetted projects, sharing your expertise as a mentor, celebrating Benue's rich culture, or advocating for impactful policies. Each action drives positive change in the community."
    },
    {
      question: "What kind of projects does BESDDLI support?",
      answer: "BESDDLI supports various projects focusing on agriculture, tourism, renewable energy, and cultural preservation, all aimed at fostering sustainable growth and job creation in Benue."
    },
    {
      question: "Is my contribution tracked?",
      answer: "Absolutely! BESDDLI provides real-time updates on your contributions, allowing you to see the tangible impact you are making in the community and beyond."
    },
    {
      question: "How secure is my information?",
      answer: "Your information is secure with us. We implement GDPR-compliant data practices and encrypted transactions to ensure your data privacy and security."
    },
    {
      question: "How can I get support?",
      answer: "We offer 24/7 multilingual support via chat, email, or phone. Our team is here to assist you with any inquiries or concerns you may have."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-center items-center gap-12">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-black font-['Inter'] text-3xl font-bold leading-[42px] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[#0d0d0d] font-['Inter'] text-lg font-medium leading-7">
              Your Questions Answered
            </p>
          </div>
          
          <div className="w-full max-w-6xl mx-auto">
            {faqData.map((faq, index) => (
              <FAQItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;