import React from 'react';
import FAQItem from './FAQItem';

const FAQ = () => {
  const faqItems = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      isOpen: true
    },
    { question: "Can I change my plan later?", isOpen: false },
    { question: "What is your cancellation policy?", isOpen: false },
    { question: "Can other info be added to an invoice?", isOpen: false },
    { question: "How does billing work?", isOpen: false },
    { question: "How do I change my account email?", isOpen: false }
  ];

  return (
    <section className="flex overflow-hidden flex-col items-center py-24 w-full bg-white max-md:max-w-full">
      <div className="flex flex-col px-8 max-w-full text-center w-[1280px] max-md:px-5">
        <div className="flex flex-col items-center w-full max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[768px]">
            <h2 className="text-4xl font-semibold tracking-tighter leading-none text-gray-900 max-md:max-w-full">
              Frequently asked questions
            </h2>
            <p className="mt-5 text-xl text-slate-600 max-md:max-w-full">
              Everything you need to know about the product and billing.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-8 mt-16 max-w-full w-[1280px] max-md:px-5 max-md:mt-10">
        <div className="flex flex-col max-w-full w-[768px]">
          {faqItems.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;