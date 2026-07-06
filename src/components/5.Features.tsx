import Image from "next/image";
import { Ticket, Database, UserPlus, Monitor, Cloud, Settings, ShoppingCart, Scale } from "lucide-react";

export default function Features() {
  const features = [
    { icon: Ticket, text: "Pureplay SaaS based Ticketing System." },
    { icon: Database, text: "No Servers needed at theatre level." },
    { icon: UserPlus, text: "Self subscription and simple 3 Step onboarding process." },
    { icon: Monitor, text: "Support for 1 to 1000 screen theatres." },
    { icon: Cloud, text: "Centralized Control of entire platform from HQ Cloud." },
    { icon: Settings, text: "More than 500+ features to cover every aspect of ticketing." },
    { icon: ShoppingCart, text: "More than 15+ channels to sell your ticket inventory." },
    { icon: Scale, text: "Ensure 100% compliance for local regulations and policies." },
  ];

  return (
    <section className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#111827] mb-4">
            One platform with powerful features for all your needs
          </h2>
          <p className="text-lg md:text-xl text-[#475569]">
            CiniCloud is packed with awesome rich features necessary to run your theatres.
          </p>
        </div>

        {/* Content Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Side: Image */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] flex justify-center items-center">
            <Image
              src="/Assets/5/one-plateform.svg"
              alt="Platform Features"
              fill
              className="object-contain"
            />
          </div>

          {/* Right Side: Features List */}
          <div className="flex flex-col gap-6 md:gap-8 lg:pl-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-[#77c978] rounded-xl flex justify-center items-center shadow-sm group-hover:bg-[#5db85e] transition-colors duration-300">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <span className="text-[16px] md:text-[18px] font-medium text-[#1e293b] leading-tight">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
