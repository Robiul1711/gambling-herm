import React from "react";
import AffectedOthersHero from "@/components/affectedOthersCheckInComponents/AffectedOthersHero";
import CentralIdeaAndScaleSection from "@/components/affectedOthersCheckInComponents/CentralIdeaAndScaleSection";
import AffectedOthersNoticingSection from "@/components/affectedOthersCheckInComponents/AffectedOthersNoticingSection";
import NoNeedToChangeSection from "@/components/affectedOthersCheckInComponents/NoNeedToChangeSection";
import MoneyAndLegalSection from "@/components/affectedOthersCheckInComponents/MoneyAndLegalSection";
import ChildrenHouseholdSection from "@/components/affectedOthersCheckInComponents/ChildrenHouseholdSection";
import IfYouFeelUnsafeSection from "@/components/affectedOthersCheckInComponents/IfYouFeelUnsafeSection";
import AffectedOthersSupportSection from "@/components/affectedOthersCheckInComponents/AffectedOthersSupportSection";
import PageSectionNav from "@/components/common/PageSectionNav";

const sections = [
  { id: "central-idea", title: "1. Central Idea & Scale" },
  { id: "noticing", title: "2. Things Worth Noticing" },
  { id: "no-need-to-change", title: "3. You Don't Need Them to Change First" },
  { id: "money-legal", title: "4. Money & Legal Exposure" },
  { id: "children-household", title: "5. Children in the Household" },
  { id: "unsafe", title: "6. If You Feel Unsafe" },
  { id: "support", title: "7. Support for People Harmed by Someone Else’s Gambling" },
];

export default function AffectedOthersCheckIn() {
  return (
    <div className="w-full bg-white text-[#1f2937]">
      {/* 1. Hero Section */}
      <AffectedOthersHero />

      {/* In-page Sticky Pill Navigation */}
      <PageSectionNav sections={sections} />

      {/* 2. The Central Idea & The Scale */}
      <div id="central-idea" className="scroll-mt-24">
        <CentralIdeaAndScaleSection />
      </div>

      {/* 3. Things worth noticing */}
      <div id="noticing" className="scroll-mt-24">
        <AffectedOthersNoticingSection />
      </div>

      {/* 4. You do not need them to change first */}
      <div id="no-need-to-change" className="scroll-mt-24">
        <NoNeedToChangeSection />
      </div>

      {/* 5. Money and legal exposure */}
      <div id="money-legal" className="scroll-mt-24">
        <MoneyAndLegalSection />
      </div>

      {/* 6. If there are children in the household */}
      <div id="children-household" className="scroll-mt-24">
        <ChildrenHouseholdSection />
      </div>

      {/* 7. If you feel unsafe */}
      <div id="unsafe" className="scroll-mt-24">
        <IfYouFeelUnsafeSection />
      </div>

      {/* 8. Bottom Support Section */}
      <div id="support" className="scroll-mt-24">
        <AffectedOthersSupportSection />
      </div>
    </div>
  );
}

