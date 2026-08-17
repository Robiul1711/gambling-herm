import React from "react";

const AudienceNavigationSection = () => {
  const evidenceList = [
    {
      id: 1,
      text: (
        <>
          <span className="italic">GHUK, Gambling Explained</span> (2021),
          flagship evidence summary, inspired by WHO's{" "}
          <span className="italic">Tobacco Explained</span>
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          <span className="italic">GHUK, Levy Audit</span> (2024), structural
          critique of the voluntary RET regime
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
          GHUK APPG submission (25 February 2026). UK{" "}
          <span className="italic">epidemiology</span>, health burden, economic
          costs
        </>
      ),
    },
    {
      id: 4,
      text: "OHID 2023 cost estimates (with documented gaps)",
    },
    {
      id: 5,
      text: "Gambling Commission Gambling Survey for Great Britain",
    },
    {
      id: 6,
      text: "Gambling Commission Young People & Gambling 2025",
    },
  ];

  const partnersList = [
    { id: 1, text: "OHID gambling-harm prevention strand" },
    { id: 2, text: "NHS specialist gambling clinic network" },
    { id: 3, text: "RCPsych gambling sub-group" },
    {
      id: 4,
      text: "Faculty of Public Health (we present to FPH events and produce CPD-aligned content)",
    },
    { id: 5, text: "UK university public-health and epidemiology departments" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 bg-white text-gray-900">
      {/* Top Accent Blue Line */}
      <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
          Resources and partners
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
          UK gambling-harm services have expanded substantially since 2019. The
          pathways below are free at the point of use and accept self-referral.
        </p>
      </div>

      {/* Main Two-Column Container Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left Column Card: Evidence We Use */}
        <div className="border border-gray-200/90  p-6 md:p-8 bg-white shadow-xs flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
            Evidence we use
          </h3>
          <div className="flex flex-col flex-1">
            {evidenceList.map((item, index) => (
              <div
                key={item.id}
                className={`py-3.5 text-sm sm:text-base text-gray-700 leading-relaxed font-normal ${
                  index === 0
                    ? "border-t border-dashed border-gray-200 mt-2"
                    : ""
                } border-b border-dashed border-gray-200 last:border-none`}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column Card: Public-Health Partners */}
        <div className="border border-gray-200/90  p-6 md:p-8 bg-white shadow-xs flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
            Public-health partners
          </h3>
          <div className="flex flex-col flex-1">
            {partnersList.map((item, index) => (
              <div
                key={item.id}
                className={`py-3.5 text-sm sm:text-base text-gray-700 leading-relaxed font-normal ${
                  index === 0
                    ? "border-t border-dashed border-gray-200 mt-2"
                    : ""
                } border-b border-dashed border-gray-200 last:border-none`}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudienceNavigationSection;
