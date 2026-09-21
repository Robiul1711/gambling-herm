import React from "react";
import RoadSafetyHero from "../../components/roadSafetyGamblingComponents/RoadSafetyHero";
import RoadSafetyResearchStats from "../../components/roadSafetyGamblingComponents/RoadSafetyResearchStats";
import RoadSafetyWhyThisMatters from "../../components/roadSafetyGamblingComponents/RoadSafetyWhyThisMatters";
import RoadSafetyResearchThemes from "../../components/roadSafetyGamblingComponents/RoadSafetyResearchThemes";
import RoadSafetyPracticalSteps from "../../components/roadSafetyGamblingComponents/RoadSafetyPracticalSteps";
import RoadSafetyPoster from "../../components/roadSafetyGamblingComponents/RoadSafetyPoster";
import RoadSafetyPodcast from "../../components/roadSafetyGamblingComponents/RoadSafetyPodcast";
import RoadSafetyAboutGhuk from "../../components/roadSafetyGamblingComponents/RoadSafetyAboutGhuk";
import RoadSafetyCta from "../../components/roadSafetyGamblingComponents/RoadSafetyCta";
import PageSectionNav from "@/components/common/PageSectionNav";

const sections = [
  { id: "research-stats", title: "1. Research stats" },
  { id: "why-this-matters", title: "2. Why this matters" },
  { id: "research-themes", title: "3. What the research shows" },
  { id: "practical-steps", title: "4. Practical steps for transport" },
  { id: "road-safety-poster", title: "5. Campaign Poster" },
  { id: "road-safety-podcast", title: "6. Podcast Episode" },
  { id: "about-ghuk", title: "7. About GHUK" },
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

      {/* 5. What transport organisations can do (5 Steps Grid & Action Buttons) */}
      <div id="practical-steps" className="scroll-mt-24">
        <RoadSafetyPracticalSteps />
      </div>

      {/* 6. Campaign Poster Section */}
      <div id="road-safety-poster" className="scroll-mt-24">
        <RoadSafetyPoster />
      </div>

      {/* 7. Featured Podcast Section */}
      <div id="road-safety-podcast" className="scroll-mt-24">
        <RoadSafetyPodcast />
      </div>

      {/* 8. About Gambling Harm UK */}
      <div id="about-ghuk" className="scroll-mt-24">
        <RoadSafetyAboutGhuk />
      </div>

      {/* 9. Bottom Dark CTA Banner */}
      <RoadSafetyCta />
    </main>
  );
}
