import Image from "next/image";

export default function WhatYouGet() {
  return (
    <section className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-4xl">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] mb-6">
            What you will get from CiniCloud
          </h2>
          <p className="text-lg md:text-xl text-[#475569] leading-relaxed">
            CiniCloud is a bundled package that consists of B2B as well as B2C applications
            <br className="hidden md:block" />
            which helps your business grow to the next level.
          </p>
        </div>

        {/* Content Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="flex flex-col justify-center lg:col-span-5 lg:pr-8">
            <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-bold text-[#111827] mb-6">
              CiniCloud
            </h3>
            <p className="text-[#334155] text-sm md:text-base leading-[1.8] text-left md:text-justify">
              CiniCloud is an end-to-end integrated platform for theatre
              management, ticketing fulfillment and delivery including all other
              services like locations management, movie cataloging, screen
              management, seat layout management, finance management,
              reporting, and analytics that would be needed by the
              administrators of a theatre chain spread across locations.
            </p>
          </div>

          {/* Right Image Container */}
          <div className="relative w-full lg:col-span-7 aspect-[4/3] rounded-2xl bg-[#fbecec] flex items-end justify-center overflow-hidden pt-12 px-6 sm:px-12">
            <div className="relative w-full h-[95%]">
              <Image
                src="/Assets/7/manage_theatre_effciently.svg"
                alt="Manage Theatre Efficiently"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
