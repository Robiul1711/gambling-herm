import React from "react";

const placeholderCards = [
  {
    tag: "PLACEHOLDER CARD · NOT A REAL RESOURCE",
    title: "Example film title",
    description:
      "Illustrative description of a safeguarding or awareness film. Replace with real, authorised resource data at render time.",
  },
  {
    tag: "PLACEHOLDER CARD · NOT A REAL RESOURCE",
    title: "Example training resource",
    description:
      "Illustrative description of a training or MECC-related resource. Replace with real, authorised resource data at render time.",
  },
  {
    tag: "PLACEHOLDER CARD · NOT A REAL RESOURCE",
    title: "Example evidence document",
    description:
      "Illustrative description of an evidence or modelling document. Replace with real, authorised resource data at render time.",
  },
];

const MembersLibraryExampleCards = () => {
  return (
    <section className="py-12 md:py-20 bg-white pb-28 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-7"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#1e293b] mb-6 tracking-tight">
          Example: what a signed-in member will see
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] mb-10 font-normal">
          The layout below is a placeholder, to show how resource cards will
          look once the library is built and you're signed in. None of these
          cards link to a real resource.
        </p>

        {/* 3 Placeholder Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderCards.map((card, idx) => (
            <div
              key={idx}
              className="border border-dashed border-slate-300  p-7 sm:p-8 bg-white flex flex-col justify-start"
            >
              {/* Card Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3.5 h-[2px] bg-[#0093D0]"></span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0093D0]">
                  {card.tag}
                </span>
              </div>

              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#1e293b] mb-3.5 tracking-tight">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed md:leading-[1.65] font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersLibraryExampleCards;
