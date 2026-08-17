import React from "react";
import SelfAssessmentHero from "@/components/selfAssessmentComponents/SelfAssessmentHero";
import ScreenExplanationSection from "@/components/selfAssessmentComponents/ScreenExplanationSection";
import ScoreDiagnosisSection from "@/components/selfAssessmentComponents/ScoreDiagnosisSection";
import ValidatedToolsSection from "@/components/selfAssessmentComponents/ValidatedToolsSection";
import SelfAssessmentSupportSection from "@/components/selfAssessmentComponents/SelfAssessmentSupportSection";

export default function SelfAssessmentPage() {
  return (
    <div className="w-full bg-white text-[#1f2937]">
      {/* 1. Hero Section */}
      <SelfAssessmentHero />

      {/* 2. What a screen is & Things worth noticing */}
      <ScreenExplanationSection />

      {/* 3. Why a score isn't a diagnosis & Callout box */}
      <ScoreDiagnosisSection />

      {/* 4. Take the validated tools */}
      <ValidatedToolsSection />

      {/* 5. Support CTA Section */}
      <SelfAssessmentSupportSection />
    </div>
  );
}
