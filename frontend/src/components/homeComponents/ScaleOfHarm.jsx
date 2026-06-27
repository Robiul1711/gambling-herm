import React from "react";
import { Link } from "react-router-dom";

export default function ScaleOfHarm() {
  const stats = [
    {
      metric: "14.5%",
      description:
        "of UK adults experienced harm from their own gambling in the past year (PGSI 1+ combined). The widely-quoted 0.4% headline figure is the PGSI 8+ tail, one of the narrowest harm definitions used in any addiction field.",
      source: "GHUK modelling, GSGB 2023–24 base",
    },
    {
      metric: "~8%",
      description:
        "of UK adults report being harmed by someone else's gambling (YouGov, 2024), roughly the same scale of population harm as the people who gamble themselves. ~42% of British children are estimated to live in a household affected.",
      source: "GambleAware / YouGov 2024 · GSGB 2023–24",
    },
    {
      metric: "£4.1–6.1bn",
      description:
        "in annual UK health losses (QALYs monetised at NICE thresholds, conservative scenario). That is 40–60× the current £100m statutory levy. Total economic burden is likely several times higher.",
      source: "GHUK APPG submission, 25 February 2026",
    },
  ];

  return (
    <section className="w-full bg-[#2A2828] text-white py-10 md:py-16">
      <div className="section-padding-x flex flex-col items-center text-center">
        {/* Top Accent Subheading */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="w-6 h-[2px] bg-[#1A759F]" />
          <span className="text-[#1A759F] text-sm md:text-base font-bold tracking-wide">
            The Scale Of Harm
          </span>
        </div>

        {/* Main Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
          Bigger Than It Looks. Broader Than It Sounds.
        </h2>

        {/* Informative Subtext */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-12 font-medium">
          The figures most often cited about gambling harm in the UK are the
          ones the gambling industry is most comfortable with. These are the
          ones the public-health evidence supports.
        </p>

        {/* Three-Column Statistics Cards Layout Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 text-left">
          {stats.map((item, index) => (
            <div
              key={index}
              className="border border-gray-600/50 rounded-2xl p-6 sm:p-8 bg-transparent flex flex-col justify-between space-y-6 hover:border-gray-400 transition-colors duration-200"
            >
              <div className="space-y-4">
                {/* Metric Display */}
                <span className="block text-4xl sm:text-5xl font-black text-white tracking-tight">
                  {item.metric}
                </span>
                {/* Main Metric Explainer */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Data Citation Source Attribution */}
              <span className="block text-xs sm:text-sm text-gray-400 italic font-medium pt-2 border-t border-gray-700/50">
                {item.source}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Comparative Footer Link */}
        <Link
          to="/professionals/healthcare"
          className="inline-flex items-center text-sm sm:text-base font-bold text-white underline decoration-gray-400 hover:decoration-white transition-all group"
        >
          See How This Compares To Other Public-Health Risks
          <span
            className="ml-1.5 transform transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
