import React from "react";
import Image from "next/image";

export default function Awards() {
  const awards = [
    {
      src: "/Assets/15/stay_informed.png",
      text: "Winner of the Intel Best App to Stay Informed Content",
      alt: "Stay Informed Content Award"
    },
    {
      src: "/Assets/15/dixons_home_innovation.png",
      text: "Winner of Intel Dixons Home Innovation Challenge",
      alt: "Dixons Home Innovation Challenge Award"
    },
    {
      src: "/Assets/15/top_innovator_2016.png",
      text: "Intel Worldwide Top Innovator 2016",
      alt: "Top Innovator 2016 Award"
    },
    {
      src: "/Assets/15/app_devlop_backbelt.png",
      text: "Intel BlackBelt for App Development",
      alt: "BlackBelt for App Development Award"
    }
  ];

  return (
    <section className="w-full bg-white py-16 border-y border-gray-200 font-sans">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[32px] font-bold text-black mb-4 tracking-tight">
            Most Awarded Technology Team.
          </h2>
          <p className="text-[#333333] text-[16px] md:text-[18px]">
            The passion for technology and innovation for our products have fetched us awards from all over the world.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative w-full aspect-square mb-6 transition-transform duration-300 group-hover:-translate-y-2">
                <Image 
                  src={award.src} 
                  alt={award.alt} 
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <p className="text-[14px] md:text-[15px] font-medium text-[#111] leading-snug">
                {award.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
