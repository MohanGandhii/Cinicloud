import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-start bg-[#24284b] text-white pt-32 overflow-hidden w-full">
        {/* Background Waves Placeholder (CSS approach) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute left-0 top-0 h-full w-full opacity-50 md:opacity-100" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 800C300 300 500 -100 800 0" stroke="rgba(255,255,255,0.03)" strokeWidth="2" fill="none" />
            <path d="M400 900C700 400 900 0 1200 100" stroke="rgba(255,255,255,0.03)" strokeWidth="2" fill="none" />
            <path d="M800 1000C1100 500 1300 100 1600 200" stroke="rgba(255,255,255,0.03)" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-5xl text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6">
            World’s most powerful{" "}
            <span className="relative inline-block whitespace-nowrap">
              cloud based
              {/* Green underline SVG */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 9.5C50 3.5 150 2 198 8" stroke="#34d399" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            <br className="hidden sm:block" />
            {" "}cinema ticketing platform
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
            Sign up, Create a Theatre and Start ticketing in 3 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <button className="bg-[#2b88d8] hover:bg-[#2370b3] text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors w-full sm:w-auto shadow-md">
              Onboard Now
            </button>
            <button className="border border-[#475569] text-slate-300 hover:text-white hover:bg-[#2b88d8] hover:border-[#2b88d8] bg-transparent px-8 py-3 rounded-md font-semibold text-lg transition-colors w-full sm:w-auto">
              View 3 min Demo
            </button>
          </div>
        </div>
      </section>

      {/* Image section with perfectly split background (85% dark, 15% white) */}
      <div className="relative w-full flex justify-center">
        {/* Absolute split background covering the full width */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-[85%] w-full bg-[#24284b]"></div>
          <div className="h-[15%] w-full bg-white"></div>
        </div>
        
        {/* Devices Image container */}
        <div className="relative z-20 w-full max-w-[1200px] px-4 md:px-8">
           <Image 
             src="/Assets/2.hero/banner_image.png" 
             alt="CiniCloud Devices" 
             width={1400} 
             height={700} 
             className="w-full h-auto drop-shadow-2xl rounded-xl object-contain" 
             priority 
           />
        </div>
      </div>
      
      {/* Stats section on white background */}
      <section className="relative w-full bg-white flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl px-8 py-12 md:py-16">
          {/* Border-y added here to match the screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left border-y border-slate-200 py-8">
            
            <div className="flex items-start justify-center md:justify-start gap-4 p-4">
              <div className="w-12 h-12 bg-[#df7a57] rounded-md flex-shrink-0 flex items-center justify-center">
                 {/* Icon placeholder (Seat) */}
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 16V9h14v7"/><path d="M5 16v4"/><path d="M19 16v4"/><path d="M3 16h18"/><path d="M8 9V5h8v4"/></svg>
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-2xl font-bold text-slate-800">25,000+</h3>
                <p className="text-slate-500 font-medium text-sm">Seats managed every day</p>
              </div>
            </div>

            <div className="flex items-start justify-center md:justify-start gap-4 p-4 md:pl-8">
              <div className="w-12 h-12 bg-[#df7a57] rounded-md flex-shrink-0 flex items-center justify-center">
                 {/* Icon placeholder (Ticket) */}
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-2xl font-bold text-slate-800">15,000+</h3>
                <p className="text-slate-500 font-medium text-sm">Average tickets booked every day</p>
              </div>
            </div>

            <div className="flex items-start justify-center md:justify-start gap-4 p-4 md:pl-8">
              <div className="w-12 h-12 bg-[#df7a57] rounded-md flex-shrink-0 flex items-center justify-center">
                 {/* Icon placeholder (Phone) */}
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-2xl font-bold text-slate-800">2,00,000</h3>
                <p className="text-slate-500 font-medium text-sm">Apps installed by patrons</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
