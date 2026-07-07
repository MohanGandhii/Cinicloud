import Image from "next/image";

export default function CiniFB() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Text (col-span-5) */}
          <div className="flex flex-col justify-center lg:col-span-5 lg:pr-8">
            <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-bold text-[#111827] mb-6">
              Cini F&B
            </h3>
            <p className="text-[#334155] text-sm md:text-base leading-[1.8] text-left md:text-justify">
              Cini F&B is a Food & Beverage platform where you can
              manage your entire cinemas food & beverages inventory
              easily with world class modules like end to end Recipe
              management, Food Kiosk, Food Handheld POS, KOT system
              and much more.
            </p>
          </div>

          {/* Right Image Container (col-span-7) */}
          <div className="relative w-full lg:col-span-7 aspect-[4/3] rounded-2xl bg-[#f2fce6] flex items-end justify-center overflow-hidden pt-12 px-6 sm:px-12">
            <div className="relative w-full h-[95%]">
              <Image
                src="/Assets/7.2/get_a_effortless_food.svg"
                alt="Get a Effortless Food Service!"
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
