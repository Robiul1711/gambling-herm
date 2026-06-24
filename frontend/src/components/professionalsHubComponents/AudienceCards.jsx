import React from "react";
import { Link } from "react-router-dom";

const AudienceCards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Children & young people",
      description: (
        <>
          For young people themselves, and the parents, carers and safeguarding
          leads around them.
          <span className="font-semibold text-gray-700">
            {" "}
            3.4% of 11-17-year-olds
          </span>{" "}
          in Great Britain show gambling-related harm on the DSM-IV-MR-J screen;
          ~42% of children may be affected by someone else's gambling
          (GambleAware modelling, 2024).
        </>
      ),
      btnText: "For CYP",
      to:"/professionals/children-young-people"
    },
    {
      id: 2,
      title: "Healthcare professionals",
      description: (
        <>
          For NHS clinicians, GPs, mental-health teams and medical students. Why
          gambling belongs in{" "}
          <span className="font-bold text-gray-800">
            Making Every Contact Count
          </span>
          , the screening tools that work, and the referral pathways that exist.
        </>
      ),
      btnText: "For HCPS & MECC",
      to:"/professionals/healthcare"
    },
    {
      id: 3,
      title: "Public health organisations",
      description: (
        <>
          For OHID, ICBs, local authority public health teams and equivalents
          across Scotland, Wales and NI. The prevention paradox, the
          three-strand approach (
          <span className="italic">Connectivity, Capability, Capacity</span>),
          and how to act locally.
        </>
      ),
      btnText: "For Public Health",
      to:"/professionals/public-health"
    },
  ];

  return (
    <div className="w-full section-padding-y">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col justify-between border border-gray-300 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300 bg-white"
          >
            {/* Top Content */}
            <div>
              {/* Audience Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-[2px] bg-[#0a6b94]"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a6b94]">
                  Audience
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-[26px] font-bold text-gray-800 leading-tight mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-8">
                {card.description}
              </p>
            </div>

            {/* Bottom Button */}
            <div>
              <Link to={card.to} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0a6b94] hover:bg-[#085575] text-white font-medium text-sm rounded-lg transition-colors duration-200 group">
                {card.btnText}
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudienceCards;
