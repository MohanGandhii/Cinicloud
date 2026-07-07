import React from "react";
import Image from "next/image";

const JaggedTop = () => (
  <div 
    className="absolute left-0 right-0 h-[12px] w-full" 
    style={{
      top: '-11px',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='12' viewBox='0 0 24 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 12L12 0L24 12Z' fill='white'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat-x',
      backgroundSize: '24px 12px'
    }}
  />
);

interface NewsCardProps {
  logoType: 'intel' | 'yourstory' | 'deccan';
  title: string;
  imageUrl: string;
  imageAlt: string;
}

const NewsCard = ({ logoType, title, imageUrl, imageAlt }: NewsCardProps) => {
  return (
    <div className="w-full relative transition-transform hover:-translate-y-1 duration-300 drop-shadow-[0_4px_15px_rgba(0,0,0,0.06)] mt-[12px]">
      <div className="bg-white rounded-b-xl relative w-full h-full flex flex-col">
        <JaggedTop />
      
      <div className="p-6 md:p-8 flex flex-col h-full relative z-20">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 flex items-center shrink-0">
            {logoType === 'intel' && (
              <div className="relative h-6 w-16 flex items-center justify-start">
                <Image 
                  src="/Assets/13/intel.png" 
                  alt="Intel logo" 
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
            )}
            
            {logoType === 'yourstory' && (
              <div className="relative h-6 w-24 flex items-center justify-start">
                <Image 
                  src="/Assets/13/yourstory.png" 
                  alt="YourStory logo" 
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
            )}

            {logoType === 'deccan' && (
              <div className="relative h-8 w-32 flex items-center justify-start">
                <Image 
                  src="/Assets/13/deccan.png" 
                  alt="Deccan Chronicle logo" 
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
            )}
          </div>
          
          <button className="bg-[#3182ce] hover:bg-[#2b6cb0] text-white text-[12px] font-medium px-4 py-1.5 rounded-sm transition-colors shrink-0">
            Read Article
          </button>
        </div>

        {/* Title */}
        <h3 className="font-bold text-[17px] md:text-[19px] text-[#111827] leading-snug mb-6">
          {title}
        </h3>
        
        {/* Image */}
        <div className="mt-auto">
          <Image 
            src={imageUrl} 
            alt={imageAlt} 
            width={600} 
            height={400} 
            className="w-full h-auto object-cover"
            unoptimized
          />
        </div>
      </div>
      </div>
    </div>
  );
};


export default function News() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 font-sans relative z-0">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <h2 className="text-center text-3xl md:text-[32px] font-bold mb-12 text-[#111827] tracking-tight">
          CiniCloud in the News
        </h2>
        
        <div className="w-full max-w-[1024px] relative">
          
          {/* Light blue backdrop container */}
          <div className="absolute top-0 left-0 right-0 bottom-16 md:bottom-32 bg-[#eaf5f8] rounded-[32px] z-0"></div>
          
          {/* Masonry Grid */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 px-4 sm:px-8 md:px-12 pt-12 pb-4 relative z-10">
            
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-12">
              <NewsCard 
                logoType="intel"
                title="Intel® Black Belt Software Developers Suresh & George: From Childhood Friends to Awesome App Developers"
                imageUrl="/Assets/13/intel_read_article_new.png"
                imageAlt="Intel Article"
              />

              <NewsCard 
                logoType="yourstory"
                title="On Madras Day, here are seven startups from Chennai to watch out for"
                imageUrl="/Assets/13/on_madras_day_new.png"
                imageAlt="Madras Day Startups"
              />
            </div>

            {/* Right Column (Offset on Desktop) */}
            <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-12 md:mt-24">
              <NewsCard 
                logoType="yourstory"
                title="How Chennai-based CiniCloud can be the Zoho of theatre management systems"
                imageUrl="/Assets/13/how_chennai_based_cinicloud_new.png"
                imageAlt="Zoho of theatre management"
              />

              <NewsCard 
                logoType="deccan"
                title="Dreamers and doers of Chennai"
                imageUrl="/Assets/13/dreamers_and_doers_new.png"
                imageAlt="Dreamers and doers of Chennai"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
