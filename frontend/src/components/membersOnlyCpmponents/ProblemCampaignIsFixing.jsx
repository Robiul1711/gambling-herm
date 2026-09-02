import React from "react";

const ProblemCampaignIsFixing = () => {
  const analyticalPoints = [
    {
      highlight:
        "The current land-based self-exclusion scheme (MOSES / SENSE / BACTA)",
      body: "relies on staff recognising self-excluded customers from photographs. In practice the recognition rate is low and inconsistent.",
    },
    {
      highlight: "When a self-excluded person does gain access",
      body: (
        <>
          and gambles, the burden of proving that the operator failed to enforce
          the exclusion sits with the person who self-excluded, collecting CCTV,
          dates, timestamps, witnesses. As Sam Badcock describes it:{" "}
          <em className="italic">
            "Enforcement failures were treated as my responsibility. Proof was my
            burden. Data was my burden. Justice was functionally unreachable."
          </em>
        </>
      ),
    },
    {
      highlight: "The Senet Group's 2014 land-based self-exclusion scheme",
      body: (
        <>
          (introduced by the "big four" bookmakers) has been documented as
          falling well short of what was promised.{" "}
          <a
            href="https://medium.com/@samuelbadcock15/the-big-four-bookmakers-and-the-senet-group-2014-665550405184"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#166B94] underline hover:text-[#005580] transition-colors"
          >
            Sam's history of land-based self-exclusion
          </a>{" "}
          sets this out in detail.
        </>
      ),
    },
    {
      highlight: "The 2025 BBC investigation and Guardian coverage",
      body: "of slot-machine harm in UK Adult Gaming Centres confirm the picture: self-exclusion failures are widespread, and the structural design of the venues, products and verification process keeps it that way.",
    },
  ];

  return (
    <section className="bg-white text-gray-800 max-w-5xl mx-auto py-6">
      <div className="flex flex-col items-start text-left">
        {/* Top Decorative Accent Bar */}
        <div className="w-12 h-[3px] bg-[#166B94] mb-4" />

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          The problem the campaign is fixing
        </h2>

        {/* Informational Summary Copy */}
        <div className="text-base md:text-lg leading-relaxed text-gray-700 mb-8 max-w-4xl">
          <p>
            UK self-exclusion exists on paper. In practice, enforcement of it
            has been failing for years, particularly for land-based gambling
            (betting shops, Adult Gaming Centres, slot machines on the high
            street). The Members Only Campaign documents the failure in detail.
          </p>
        </div>

        {/* Analytical Arguments Content Loop Container */}
        <div className="w-full border-t border-dashed border-gray-200 divide-y divide-dashed divide-gray-200">
          {analyticalPoints.map((point, index) => (
            <div
              key={index}
              className="py-6 text-base leading-relaxed text-gray-700"
            >
              <span className="font-bold text-gray-900">{point.highlight} </span>
              <span>{point.body}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemCampaignIsFixing;

