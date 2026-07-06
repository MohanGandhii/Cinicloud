"use client";

import { useState } from "react";
import Image from "next/image";

const tabsData = [
  {
    id: "modules",
    label: "Modules",
    items: [
      { text: "User iOS App", icon: "/Assets/6.inventory/modules/user_ios_app.svg" },
      { text: "User Android App", icon: "/Assets/6.inventory/modules/user_android_app.svg" },
      { text: "User Website", icon: "/Assets/6.inventory/modules/user_website.svg" },
      { text: "Ticketing POS", icon: "/Assets/6.inventory/modules/ticketing_pos.svg" },
      { text: "Handheld Ticketing POS", icon: "/Assets/6.inventory/modules/handheld_ticketing_pos.svg" },
      { text: "Kiosk and Signage", icon: "/Assets/6.inventory/modules/kiosk_and_signage.svg" },
      { text: "Food POS", icon: "/Assets/6.inventory/modules/food_pos.svg" },
      { text: "Handheld Food POS", icon: "/Assets/6.inventory/modules/handheld_food_pos.svg" },
      { text: "KOT System", icon: "/Assets/6.inventory/modules/kot_system.svg" },
      { text: "Entry Scanner App", icon: "/Assets/6.inventory/modules/entry_scanner_app.svg" },
      { text: "Role Base HQ Modules", icon: "/Assets/6.inventory/modules/role_base_hq_modules.svg" },
      { text: "CEO App for Metrics", icon: "/Assets/6.inventory/modules/ceo_app_for_metrics.svg" }
    ]
  },
  {
    id: "setup",
    label: "Set up & Configuration",
    items: [
      { text: "PurePlay SaaS based", icon: "/Assets/6.inventory/setup/pureplay_saas_based.svg" },
      { text: "No Servers at theatre", icon: "/Assets/6.inventory/setup/no_servers_at_theatre.svg" },
      { text: "Self Subscription", icon: "/Assets/6.inventory/setup/self_subscription.svg" },
      { text: "Simple Onboarding", icon: "/Assets/6.inventory/setup/simple_onboarding.svg" },
      { text: "Instant Access to HQ", icon: "/Assets/6.inventory/setup/instant_access_to_hq.svg" },
      { text: "Ticketing in 3 mins", icon: "/Assets/6.inventory/setup/ticketing_in_3_mins.svg" },
      { text: "Centralized Control", icon: "/Assets/6.inventory/setup/centralized_control.svg" },
      { text: "Ensure 100% Compliance", icon: "/Assets/6.inventory/setup/ensure_100_compliance.svg" },
      { text: "15+ Sales Channels", icon: "/Assets/6.inventory/setup/15_sales_channels.svg" },
      { text: "500+ Features", icon: "/Assets/6.inventory/setup/500_features.svg" },
      { text: "Demo videos for set up", icon: "/Assets/6.inventory/setup/demo_videos_for_set_up.svg" },
      { text: "24x7 Support", icon: "/Assets/6.inventory/setup/24x7_support.svg" }
    ]
  },
  {
    id: "scheduling",
    label: "Theatre Creation & Scheduling",
    items: [
      { text: "Locations", icon: "/Assets/6.inventory/scheduling/locations.svg" },
      { text: "Screens and Subscreens", icon: "/Assets/6.inventory/scheduling/screens_and_subscreens.svg" },
      { text: "Movie Creation", icon: "/Assets/6.inventory/scheduling/movie_creation.svg" },
      { text: "Schedule Manager", icon: "/Assets/6.inventory/scheduling/schedule_manager.svg" },
      { text: "Seat Category", icon: "/Assets/6.inventory/scheduling/seat_category.svg" },
      { text: "Theatre Grouping", icon: "/Assets/6.inventory/scheduling/theatre_grouping.svg" },
      { text: "Group Scheduling", icon: "/Assets/6.inventory/scheduling/group_scheduling.svg" },
      { text: "Seat Layout Customization", icon: "/Assets/6.inventory/scheduling/seat_layout_customization.svg" },
      { text: "Sound System", icon: "/Assets/6.inventory/scheduling/sound_system.svg" },
      { text: "Movie Meta Data Mgmt", icon: "/Assets/6.inventory/scheduling/movie_meta_data_mgmt.svg" },
      { text: "Bulk Booking", icon: "/Assets/6.inventory/scheduling/bulk_booking.svg" },
      { text: "Ticket blocking", icon: "/Assets/6.inventory/scheduling/ticket_blocking.svg" }
    ]
  },
  {
    id: "reports",
    label: "Finance & Reports",
    items: [
      { text: "Configure Rate card", icon: "/Assets/6.inventory/reports/configure_rate_card.svg" },
      { text: "Set up base price", icon: "/Assets/6.inventory/reports/set_up_base_price.svg" },
      { text: "Create multiple taxes", icon: "/Assets/6.inventory/reports/create_multiple_taxes.svg" },
      { text: "Percentage or fixed rate", icon: "/Assets/6.inventory/reports/percentage_or_fixed_rate.svg" },
      { text: "Configure Standard Fees", icon: "/Assets/6.inventory/reports/configure_standard_fees.svg" },
      { text: "Apply Multiple price cards", icon: "/Assets/6.inventory/reports/apply_multiple_price_cards.svg" },
      { text: "Cancellation and refunds", icon: "/Assets/6.inventory/reports/cancellation_and_refunds.svg" },
      { text: "Payment gateway setup", icon: "/Assets/6.inventory/reports/payment_gateway_setup.svg" },
      { text: "View ticket cost split", icon: "/Assets/6.inventory/reports/view_ticket_cost_split.svg" },
      { text: "View over 50+ reports", icon: "/Assets/6.inventory/reports/view_over_50_reports.svg" },
      { text: "Reports for different roles", icon: "/Assets/6.inventory/reports/reports_for_different_roles.svg" },
      { text: "View Firebase Analytics", icon: "/Assets/6.inventory/reports/view_firebase_analytics.svg" }
    ]
  },
  {
    id: "food",
    label: "Food & Beverages",
    items: [
      { text: "Create stock location", icon: "/Assets/6.inventory/food/create_stock_location.svg" },
      { text: "Canteen Management", icon: "/Assets/6.inventory/food/canteen_management.svg" },
      { text: "Product Category", icon: "/Assets/6.inventory/food/product_category.svg" },
      { text: "Product Management", icon: "/Assets/6.inventory/food/product_management.svg" },
      { text: "Raw Material Management", icon: "/Assets/6.inventory/food/raw_material_management.svg" },
      { text: "Vendor Management", icon: "/Assets/6.inventory/food/vendor_management.svg" },
      { text: "Indent Creation", icon: "/Assets/6.inventory/food/indent_creation.svg" },
      { text: "Stock in and In store", icon: "/Assets/6.inventory/food/stock_in_and_in_store.svg" },
      { text: "Recipe Creation", icon: "/Assets/6.inventory/food/recipe_creation.svg" },
      { text: "Stock Adjustment", icon: "/Assets/6.inventory/food/stock_adjustment.svg" },
      { text: "Waste Management", icon: "/Assets/6.inventory/food/waste_management.svg" },
      { text: "F&B Kiosk and KOT", icon: "/Assets/6.inventory/food/fb_kiosk_and_kot.svg" }
    ]
  },
  {
    id: "security",
    label: "Security & Settings",
    items: [
      { text: "Employee Management", icon: "/Assets/6.inventory/security/employee_management.svg" },
      { text: "Role based access", icon: "/Assets/6.inventory/security/role_based_access.svg" },
      { text: "User and role mapping", icon: "/Assets/6.inventory/security/user_and_role_mapping.svg" },
      { text: "Cancel or Merge Show", icon: "/Assets/6.inventory/security/cancel_or_merge_show.svg" },
      { text: "Block and unblock seats", icon: "/Assets/6.inventory/security/block_and_unblock_seats.svg" },
      { text: "Offer Management", icon: "/Assets/6.inventory/security/offer_management.svg" },
      { text: "Discounts and Coupons", icon: "/Assets/6.inventory/security/discounts_and_coupons.svg" },
      { text: "Loyalty Management", icon: "/Assets/6.inventory/security/loyalty_management.svg" },
      { text: "Feedback Management", icon: "/Assets/6.inventory/security/feedback_management.svg" },
      { text: "Review Management", icon: "/Assets/6.inventory/security/review_management.svg" },
      { text: "Terms and Conditions", icon: "/Assets/6.inventory/security/terms_and_conditions.svg" },
      { text: "Privacy Policy", icon: "/Assets/6.inventory/security/privacy_policy.svg" }
    ]
  },
  {
    id: "ticketing",
    label: "Ticketing Channels",
    items: [
      { text: "App Booking", icon: "/Assets/6.inventory/ticketing/app_booking.svg" },
      { text: "Website Booking", icon: "/Assets/6.inventory/ticketing/website_booking.svg" },
      { text: "Kiosk Booking", icon: "/Assets/6.inventory/ticketing/kiosk_booking.svg" },
      { text: "POS Booking", icon: "/Assets/6.inventory/ticketing/pos_booking.svg" },
      { text: "Mobile POS Booking", icon: "/Assets/6.inventory/ticketing/mobile_pos_booking.svg" },
      { text: "IVR Booking", icon: "/Assets/6.inventory/ticketing/ivr_booking.svg" },
      { text: "Bulk Booking", icon: "/Assets/6.inventory/ticketing/bulk_booking.svg" },
      { text: "Phone Booking", icon: "/Assets/6.inventory/ticketing/phone_booking.svg" },
      { text: "Corporate Booking", icon: "/Assets/6.inventory/ticketing/corporate_booking.svg" },
      { text: "BookMyShow", icon: "/Assets/6.inventory/ticketing/bookmyshow.svg" },
      { text: "Paytm", icon: "/Assets/6.inventory/ticketing/paytm.svg" },
      { text: "Other Booking Partners", icon: "/Assets/6.inventory/ticketing/other_booking_partners.svg" }
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
            {activeTabData?.items.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Image 
                    src={item.icon} 
                    alt={item.text} 
                    fill 
                    className="object-contain text-[#1e65b7]" 
                    /* Assuming the dummy SVGs will have their own color, or you can use CSS filters to tint them */
                  />
                </div>
                <span className="text-sm md:text-base font-medium text-[#111827]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
