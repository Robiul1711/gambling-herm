import React from "react";
import RoadSafetyHero from "../../components/roadSafetyGamblingComponents/RoadSafetyHero";
import RoadSafetyResearchStats from "../../components/roadSafetyGamblingComponents/RoadSafetyResearchStats";
import RoadSafetyWhyThisMatters from "../../components/roadSafetyGamblingComponents/RoadSafetyWhyThisMatters";
import RoadSafetyResearchThemes from "../../components/roadSafetyGamblingComponents/RoadSafetyResearchThemes";
import RoadSafetyPracticalSteps from "../../components/roadSafetyGamblingComponents/RoadSafetyPracticalSteps";
import RoadSafetyResources from "../../components/roadSafetyGamblingComponents/RoadSafetyResources";
import RoadSafetyAboutGhuk from "../../components/roadSafetyGamblingComponents/RoadSafetyAboutGhuk";
import RoadSafetyCta from "../../components/roadSafetyGamblingComponents/RoadSafetyCta";

export default function RoadSafetyGambling() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <RoadSafetyHero />

      {/* 2. Research Stats Dark Section */}
      <RoadSafetyResearchStats />

      {/* 3. Why this matters Section */}
      <RoadSafetyWhyThisMatters />

      {/* 4. What the research shows (4 Themes Grid) */}
      <RoadSafetyResearchThemes />

      {/* 5. What transport organisations can do (5 Steps Grid) */}
      <RoadSafetyPracticalSteps />

      {/* 6. Resources List Section */}
      <RoadSafetyResources />

      {/* 7. About Gambling Harm UK */}
      <RoadSafetyAboutGhuk />

      {/* 8. Bottom Dark CTA Banner */}
      <RoadSafetyCta />
    </main>
  );
}
