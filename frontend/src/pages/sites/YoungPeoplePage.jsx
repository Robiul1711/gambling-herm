import React from "react";
import YoungPeopleHero from "@/components/youngPeopleComponents/YoungPeopleHero";
import SomeoneAtHomeSection from "@/components/youngPeopleComponents/SomeoneAtHomeSection";
import OwnGamblingSection from "@/components/youngPeopleComponents/OwnGamblingSection";
import TellingAdultAtSchool from "@/components/youngPeopleComponents/TellingAdultAtSchool";
import YoungPeopleCrisisSection from "@/components/youngPeopleComponents/YoungPeopleCrisisSection";
import ThreeThingsToRemember from "@/components/youngPeopleComponents/ThreeThingsToRemember";

export default function YoungPeoplePage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero & Quick 24/7 Helplines */}
      <YoungPeopleHero />

      {/* 2. When Someone at Home Gambles */}
      <SomeoneAtHomeSection />

      {/* 3. When It's About Your Own Gambling */}
      <OwnGamblingSection />

      {/* 4. Telling an Adult at School */}
      <TellingAdultAtSchool />

      {/* 5. Immediate / Crisis Help */}
      <YoungPeopleCrisisSection />

      {/* 6. Three Things to Remember & Navigation */}
      <ThreeThingsToRemember />
    </div>
  );
}
