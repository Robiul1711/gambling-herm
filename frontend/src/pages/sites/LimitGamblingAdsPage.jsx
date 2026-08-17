import React from "react";
import LimitAdsHero from "@/components/limitGamblingAdsComponents/LimitAdsHero";
import LimitAdsNav from "@/components/limitGamblingAdsComponents/LimitAdsNav";
import OperatorMarketingSection from "@/components/limitGamblingAdsComponents/OperatorMarketingSection";
import PlatformControlsSection from "@/components/limitGamblingAdsComponents/PlatformControlsSection";
import DeviceBrowserSection from "@/components/limitGamblingAdsComponents/DeviceBrowserSection";
import BroadcastSportSection from "@/components/limitGamblingAdsComponents/BroadcastSportSection";
import ParentsCarersSection from "@/components/limitGamblingAdsComponents/ParentsCarersSection";
import OurPositionSection from "@/components/limitGamblingAdsComponents/OurPositionSection";
import MoreWaysToAction from "@/components/limitGamblingAdsComponents/MoreWaysToAction";

export default function LimitGamblingAdsPage() {
  return (
    <div className="w-full bg-white text-[#1f2937]">
      {/* Hero Banner */}
      <LimitAdsHero />

      {/* On This Page Navigation */}
      <LimitAdsNav />

      {/* Main Sections */}
      <div className="w-full">
        <OperatorMarketingSection />
        <PlatformControlsSection />
        <DeviceBrowserSection />
        <BroadcastSportSection />
        <ParentsCarersSection />
        <OurPositionSection />
      </div>

      {/* Bottom Action Section */}
      <MoreWaysToAction />
    </div>
  );
}
