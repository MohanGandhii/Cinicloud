import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#23253a] text-white font-sans mt-auto">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Column 1: Logo */}
          <div className="flex flex-col items-start">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-tr from-emerald-400 to-emerald-600 rounded-md flex items-center justify-center font-bold text-white text-lg shadow-sm">
                  C
                </div>
                <span className="font-bold text-xl tracking-tight">CiniCloud</span>
             </div>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col space-y-4 text-[14px] md:text-[15px] text-[#cccccc]">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#customers" className="hover:text-white transition-colors">Customers</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="#faqs" className="hover:text-white transition-colors">FAQs</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-start">
            <h4 className="text-[17px] md:text-[18px] font-bold text-white mb-5">Call Us</h4>
            <a 
              href="#" 
              className="bg-[#56a880] hover:bg-[#4a946f] text-white text-[14px] md:text-[15px] font-medium px-6 py-2.5 rounded-md transition-colors mb-12 shadow-sm inline-block"
            >
              Connect via WhatsApp
            </a>
            
            <p className="text-[14px] text-[#cccccc] flex items-center gap-1.5 whitespace-nowrap">
              Made with <span className="text-red-500 text-lg leading-none mt-0.5">❤️</span> from Chennai by CiniCloud team.
            </p>
          </div>
          
        </div>
      </div>
      
      {/* Footer Bottom Bar */}
      <div className="border-t border-[#ffffff15] py-5">
         <p className="text-center text-[12px] md:text-[13px] text-[#a0a0a0]">
           CiniCloud Private Limited. © Copyright 2023 | All Rights Reserved.
         </p>
      </div>
    </footer>
  );
}
