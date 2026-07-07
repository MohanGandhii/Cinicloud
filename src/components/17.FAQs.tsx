"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "What is CiniCloud?",
    answer: "CiniCloud is an end to end Cloud based Theatre and Ticketing Platform that helps you automate everything from seat layout, screen management, finance management, POS booking, parking management, F&B, employee management, internet ticketing and sales management across cinemas and locations through cloud."
  },
  {
    question: "What is the advantage of CiniCloud?",
    answer: "CiniCloud is a cloud based solution and hence there is no need for any physical infrastructure needed at a theatre level like servers and server rooms. Also since it is a SaaS based solution you can onboard the platform, configure your theatre and start ticketing in just 3 mins. Once set up, you can configure and control your theatres from a single HQ module from anywhere."
  },
  {
    question: "How CiniCloud will help my business?",
    answer: "CiniCloud helps you manage your end to end theatre management and ticketing process in a single simple and easy platform with zero physical infrastructure needed at a theatre level. This ensures that you can focus on your core business of running the theatres without having to worry about software, servers and the required infrastructure."
  },
  {
    question: "How much time it will take to move your theatre to the cloud?",
    answer: "It will just take 3 mins to signup, configure your theatre and start ticketing in CiniCloud platform. Don't believe it. Just check out the video here."
  },
  {
    question: "How secure is CiniCloud?",
    answer: "CiniCloud is build using the best in practice security practices with the utmost care for user and ticketing data. With end to end secured transmissions and secure encrypted storage of data, we ensure complete peace of mind for you and your business."
  },
  {
    question: "How reliable is CiniCloud?",
    answer: "CiniCloud is a robust cloud based ticketing engine developed using the cutting edge technologies and industry best practices which ensures a secure, scalable and modular system. It can handle hundreds of thousands of transactions every hour with users from apps, websites, third party booking partners etc. It has already completed booking over 10 Million tickets for theatres all over the world."
  },
  {
    question: "What if the internet is not there in my theatre?",
    answer: "CiniCloud is a cloud based system and hence internet connect is mandatory to the functioning of the system. At the same time, the CiniCloud platform is a light weight platform developed for smooth operations in minimum bandwidth internet connections also. We recommend that the theatres have a main internet and a back up internet connection (either Broadband or mobile data) of 2MBPS or above."
  },
  {
    question: "What is the product roadmap of CiniCloud?",
    answer: "Please refer to this link for the product roadmap of CiniCloud. We have been adding new features regularly to the platform to finetune current features and expand new capabilities for the past 5 years. We will be adding new and exciting features to the platform in the upcoming months also. Incase you need any specific feature, please do let us know here."
  },
  {
    question: "What payment gateways are supported?",
    answer: "We provide support for almost all major payment gateways like PayU, Paytm, RazorPay, Stripe etc. Kindly email to support@cinicloud.com incase you need any further information."
  },
  {
    question: "How to get help to set up my theatre?",
    answer: "You can view the detailed step by step videos here on how to set up various aspects of the ticketing process in your theatres like location, screens, schedule, price card, F&B and much more. Incase you need any further support you can connect with us in WhatsApp or email to support@cinicloud.com"
  },
  {
    question: "How can I report issues or get support?",
    answer: "Incase you need any support you can connect with us in WhatsApp or email to support@cinicloud.com"
  },
  {
    question: "How can we partner with CiniCloud to offer services together?",
    answer: "Kindly email us to support@cinicloud.com and we will get in touch with you."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24 px-4 md:px-8 font-sans border-t border-gray-100">
      <div className="max-w-[840px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[36px] font-bold text-black mb-4 tracking-tight">
            FAQs
          </h2>
          <p className="text-[#333333] text-[16px] md:text-[18px]">
            Find answers to all the frequently asked questions here
          </p>
        </div>
        
        {/* Accordion List */}
        <div className="flex flex-col">
          {faqData.map((faq, index) => (
             <div key={index} className="border-b border-[#ececec] last:border-0">
                <button 
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center py-6 text-left text-[#111] hover:opacity-80 transition-opacity"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[16px] md:text-[18px] font-medium pr-8">{faq.question}</span>
                  <span className="text-xl leading-none font-semibold shrink-0 w-6 flex justify-end">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="pb-6 pt-1 text-[#444] text-[15px] leading-[1.8] pr-8 animate-in fade-in slide-in-from-top-1 duration-200">
                     {faq.answer}
                  </div>
                )}
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}
