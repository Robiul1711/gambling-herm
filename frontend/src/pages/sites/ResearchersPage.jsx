import React from "react";
import ResearchersHero from "@/components/researchersComponents/ResearchersHero";
import WhatWeBringSection from "@/components/researchersComponents/WhatWeBringSection";
import QuestionsWantedSection from "@/components/researchersComponents/QuestionsWantedSection";
import JoinResearchNetworkSection from "@/components/researchersComponents/JoinResearchNetworkSection";
import PageSectionNav from "@/components/common/PageSectionNav";

const sections = [
  { id: "what-we-bring", title: "1. What we bring" },
  { id: "questions-wanted", title: "2. Questions wanted" },
  { id: "join-network", title: "3. Join research network" },
];

export default function ResearchersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <ResearchersHero />

      {/* In-page Sticky Pill Navigation */}
      <PageSectionNav sections={sections} />

      {/* 2. What we bring to a collaboration */}
      <div id="what-we-bring" className="scroll-mt-24">
        <WhatWeBringSection />
      </div>

      {/* 3. The questions we most want answered */}
      <div id="questions-wanted" className="scroll-mt-24">
        <QuestionsWantedSection />
      </div>

      {/* 4. Join the research network */}
      <div id="join-network" className="scroll-mt-24">
        <JoinResearchNetworkSection />
      </div>
    </main>
  );
}

