import React from "react";

export default function GetInTouch() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[900px] mx-auto bg-[#2b7cb2] rounded-[12px] py-16 px-6 md:px-12 flex flex-col items-center text-center">
        
        <h2 className="text-[30px] md:text-[36px] font-bold text-white mb-6 tracking-tight">
          Get in touch
        </h2>
        
        <div className="text-[17px] md:text-[19px] text-[#e6f2f9] mb-12 leading-relaxed font-light">
          <p className="mb-2">Lets move your theatre to cloud and manage from anywhere.</p>
          <p>Answer a few short questions and we'll get in touch with you!</p>
        </div>
        
        <button className="bg-[#56a880] hover:bg-[#4a946f] text-white text-[16px] md:text-[18px] font-medium px-10 py-3 rounded-md transition-colors shadow-sm">
          Let’s Get Started
        </button>
        
      </div>
    </section>
  );
}
