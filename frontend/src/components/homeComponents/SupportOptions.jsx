import React from "react";

export default function SupportOptions() {
  const cards = [
    {
      label: "WHAT WE DO",
      description:
        "Prevention at every level: education, research and advocacy, shaped and delivered by Experts by Experience. We connect people to trusted specialist support; we do not provide treatment ourselves.",
    },
    {
      label: "HOW CHANGE HAPPENS",
      description:
        "Upstream action on products, marketing, availability and affordability, driven by independent evidence, a statutory levy proportionate to harm, and regulation with population health as its primary objective.",
    },
    {
      label: "WHAT SUCCESS LOOKS LIKE",
      description:
        "Fewer people harmed in the first place, people harmed by someone else’s gambling recognised and supported, and gambling treated like the commercial determinant of health it is, alongside tobacco and alcohol.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="flex flex-col space-y-4 mb-12 md:mb-16 text-left">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-Primary" />
            <span className="text-Primary text-sm font-bold tracking-wide uppercase">
              WHY WE EXIST
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-950 tracking-tight leading-tight">
            A public health problem needs a whole-system answer.
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl font-normal">
            Gambling harm is not inevitable. It can be prevented. We work across
            the whole prevention spectrum: stopping harm before it starts,
            catching it early, and reducing its damage for those already
            affected. GHUK exists because gambling harm is industrially produced
            and publicly neglected, and because the people who understand it
            best, Experts by Experience, have been missing from the response.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-gray-200/80  p-8 sm:p-10 bg-white flex flex-col justify-start transition-all duration-300 shadow-xs hover:border-Primary/30 hover:shadow-sm"
            >
              {/* Tagline */}
              <div className="flex items-start gap-3 mb-6">
                <span className="w-6 h-[2px] bg-Primary mt-2 shrink-0" />
                <span className="text-Primary text-[13px] sm:text-sm font-bold tracking-widest uppercase leading-snug">
                  {card.label}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
