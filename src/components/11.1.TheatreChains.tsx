import React from "react";
import Image from "next/image";

export default function TheatreChains() {
  return (
    <section className="w-full bg-[#654e66] pb-24 px-4 md:px-8 font-sans">
      <div className="max-w-[1200px] mx-auto pt-12 md:pt-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Left Side: Globe Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-full max-w-[500px] h-[300px] md:h-[400px]">
            <Image
              src="/Assets/11.1/theatre_chains.svg"
              alt="Theatre Chains Global"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">

          <div className="bg-[#785b79] rounded-xl p-5 flex items-center gap-5 max-w-md w-full mb-8 shadow-sm">
            <div className="w-14 h-14 shrink-0 rounded-xl overflow-hidden relative shadow-sm">
              <Image
                src="/Assets/11.1/theatre_chains_icon.svg"
                alt="Theatre Chains Icon"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <h3 className="text-white text-[22px] font-bold leading-tight mb-1">Theatre Chains</h3>
              <p className="text-[#e2dce3] text-sm font-medium">Manage Your Theatre Chains Seamlessly</p>
            </div>
          </div>

          <p className="text-white text-[17px] leading-relaxed max-w-[460px] font-medium mb-10">
            Onboard your theatre chain in just 3 steps and manage your shows, screens, film and genre, schedule management etc., with ease.
          </p>

          <button className="bg-[#4fb674] hover:bg-[#44a266] text-white font-bold py-3.5 px-6 rounded-lg flex items-center gap-3 transition-colors shadow-sm">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
            Contact us for pricing
          </button>

        </div>
      </div>
    </section>
  );
}
