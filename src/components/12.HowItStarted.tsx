import React from "react";
import Image from "next/image";

export default function HowItStarted() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 font-sans text-[#111827]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-3xl md:text-[34px] font-bold mb-16 tracking-tight">
          How CiniCloud started?
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[540px] aspect-[1.1] md:aspect-square md:h-[420px]">
              <Image 
                src="/Assets/12/how_cinicloud_started.svg" 
                alt="How CiniCloud Started Illustration" 
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          
          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
            <p className="text-[#374151] text-[15px] md:text-base leading-relaxed">
              Like all other innovations and inventions, Cinicloud started with a simple question
            </p>
            
            <h3 className="text-[22px] md:text-2xl font-bold leading-snug">
              &ldquo;Can we manage the end to end ticketing process in Cloud? &rdquo;
            </h3>
            
            <p className="text-[#374151] leading-[1.8] text-[15px] md:text-base">
              In 2017 the ticketing process required servers and huge infrastructure at theatre level with a 
              legacy ticketing management system. Cinicloud envisioned to move the entire ticketing 
              process to cloud and provide a simple and seamless <strong className="font-bold text-black">PurePlay SaaS based Ticketing system 
              fully based in cloud.</strong>
            </p>
            
            <p className="text-[#374151] leading-[1.8] text-[15px] md:text-base">
              Launching the first version in Dec 2017 and after 5 years of continous innovation CiniCloud is 
              now the <strong className="font-bold text-black">Most Powerful Cloud Based Cinema Ticketing Engine in the world.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
