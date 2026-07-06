import Image from "next/image";

export default function CiniTicket() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Image Container (col-span-7) */}
          <div className="relative w-full lg:col-span-7 aspect-[4/3] rounded-2xl bg-[#f5eaff] flex items-end justify-center overflow-hidden pt-12 px-6 sm:px-12 order-last lg:order-first">
            <div className="relative w-full h-[95%]">
              <Image
                src="/Assets/7.1/book_ticket_seamlessly.svg"
                alt="Book Tickets Seamlessly"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Right Text (col-span-5) */}
          <div className="flex flex-col justify-center lg:col-span-5 lg:pl-8">
            <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-bold text-[#111827] mb-6">
              CiniTicket
            </h3>
            <p className="text-[#334155] text-sm md:text-base leading-[1.8] text-justify">
              CiniTicket is an end-to-end ticketing platform for booking tickets
              in over 10 different channels including iOS App, Android App,
              Website, Box Office POS systems, Phone Booking, IVR Booking, etc.
              The platform seamlessly connects to a theatre and ticket management
              platform like CiniCloud or any other third-party platform to book
              tickets and manage the end-user experience including movie listing,
              personalization, payment integration, and several value-added
              services for users.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
