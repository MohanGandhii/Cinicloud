import Image from "next/image";

export default function Partners() {
  return (
    <section className="w-full bg-white py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Header Content */}
        <div className="text-center mb-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#111827] mb-6">
            Cinemas we have worked with
          </h2>
          <p className="text-lg md:text-xl text-[#475569] leading-relaxed">
            We are very selective about who we work or partner with. We have worked with single cinemas to big cinema chains but we only do work that excites us and with people who are as passionate as we are.
          </p>
        </div>

        {/* Infinite Scrolling Marquee using a single combined image */}
        <div className="relative w-full overflow-hidden mt-8">
          
          {/* Gradient Edges for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-marquee items-center">
            
            {/* First Image instance */}
            <div className="flex-shrink-0">
              {/* Note: Using regular <img> here for easier raw width scaling in a scrolling marquee without absolute positioning constraints */}
              <img 
                src="/Assets/9/theatre_list_new.png" 
                alt="Our Clients" 
                className="w-[1200px] sm:w-[1600px] md:w-[2000px] lg:w-[2400px] h-auto max-w-none object-contain"
              />
            </div>

            {/* Second Image instance for seamless loop */}
            <div className="flex-shrink-0">
              <img 
                src="/Assets/9/theatre_list_new.png" 
                alt="Our Clients" 
                className="w-[1200px] sm:w-[1600px] md:w-[2000px] lg:w-[2400px] h-auto max-w-none object-contain"
              />
            </div>
            
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `
        }} />
      </div>
    </section>
  );
}
