import React from "react";
import SelfAssessmentHero from "@/components/selfAssessmentComponents/SelfAssessmentHero";
import ScreenExplanationSection from "@/components/selfAssessmentComponents/ScreenExplanationSection";
import ScoreDiagnosisSection from "@/components/selfAssessmentComponents/ScoreDiagnosisSection";
import ValidatedToolsSection from "@/components/selfAssessmentComponents/ValidatedToolsSection";
import SelfAssessmentSupportSection from "@/components/selfAssessmentComponents/SelfAssessmentSupportSection";
import PageSectionNav from "@/components/common/PageSectionNav";

const sections = [
  { id: "screen-explanation", title: "1. What a screen is" },
  { id: "score-diagnosis", title: "2. Score vs diagnosis" },
  { id: "validated-tools", title: "3. Validated tools" },
  { id: "support-routes", title: "4. Where to take a score" },
];

export default function SelfAssessmentPage() {
  return (
    <div className="w-full bg-white text-[#1f2937]">
      {/* 1. Hero Section */}
      <SelfAssessmentHero />

      {/* In-page Sticky Pill Navigation */}
      <PageSectionNav sections={sections} />

      {/* 2. What a screen is & Things worth noticing */}
      <div id="screen-explanation" className="scroll-mt-24">
        <ScreenExplanationSection />
      </div>

      {/* 3. Why a score isn't a diagnosis & Callout box */}
      <div id="score-diagnosis" className="scroll-mt-24">
        <ScoreDiagnosisSection />
      </div>

      {/* 4. Take the validated tools */}
      <div id="validated-tools" className="scroll-mt-24">
        <ValidatedToolsSection />
      </div>

      {/* 5. Support CTA Section */}
      <div id="support-routes" className="scroll-mt-24">
        <SelfAssessmentSupportSection />
      </div>
    </div>
  );
}

