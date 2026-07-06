import Image from "next/image";

export default function Integrations() {
  return (
    <section className="w-full bg-[#f6cc5d] py-20 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="w-full max-w-[1200px] mb-6 text-left">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#111827]">
            CiniCloud API integrates seamlessly with
          </h2>
        </div>

        {/* Image Container with Dark Blue Background */}
        <div className="relative w-full max-w-[1200px] aspect-[16/9] md:aspect-[2.4/1] bg-[#292b4f] rounded-2xl overflow-hidden p-4 md:p-8 shadow-xl">
          <div className="relative w-full h-full">
            <Image
              src="/Assets/8/cloud_api_seamless_new.png"
              alt="CiniCloud Integrations"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
