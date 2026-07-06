import Image from "next/image";

export default function CloudManagement() {
  return (
    <section className="relative w-full bg-[#fbf8fd] pt-24 flex flex-col items-center text-center overflow-hidden">
      {/* Text Content */}
      <div className="relative z-20 max-w-4xl px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#111827] mb-4 leading-tight">
          Move your theatre to the cloud and manage from anywhere
        </h2>
        <p className="text-lg md:text-xl text-[#475569] mb-12 md:mb-20">
          Our Cloud Management System works seamlessly across the globe.
        </p>
      </div>

      {/* Graphic Container */}
      <div className="relative w-full max-w-[1200px] mx-auto mt-4 px-4 flex justify-center">
        
        {/* We use a relative container that scales with the image */}
        <div className="relative w-full aspect-[16/8] md:aspect-[21/9]">
          
          <Image
            src="/Assets/4/network.png"
            alt="Cloud Network"
            fill
            className="object-contain object-top"
          />

          {/* Animated Moving Dots Overlay */}
          {/* These SVG paths roughly match the dotted lines in the image, and we animate glowing dots along them */}
          <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              {/* Paths for the dots to follow */}
              <path id="path1" d="M 500 150 Q 300 180 160 380" fill="transparent" />
              <path id="path2" d="M 500 150 Q 420 200 360 310" fill="transparent" />
              <path id="path3" d="M 500 150 Q 580 200 640 310" fill="transparent" />
              <path id="path4" d="M 500 150 Q 700 180 840 380" fill="transparent" />
            </defs>

            {/* Glowing Dot 1 */}
            <circle r="4" fill="#8b5cf6" filter="url(#glow)">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 500 150 Q 300 180 160 380" />
            </circle>
            {/* Glowing Dot 2 */}
            <circle r="4" fill="#ec4899" filter="url(#glow)">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 500 150 Q 420 200 360 310" />
            </circle>
            {/* Glowing Dot 3 */}
            <circle r="4" fill="#ec4899" filter="url(#glow)">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 500 150 Q 580 200 640 310" />
            </circle>
            {/* Glowing Dot 4 */}
            <circle r="4" fill="#8b5cf6" filter="url(#glow)">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 500 150 Q 700 180 840 380" />
            </circle>
          </svg>

        </div>
      </div>
    </section>
  );
}
