import React from "react";

const ThreeStrandsSection = () => {
  const strandsData = [
    {
      id: 1,
      strandNumber: "Pillar 1",
      title: "Creating Connectivity",
      description:
        "Bringing together the people, organisations and disciplines whose work touches gambling harm: NHS, public health, lived experience, academic research, criminal justice, debt advice, and the wider third sector. We act as a connecting body so the right conversations happen across silos.",
      isHighlighted: true,
    },
    {
      id: 2,
      strandNumber: "Pillar 2",
      title: "Developing Capability",
      description:
        "Training, evidence translation, MECC content for clinicians, briefings for parliamentarians, materials for teachers, and curriculum content for medical schools. Building the capability of every professional group whose practice should now include gambling.",
      isHighlighted: false,
    },
    {
      id: 3,
      strandNumber: "Pillar 3",
      title: "Maximising Capacity",
      description:
        "Leaving systems with tools they own and can sustain: reusable public-health and training assets, evaluation-ready interventions, and cross-sector infrastructure that operates independently of commercial gambling interests.",
      isHighlighted: false,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 bg-white text-gray-900">
      {/* Header Accent Line */}
      <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

      {/* Top Heading Group */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
          How we work: three pillars
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
          Our operational model is built around three pillars — the approach set out in our Annual Report. These are the routes through which we work with public-health organisations.
        </p>
      </div>

      {/* Responsive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strandsData.map((strand) => (
          <div
            key={strand.id}
            className={`flex flex-col border  p-6 md:p-8 bg-white transition-all duration-300 hover:shadow-md ${
              strand.isHighlighted
                ? "border-[#0082c3]/60 shadow-xs"
                : "border-gray-200/90 shadow-xs"
            }`}
          >
            {/* Top Ribbon Indicator */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-[#0082c3]"></span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0082c3]">
                {strand.strandNumber}
              </span>
            </div>

            {/* Section Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              {strand.title}
            </h3>

            {/* Description Narrative */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              {strand.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeStrandsSection;
