import React from "react";
import YoungPeopleHero from "@/components/youngPeopleComponents/YoungPeopleHero";
import SomeoneAtHomeSection from "@/components/youngPeopleComponents/SomeoneAtHomeSection";
import OwnGamblingSection from "@/components/youngPeopleComponents/OwnGamblingSection";
import TellingAdultAtSchool from "@/components/youngPeopleComponents/TellingAdultAtSchool";
import YoungPeopleCrisisSection from "@/components/youngPeopleComponents/YoungPeopleCrisisSection";
import ThreeThingsToRemember from "@/components/youngPeopleComponents/ThreeThingsToRemember";
import PageSectionNav from "@/components/common/PageSectionNav";

const sections = [
  { id: "someone-at-home", title: "1. If it's about someone at home" },
  { id: "own-gambling", title: "2. If it's about your own gambling" },
  { id: "telling-adult", title: "3. Telling an adult at school" },
  { id: "crisis-help", title: "4. Immediate support" },
  { id: "three-things", title: "5. Three things to remember" },
];

export default function YoungPeoplePage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero & Quick 24/7 Helplines */}
      <YoungPeopleHero />

      {/* In-page Sticky Pill Navigation */}
      <PageSectionNav sections={sections} />

      {/* 2. When Someone at Home Gambles */}
      <div id="someone-at-home" className="scroll-mt-24">
        <SomeoneAtHomeSection />
      </div>

      {/* 3. When It's About Your Own Gambling */}
      <div id="own-gambling" className="scroll-mt-24">
        <OwnGamblingSection />
      </div>

      {/* 4. Telling an Adult at School */}
      <div id="telling-adult" className="scroll-mt-24">
        <TellingAdultAtSchool />
      </div>

      {/* 5. Immediate / Crisis Help */}
      <div id="crisis-help" className="scroll-mt-24">
        <YoungPeopleCrisisSection />
      </div>

      {/* 6. Three Things to Remember & Navigation */}
      <div id="three-things" className="scroll-mt-24">
        <ThreeThingsToRemember />
      </div>
    </div>
  );
}

