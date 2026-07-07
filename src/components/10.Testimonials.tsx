"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    clientName: "ARRS Multiplex",
    quote: "\"We have tied up with CiniCloud for backend, box office software, applications and website. The software is user friendly and does not require any knowledge to run it. They provide instant full support at any time. Therefore, ARRS Multiplex supports CiniCloud & recommends upcoming cinemas to make use CiniCloud Platform\"",
    author: "Prasath Ramanathan",
    image: "/Assets/10/arrs_owner.png",
  },
  {
    id: 2,
    clientName: "DEPL Cinemas",
    quote: "\"When I entered the entertainment industry as a service provider the e-ticketing was a big thing and very expensive affair, the ease of a e-ticketing has been achieved by CiniCloud and owing your own app make feel at par with PVRs and INOXs. Owning an app is a big thing today and CiniCloud has made it possible & great achievement by the team\"",
    author: "Mrs. Bhartee Daga",
    image: "/Assets/10/depl_owner.png",
  },
  {
    id: 3,
    clientName: "The Friday Cinema",
    quote: "\"I just wanted to share a quick note and let you guys know that you do a really awesome job. It is great working with you guys. Really a very easy-to-use dashboard and box office software. You always solved our queries quickly. Thanks so much for your support. You are the best.\"",
    author: "Hiren Kumar Kankotiya",
    image: "/Assets/10/fridaycinemas_owner.png",
  },
  {
    id: 4,
    clientName: "UVT Cinemas",
    quote: "\"In film industry, I was treated crazy enough who wanted to change the business of cinema through an app. Back then the Features I was thinking in one app would be impossible but it is CiniCloud's brilliant minds who made UVT CINEMAS possible. They treat customers like friends and give full support.\"",
    author: "Kumaar Aadarsh",
    image: "/Assets/10/uvt_owner.png",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [handleNext]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#111827] text-center mb-16">
          What clients say about us
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          {/* Image Side */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <Image 
                src={currentTestimonial.image}
                alt={currentTestimonial.author}
                fill
                className="object-contain drop-shadow-sm"
                unoptimized
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-2/3 flex flex-col justify-center min-h-[320px]">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#111827] border-b-2 border-blue-600 inline-block pb-1">
                {currentTestimonial.clientName}
              </h3>
            </div>
            
            <p className="text-lg text-[#475569] leading-relaxed mb-6">
              {currentTestimonial.quote}
            </p>
            
            <p className="font-bold text-[#111827] mb-12">
              - {currentTestimonial.author}
            </p>

            {/* Navigation and Progress */}
            <div className="flex items-center gap-6 text-[#475569] mt-auto">
              <div className="flex-1 h-[2px] bg-gray-200">
                <div 
                  className="h-full bg-slate-800 transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                />
              </div>
              <div className="text-sm font-medium w-8 text-center">
                {currentIndex + 1}/{testimonials.length}
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={handlePrev}
                  className="p-1 hover:text-[#111827] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="p-1 hover:text-[#111827] transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
