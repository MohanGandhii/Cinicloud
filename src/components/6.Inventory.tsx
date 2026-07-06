"use client";

import { useState } from "react";
import { 
  Smartphone, Monitor, Calculator, Cast, Coffee, Receipt, QrCode, Users, BarChart3, 
  Cloud, ServerOff, UserCheck, Key, Clock, Sliders, ShieldCheck, Layers, PlayCircle, 
  Headphones, MapPin, Film, CalendarDays, Database, Ban, CreditCard, DollarSign, 
  Percent, PieChart, Settings, Copy, RotateCcw, FileText, Map, Package, Truck, 
  Store, Utensils, Trash2, Lock, UserCog, Gift, Tag, MessageSquare, Star, Shield, 
  Globe, Tablet, Phone, Briefcase, Ticket, PlusCircle, HeartHandshake, PhoneCall,
  Apple, Bot, TabletSmartphone, MonitorUp, ConciergeBell, ScanLine, TrendingUp, Banknote
} from "lucide-react";

const tabsData = [
  {
    id: "modules",
    label: "Modules",
    items: [
      { text: "User iOS App", icon: Apple },
      { text: "User Android App", icon: Bot },
      { text: "User Website", icon: Monitor },
      { text: "Ticketing POS", icon: Phone },
      { text: "Handheld Ticketing POS", icon: TabletSmartphone },
      { text: "Kiosk and Signage", icon: MonitorUp },
      { text: "Food POS", icon: Calculator },
      { text: "Handheld Food POS", icon: Banknote },
      { text: "KOT System", icon: ConciergeBell },
      { text: "Entry Scanner App", icon: ScanLine },
      { text: "Role Base HQ Modules", icon: Settings },
      { text: "CEO App for Metrics", icon: TrendingUp }
    ]
  },
  {
    id: "setup",
    label: "Set up & Configuration",
    items: [
      { text: "PurePlay SaaS based", icon: Cloud },
      { text: "No Servers at theatre", icon: ServerOff },
      { text: "Self Subscription", icon: UserCheck },
      { text: "Simple Onboarding", icon: PlayCircle },
      { text: "Instant Access to HQ", icon: Key },
      { text: "Ticketing in 3 mins", icon: Clock },
      { text: "Centralized Control", icon: Sliders },
      { text: "Ensure 100% Compliance", icon: ShieldCheck },
      { text: "15+ Sales Channels", icon: PlusCircle },
      { text: "500+ Features", icon: Layers },
      { text: "Demo videos for set up", icon: PlayCircle },
      { text: "24x7 Support", icon: Headphones }
    ]
  },
  {
    id: "scheduling",
    label: "Theatre Creation & Scheduling",
    items: [
      { text: "Locations", icon: MapPin },
      { text: "Screens and Subscreens", icon: Monitor },
      { text: "Movie Creation", icon: Film },
      { text: "Schedule Manager", icon: CalendarDays },
      { text: "Seat Category", icon: Users },
      { text: "Theatre Grouping", icon: Database },
      { text: "Group Scheduling", icon: CalendarDays },
      { text: "Seat Layout Customization", icon: Layers },
      { text: "Sound System", icon: Headphones },
      { text: "Movie Meta Data Mgmt", icon: Database },
      { text: "Bulk Booking", icon: Users },
      { text: "Ticket blocking", icon: Ban }
    ]
  },
  {
    id: "reports",
    label: "Finance & Reports",
    items: [
      { text: "Configure Rate card", icon: CreditCard },
      { text: "Set up base price", icon: DollarSign },
      { text: "Create multiple taxes", icon: Percent },
      { text: "Percentage or fixed rate", icon: PieChart },
      { text: "Configure Standard Fees", icon: Settings },
      { text: "Apply Multiple price cards", icon: Copy },
      { text: "Cancellation and refunds", icon: RotateCcw },
      { text: "Payment gateway setup", icon: CreditCard },
      { text: "View ticket cost split", icon: PieChart },
      { text: "View over 50+ reports", icon: FileText },
      { text: "Reports for different roles", icon: Users },
      { text: "View Firebase Analytics", icon: BarChart3 }
    ]
  },
  {
    id: "food",
    label: "Food & Beverages",
    items: [
      { text: "Create stock location", icon: Map },
      { text: "Canteen Management", icon: Coffee },
      { text: "Product Category", icon: Layers },
      { text: "Product Management", icon: Package },
      { text: "Raw Material Management", icon: Package },
      { text: "Vendor Management", icon: Truck },
      { text: "Indent Creation", icon: FileText },
      { text: "Stock in and In store", icon: Store },
      { text: "Recipe Creation", icon: Utensils },
      { text: "Stock Adjustment", icon: Sliders },
      { text: "Waste Management", icon: Trash2 },
      { text: "F&B Kiosk and KOT", icon: Receipt }
    ]
  },
  {
    id: "security",
    label: "Security & Settings",
    items: [
      { text: "Employee Management", icon: Users },
      { text: "Role based access", icon: Lock },
      { text: "User and role mapping", icon: UserCog },
      { text: "Cancel or Merge Show", icon: RotateCcw },
      { text: "Block and unblock seats", icon: Ban },
      { text: "Offer Management", icon: Gift },
      { text: "Discounts and Coupons", icon: Tag },
      { text: "Loyalty Management", icon: HeartHandshake },
      { text: "Feedback Management", icon: MessageSquare },
      { text: "Review Management", icon: Star },
      { text: "Terms and Conditions", icon: FileText },
      { text: "Privacy Policy", icon: Shield }
    ]
  },
  {
    id: "ticketing",
    label: "Ticketing Channels",
    items: [
      { text: "App Booking", icon: Smartphone },
      { text: "Website Booking", icon: Globe },
      { text: "Kiosk Booking", icon: Cast },
      { text: "POS Booking", icon: Calculator },
      { text: "Mobile POS Booking", icon: Tablet },
      { text: "IVR Booking", icon: PhoneCall },
      { text: "Bulk Booking", icon: Users },
      { text: "Phone Booking", icon: Phone },
      { text: "Corporate Booking", icon: Briefcase },
      { text: "BookMyShow", icon: Ticket },
      { text: "Paytm", icon: CreditCard },
      { text: "Other Booking Partners", icon: PlusCircle }
    ]
  }
];

export default function Inventory() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const activeTabData = tabsData.find(tab => tab.id === activeTab);

  return (
    <section className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#111827] mb-4">
            CiniCloud helps you to sell your inventory quickly
          </h2>
          <p className="text-lg md:text-xl text-[#475569]">
            With our awesome built-in features manage your theatre at ease and scale it as you go.
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full overflow-x-auto no-scrollbar mb-12 border-b border-gray-200">
          <div className="flex w-max md:mx-auto space-x-6 md:space-x-8 px-4 md:px-0">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 text-base md:text-lg font-medium whitespace-nowrap transition-colors relative ${
                  activeTab === tab.id
                    ? "text-[#111827]"
                    : "text-[#64748b] hover:text-[#334155]"
                }`}
              >
                {tab.label}
                {/* Active Underline / Box Indicator based on screenshot */}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#111827]" />
                )}
                {/* In the first screenshot, Modules has a blue box. We'll use a clean underline which matches screenshot 2 */}
              </button>
            ))}
          </div>
        </div>

        {/* Icons Grid */}
        <div className="w-full mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-16 gap-x-8 max-w-4xl mx-auto">
            {activeTabData?.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-12 h-12 md:w-16 md:h-16 text-[#1e65b7]" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm md:text-base font-medium text-[#111827]">
                    {item.text}
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
