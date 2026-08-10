import React from "react";
import ResearchersHero from "@/components/researchersComponents/ResearchersHero";
import WhatWeBringSection from "@/components/researchersComponents/WhatWeBringSection";
import QuestionsWantedSection from "@/components/researchersComponents/QuestionsWantedSection";
import JoinResearchNetworkSection from "@/components/researchersComponents/JoinResearchNetworkSection";

export default function ResearchersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <ResearchersHero />

      {/* 2. What we bring to a collaboration */}
      <WhatWeBringSection />

      {/* 3. The questions we most want answered */}
      <QuestionsWantedSection />

      {/* 4. Join the research network */}
      <JoinResearchNetworkSection />
    </main>
  );
}
