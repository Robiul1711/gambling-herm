import React from "react";
import AffectedOthersHero from "@/components/affectedOthersCheckInComponents/AffectedOthersHero";
import CentralIdeaAndScaleSection from "@/components/affectedOthersCheckInComponents/CentralIdeaAndScaleSection";
import AffectedOthersNoticingSection from "@/components/affectedOthersCheckInComponents/AffectedOthersNoticingSection";
import NoNeedToChangeSection from "@/components/affectedOthersCheckInComponents/NoNeedToChangeSection";
import MoneyAndLegalSection from "@/components/affectedOthersCheckInComponents/MoneyAndLegalSection";
import ChildrenHouseholdSection from "@/components/affectedOthersCheckInComponents/ChildrenHouseholdSection";
import IfYouFeelUnsafeSection from "@/components/affectedOthersCheckInComponents/IfYouFeelUnsafeSection";
import AffectedOthersSupportSection from "@/components/affectedOthersCheckInComponents/AffectedOthersSupportSection";

export default function AffectedOthersCheckIn() {
  return (
    <div className="w-full bg-white text-[#1f2937]">
      {/* 1. Hero Section */}
      <AffectedOthersHero />

      {/* 2. The Central Idea & The Scale */}
      <CentralIdeaAndScaleSection />

      {/* 3. Things worth noticing */}
      <AffectedOthersNoticingSection />

      {/* 4. You do not need them to change first */}
      <NoNeedToChangeSection />

      {/* 5. Money and legal exposure */}
      <MoneyAndLegalSection />

      {/* 6. If there are children in the household */}
      <ChildrenHouseholdSection />

      {/* 7. If you feel unsafe */}
      <IfYouFeelUnsafeSection />

      {/* 8. Bottom Support Section */}
      <AffectedOthersSupportSection />
    </div>
  );
}
