import Image from "next/image";

export default function StatsPromo() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 flex justify-center">
      <div className="max-w-[1200px] w-full bg-[#eaf4eb] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image 
            src="/Assets/3/phone_ticket.png" 
            alt="CiniCloud Phone Ticket" 
            width={600} 
            height={500} 
            className="w-full max-w-[500px] h-auto object-contain drop-shadow-xl mix-blend-multiply"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl md:text-3xl text-slate-700 font-medium mb-1">
            We have booked
          </h2>
          
          <div className="flex items-center flex-wrap justify-center md:justify-start gap-x-2 md:gap-x-4 mb-1">
            <span className="text-5xl sm:text-7xl md:text-[80px] lg:text-[100px] font-bold bg-gradient-to-br from-orange-400 to-orange-500 text-transparent bg-clip-text pb-2">
              10
            </span>
            <span className="text-5xl sm:text-7xl md:text-[80px] lg:text-[100px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e8479e] via-[#a855f7] to-[#3b82f6] pb-2">
              Million
            </span>
            <span className="flex-shrink-0 relative -top-2 ml-2 hidden sm:block">
              {/* Custom SVG Party Popper matching the design */}
              <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ribbon swirl 1 */}
                <path d="M50 50 Q 20 20 40 10" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Ribbon swirl 2 */}
                <path d="M55 45 Q 80 15 90 25" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Confetti dots */}
                <circle cx="25" cy="40" r="3" fill="#3B82F6" stroke="#000" strokeWidth="1.5" />
                <circle cx="45" cy="15" r="4" fill="#EAB308" stroke="#000" strokeWidth="1.5" />
                <circle cx="85" cy="45" r="3" fill="#F43F5E" stroke="#000" strokeWidth="1.5" />
                <circle cx="70" cy="15" r="3" fill="#10B981" stroke="#000" strokeWidth="1.5" />
                {/* Star 1 */}
                <path d="M25 65 L27 60 L32 60 L28 57 L30 52 L25 55 L20 52 L22 57 L18 60 L23 60 Z" fill="#EAB308" stroke="#000" strokeWidth="1.5" />
                {/* Star 2 */}
                <path d="M65 30 L67 25 L72 25 L68 22 L70 17 L65 20 L60 17 L62 22 L58 25 L63 25 Z" fill="#FFF" stroke="#000" strokeWidth="1.5" />
                {/* Main Cone Body */}
                <path d="M85 85 L45 65 L75 40 Z" fill="#F43F5E" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
                {/* White stripes on cone */}
                <path d="M55 60 L70 45" stroke="#FFF" strokeWidth="8" />
                <path d="M65 72 L80 57" stroke="#FFF" strokeWidth="8" />
                {/* Outline over stripes */}
                <path d="M85 85 L45 65 L75 40 Z" fill="none" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
                {/* Base pop burst at bottom right */}
                <path d="M83 83 Q 88 90 92 88 Q 90 83 95 80 Q 90 77 88 72 Q 85 78 83 83 Z" fill="#FFF" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          
          <p className="text-2xl md:text-3xl text-slate-700 font-medium">
            Tickets WorldWide
          </p>
        </div>

      </div>
    </section>
  );
}
