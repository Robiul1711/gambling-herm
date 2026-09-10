import React from "react";

const wellAdaptedPoints = [
  "Routine, non-stigmatising screening for ADHD and other neurodivergent traits as part of gambling-harm assessment, not a separate hurdle to request.",
  "Flexible appointment length and format, with written or visual follow-up material as standard, not an accommodation you have to ask for.",
  "Sensory-aware physical and remote environments: quieter waiting areas, camera-optional video appointments, choice over lighting and noise where possible.",
  "Staff trained to recognise how ADHD traits present in a gambling-harm consultation, rather than reading impulsivity or distractibility as disengagement from treatment.",
  "Joined-up care with existing ADHD or neurodevelopmental services, rather than two separate systems that don't talk to each other.",
];

const NeurodivergenceTreatmentService = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* What a well-adapted service would look like */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            What a well-adapted service would look like
          </h2>

          <div className="space-y-6">
            {wellAdaptedPoints.map((point, idx) => (
              <div key={idx} className="space-y-6">
                <div className="text-sm sm:text-base leading-relaxed text-gray-700 font-normal">
                  {point}
                </div>
                {idx < wellAdaptedPoints.length - 1 && (
                  <div className="border-t border-dashed border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeurodivergenceTreatmentService;
