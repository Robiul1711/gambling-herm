import React from "react";

const treatmentIssues = [
  {
    bold: "Screening tools weren't designed with neurodivergent people in mind.",
    text: "Standard gambling-harm screens were developed and validated on general populations; they were not built to account for how ADHD traits present, and can under- or over-read severity as a result.",
  },
  {
    bold: "Communication needs are rarely accommodated.",
    text: "Longer appointment formats, written follow-ups, or the option to process information at a different pace are not routinely offered.",
  },
  {
    bold: "Sensory needs are rarely accommodated.",
    text: "Waiting rooms, appointment formats and group settings are designed for a general population, not for people who may find them harder to tolerate.",
  },
  {
    bold: "Co-occurring ADHD is often unassessed.",
    text: "Someone can go through a full course of gambling-harm treatment without ever being asked about it.",
  },
];

const wellAdaptedPoints = [
  "Routine, non-stigmatising screening for ADHD and other neurodivergent traits as part of gambling-harm assessment, not a separate hurdle to request.",
  "Flexible appointment length and format, with written or visual follow-up material as standard, not an accommodation you have to ask for.",
  "Sensory-aware physical and remote environments: quieter waiting areas, camera-optional video appointments, choice over lighting and noise where possible.",
  "Staff trained to recognise how ADHD traits present in a gambling-harm consultation, rather than reading impulsivity or distractibility as disengagement from treatment.",
  "Joined-up care with existing ADHD or neurodevelopmental services, rather than two separate systems that don't talk to each other.",
];

const NeurodivergenceTreatmentService = () => {
  return (
    <section className="py-12 md:py-20 bg-white pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Part 1: Recognition and treatment */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold text-[#1e293b] mb-7 tracking-tight">
            Recognition and treatment
          </h2>

          <p className="text-slate-700 text-base sm:text-lg  leading-relaxed md:leading-[1.8] mb-10">
            UK gambling-harm services are rarely adapted for neurodivergent
            people, at any stage from screening through to treatment.
          </p>

          <div className="space-y-8">
            {treatmentIssues.map((item, idx) => (
              <div key={idx} className="space-y-6">
                <div className="text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-[1.8] text-slate-700">
                  <strong className="font-bold text-[#1e293b]">
                    {item.bold}
                  </strong>{" "}
                  {item.text}
                </div>
                {idx < treatmentIssues.length - 1 && (
                  <div className="border-t border-dotted border-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: What a well-adapted service would look like */}
        <div className="pt-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-extrabold text-[#1e293b] mb-10 tracking-tight">
            What a well-adapted service would look like
          </h2>

          <div className="space-y-7">
            {wellAdaptedPoints.map((point, idx) => (
              <div key={idx} className="space-y-7">
                <div className="text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-[1.8] text-slate-700 font-normal">
                  {point}
                </div>
                {idx < wellAdaptedPoints.length - 1 && (
                  <div className="border-t border-dotted border-gray-300"></div>
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
