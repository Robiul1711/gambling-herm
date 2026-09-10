import React from "react";
import NeurodivergenceHero from "../../components/neurodivergenceComponents/NeurodivergenceHero";
import NeurodivergenceFraming from "../../components/neurodivergenceComponents/NeurodivergenceFraming";
import NeurodivergenceEvidence from "../../components/neurodivergenceComponents/NeurodivergenceEvidence";
import NeurodivergenceHazardous from "../../components/neurodivergenceComponents/NeurodivergenceHazardous";
import NeurodivergenceTreatmentService from "../../components/neurodivergenceComponents/NeurodivergenceTreatmentService";
import NeurodivergencePosition from "../../components/neurodivergenceComponents/NeurodivergencePosition";
import NeurodivergenceCta from "../../components/neurodivergenceComponents/NeurodivergenceCta";
import PageSectionNav from "@/components/common/PageSectionNav";

const sections = [
  { id: "framing", title: "1. Framing" },
  { id: "evidence", title: "2. Evidence base" },
  { id: "hazardous", title: "3. Hazardous products" },
  { id: "services", title: "4. Adapted services" },
  { id: "position", title: "5. Our position" },
];

export default function NeurodivergencePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <NeurodivergenceHero />

      {/* In-page Sticky Pill Navigation */}
      <PageSectionNav sections={sections} />

      {/* 2. Framing Callout Section */}
      <div id="framing" className="scroll-mt-24">
        <NeurodivergenceFraming />
      </div>

      {/* 3. What the evidence supports */}
      <div id="evidence" className="scroll-mt-24">
        <NeurodivergenceEvidence />
      </div>

      {/* 4. Why gambling products are particularly hazardous here */}
      <div id="hazardous" className="scroll-mt-24">
        <NeurodivergenceHazardous />
      </div>

      {/* 5. Recognition and treatment & What a well-adapted service would look like */}
      <div id="services" className="scroll-mt-24">
        <NeurodivergenceTreatmentService />
      </div>

      {/* 6. Our Position (Three asks) */}
      <div id="position" className="scroll-mt-24">
        <NeurodivergencePosition />
      </div>

      {/* 7. Bottom CTA Banner */}
      <NeurodivergenceCta />
    </main>
  );
}
