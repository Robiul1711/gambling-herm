import React from "react";
import RoadSafetyHero from "../../components/roadSafetyGamblingComponents/RoadSafetyHero";
import RoadSafetyResearchStats from "../../components/roadSafetyGamblingComponents/RoadSafetyResearchStats";
import RoadSafetyWhyThisMatters from "../../components/roadSafetyGamblingComponents/RoadSafetyWhyThisMatters";
import RoadSafetyResearchThemes from "../../components/roadSafetyGamblingComponents/RoadSafetyResearchThemes";
import RoadSafetyPracticalSteps from "../../components/roadSafetyGamblingComponents/RoadSafetyPracticalSteps";
import RoadSafetyResources from "../../components/roadSafetyGamblingComponents/RoadSafetyResources";
import RoadSafetyAboutGhuk from "../../components/roadSafetyGamblingComponents/RoadSafetyAboutGhuk";
import RoadSafetyCta from "../../components/roadSafetyGamblingComponents/RoadSafetyCta";
import PageSectionNav from "@/components/common/PageSectionNav";

const sections = [
  { id: "research-stats", title: "1. Research stats" },
  { id: "why-this-matters", title: "2. Why this matters" },
  { id: "research-themes", title: "3. What the research shows" },
  { id: "practical-steps", title: "4. Practical steps for transport" },
  { id: "resources", title: "5. Resources & guides" },
  { id: "about-ghuk", title: "6. About GHUK" },
];

export default function RoadSafetyGambling() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <RoadSafetyHero />

      {/* In-page Sticky Pill Navigation */}
      <PageSectionNav sections={sections} />

      {/* 2. Research Stats Dark Section */}
      <div id="research-stats" className="scroll-mt-24">
        <RoadSafetyResearchStats />
      </div>

      {/* 3. Why this matters Section */}
      <div id="why-this-matters" className="scroll-mt-24">
        <RoadSafetyWhyThisMatters />
      </div>

      {/* 4. What the research shows (4 Themes Grid) */}
      <div id="research-themes" className="scroll-mt-24">
        <RoadSafetyResearchThemes />
      </div>

      {/* 5. What transport organisations can do (5 Steps Grid) */}
      <div id="practical-steps" className="scroll-mt-24">
        <RoadSafetyPracticalSteps />
      </div>

      {/* 6. Resources List Section */}
      <div id="resources" className="scroll-mt-24">
        <RoadSafetyResources />
      </div>

      {/* 7. About Gambling Harm UK */}
      <div id="about-ghuk" className="scroll-mt-24">
        <RoadSafetyAboutGhuk />
      </div>

      {/* 8. Bottom Dark CTA Banner */}
      <RoadSafetyCta />
    </main>
  );
}
