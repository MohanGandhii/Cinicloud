import React from "react";
import Image from "next/image";

export default function Founders() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[900px] mx-auto flex flex-col items-center text-center">
        
        {/* Heading */}
        <h2 className="text-[26px] md:text-[32px] font-bold text-black mb-6 tracking-tight leading-snug">
          Founded based on technology and innovation.
        </h2>
        
        {/* Subtitle / Paragraphs */}
        <div className="text-[17px] md:text-[19px] text-[#2c333a] leading-relaxed mb-12">
          <p className="mb-2">
            Our Founders, George and Suresh are two of the 10 Intel BlackBelts who are not Intel Employees.
          </p>
          <p>
            BlackBelt is the highest level of recognition by Intel for technical expertise and innovation.
          </p>
        </div>

        {/* Group Photo */}
        <div className="w-full relative border-[4px] border-[#444647] shadow-sm">
          <Image 
            src="/Assets/14/intel_group_photo.png" 
            alt="Intel BlackBelts Group Photo" 
            width={1200} 
            height={800} 
            className="w-full h-auto block"
            unoptimized
          />
        </div>

      </div>
    </section>
  );
}
