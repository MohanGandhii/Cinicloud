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

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center pt-20">
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
    </main>
  );
}
