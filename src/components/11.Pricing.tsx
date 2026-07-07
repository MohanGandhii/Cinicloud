import React from "react";

const Pricing = () => {
  return (
    <section className="w-full bg-[#654e66] pt-20 pb-8 px-4 md:px-8 font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 text-white max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-[#e2dce3] text-lg md:text-xl leading-relaxed">
            We are an industry leading company that values honesty, integrity and efficiency taking pride in what we build.
            <br className="hidden md:block" />
            Please select a plan that suits your need.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 w-full">
          
          {/* 1. Starter */}
          <div className="w-full max-w-[320px] mx-auto md:mx-0 bg-white rounded-[20px] overflow-hidden border-[3px] border-black flex flex-col shadow-[8px_8px_0px_0px_#000000] transform transition-all duration-300 hover:scale-[1.05] hover:z-10 hover:shadow-[12px_12px_0px_0px_#000000] origin-center">
            {/* Header section (Light Purple) */}
            <div className="bg-[#f2effb] p-6 flex items-center gap-4 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#6b5ca4] rounded-xl flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 18L3 20H21L20 18H4Z" fill="white"/>
                  <path d="M5 16H19V6C19 4.89543 18.1046 4 17 4H7C5.89543 4 5 4.89543 5 6V16Z" fill="white"/>
                  <circle cx="12" cy="10" r="3" fill="#6b5ca4"/>
                  <path d="M10.5 8.5L13.5 10L10.5 11.5V8.5Z" fill="white"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#111827]">Starter</h3>
                <p className="text-sm text-[#6b7280]">Single Screen</p>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 flex flex-col items-center flex-1 bg-white">
              <div className="flex items-start justify-center mb-1">
                <span className="text-2xl font-bold text-[#111827] mt-2 mr-1">$</span>
                <span className="text-[64px] leading-none font-bold text-[#111827] tracking-tight">99</span>
              </div>
              <p className="text-sm text-[#6b7280] mb-8 mt-2">per month</p>
              
              <p className="font-bold text-sm text-[#111827] mb-10">
                + 5% per ticket
              </p>

              <button className="w-full bg-[#3486c4] hover:bg-[#2b74ab] text-white font-bold py-3.5 px-4 rounded-lg transition-colors">
                Onboard Now
              </button>
            </div>
          </div>

          {/* 2. Miniplex */}
          <div className="w-full max-w-[320px] mx-auto md:mx-0 bg-white rounded-[20px] overflow-hidden border-[3px] border-black flex flex-col shadow-[8px_8px_0px_0px_#000000] transform transition-all duration-300 hover:scale-[1.05] hover:z-10 hover:shadow-[12px_12px_0px_0px_#000000] origin-center">
            {/* Header section (Light Green) */}
            <div className="bg-[#ebfaef] p-6 flex items-center gap-4 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#6b5ca4] rounded-xl flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 18L3 20H21L20 18H4Z" fill="white"/>
                  <path d="M5 16H19V6C19 4.89543 18.1046 4 17 4H7C5.89543 4 5 4.89543 5 6V16Z" fill="white"/>
                  <circle cx="12" cy="10" r="3" fill="#6b5ca4"/>
                  <path d="M10.5 8.5L13.5 10L10.5 11.5V8.5Z" fill="white"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#111827]">Miniplex</h3>
                <p className="text-sm text-[#6b7280]">2 - 5 Screens</p>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 flex flex-col items-center flex-1 bg-white">
              <div className="flex items-start justify-center mb-1">
                <span className="text-2xl font-bold text-[#111827] mt-2 mr-1">$</span>
                <span className="text-[64px] leading-none font-bold text-[#111827] tracking-tight">149</span>
              </div>
              <p className="text-sm text-[#6b7280] mb-8 mt-2">per month</p>
              
              <p className="font-bold text-sm text-[#111827] mb-10">
                + 5% per ticket
              </p>

              <button className="w-full bg-[#3486c4] hover:bg-[#2b74ab] text-white font-bold py-3.5 px-4 rounded-lg transition-colors">
                Onboard Now
              </button>
            </div>
          </div>

          {/* 3. Multiplex */}
          <div className="w-full max-w-[320px] mx-auto md:mx-0 bg-white rounded-[20px] overflow-hidden border-[3px] border-black flex flex-col shadow-[8px_8px_0px_0px_#000000] transform transition-all duration-300 hover:scale-[1.05] hover:z-10 hover:shadow-[12px_12px_0px_0px_#000000] origin-center">
            {/* Header section (Light Yellow) */}
            <div className="bg-[#f9fce7] p-6 flex items-center gap-4 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#6b5ca4] rounded-xl flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 18L3 20H21L20 18H4Z" fill="white"/>
                  <path d="M5 16H19V6C19 4.89543 18.1046 4 17 4H7C5.89543 4 5 4.89543 5 6V16Z" fill="white"/>
                  <circle cx="12" cy="10" r="3" fill="#6b5ca4"/>
                  <path d="M10.5 8.5L13.5 10L10.5 11.5V8.5Z" fill="white"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#111827]">Multiplex</h3>
                <p className="text-sm text-[#6b7280]">6 - 25 Screens</p>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 flex flex-col items-center flex-1 bg-white">
              <div className="flex items-start justify-center mb-1">
                <span className="text-2xl font-bold text-[#111827] mt-2 mr-1">$</span>
                <span className="text-[64px] leading-none font-bold text-[#111827] tracking-tight">249</span>
              </div>
              <p className="text-sm text-[#6b7280] mb-8 mt-2">per month</p>
              
              <p className="font-bold text-sm text-[#111827] mb-10">
                + 5% per ticket
              </p>

              <button className="w-full bg-[#3486c4] hover:bg-[#2b74ab] text-white font-bold py-3.5 px-4 rounded-lg transition-colors">
                Onboard Now
              </button>
            </div>
          </div>

        </div>
        
        {/* Bottom subtle divider/line */}
        <div className="w-full max-w-[1000px] h-[1px] bg-white/20 mt-20"></div>
      </div>
    </section>
  );
};

export default Pricing;
