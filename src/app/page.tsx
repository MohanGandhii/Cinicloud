import Hero from "@/components/2.Hero";
import StatsPromo from "@/components/3.StatsPromo";
import CloudManagement from "@/components/4.CloudManagement";
import Features from "@/components/5.Features";
import Inventory from "@/components/6.Inventory";
import WhatYouGet from "@/components/7.WhatYouGet";
import CiniTicket from "@/components/7.1.CiniTicket";
import CiniFB from "@/components/7.2.CiniFB";
import CiniSignage from "@/components/7.3.CiniSignage";
import Integrations from "@/components/8.Integrations";
import Partners from "@/components/9.Partners";
import Testimonials from "@/components/10.Testimonials";
import Pricing from "@/components/11.Pricing";
import TheatreChains from "@/components/11.1.TheatreChains";
import HowItStarted from "@/components/12.HowItStarted";
import News from "@/components/13.News";
import Founders from "@/components/14.Founders";
import Awards from "@/components/15.Awards";
import GetInTouch from "@/components/16.GetInTouch";
import FAQs from "@/components/17.FAQs";
import Footer from "@/components/18.Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center">
      <Hero />
      <StatsPromo />
      <CloudManagement />
      <Features />
      <Inventory />
      <WhatYouGet />
      <CiniTicket />
      <CiniFB />
      <CiniSignage />
      <Integrations />
      <Partners />
      <Testimonials />
      <Pricing />
      <TheatreChains />
      <HowItStarted />
      <News />
      <Founders />
      <Awards />
      <GetInTouch />
      <FAQs />
      <Footer />
    </main>
  );
}
