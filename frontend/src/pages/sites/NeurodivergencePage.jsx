import React from "react";
import NeurodivergenceHero from "../../components/neurodivergenceComponents/NeurodivergenceHero";
import NeurodivergenceFraming from "../../components/neurodivergenceComponents/NeurodivergenceFraming";
import NeurodivergenceEvidence from "../../components/neurodivergenceComponents/NeurodivergenceEvidence";
import NeurodivergenceHazardous from "../../components/neurodivergenceComponents/NeurodivergenceHazardous";
import NeurodivergenceTreatmentService from "../../components/neurodivergenceComponents/NeurodivergenceTreatmentService";
import NeurodivergencePosition from "../../components/neurodivergenceComponents/NeurodivergencePosition";
import NeurodivergenceCta from "../../components/neurodivergenceComponents/NeurodivergenceCta";

export default function NeurodivergencePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <NeurodivergenceHero />

      {/* 2. Framing Callout Section */}
      <NeurodivergenceFraming />

      {/* 3. What the evidence supports */}
      <NeurodivergenceEvidence />

      {/* 4. Why gambling products are particularly hazardous here */}
      <NeurodivergenceHazardous />

      {/* 5. Recognition and treatment & What a well-adapted service would look like */}
      <NeurodivergenceTreatmentService />

      {/* 6. Our Position (Three asks) */}
      <NeurodivergencePosition />

      {/* 7. Bottom CTA Banner */}
      <NeurodivergenceCta />
    </main>
  );
}
