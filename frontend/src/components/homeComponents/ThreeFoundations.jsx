import React from "react";
import { Layers, Users, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import scaleOfHarm from "@/assets/audio/scale-of-harm.mp3";

export default function ThreeFoundations() {
  const foundations = [
    {
      icon: <Layers className="w-5 h-5 text-Primary" />,
      title: "Harm is industrially produced.",
      description:
        'Not "caused by a vulnerable few", produced, at scale, by products engineered to override the very cognitive capacities a person would need in order to make a "rational" decision about them.',
      linkText: "How The Products Work",
      to: "/understanding-gambling-harms",
    },
    {
      icon: <Users className="w-5 h-5 text-Primary" />,
      title: "People harmed by someone else’s gambling are direct victims.",
      description:
        "Partners. Parents. Children. They have no agency in the gambling that harmed them, and yet the financial, mental-health and developmental impact on them is real, large, and routinely understated.",
      linkText: "For Family & Friends",
      to: "/get-help/family-friends",
    },
    {
      icon: <LineChart className="w-5 h-5 text-Primary" />,
      title: "Prevention is upstream of treatment.",
      description:
        "Expanding treatment is necessary but nowhere near sufficient. The biggest gains come earlier, product design, marketing exposure, affordability checks, advertising restrictions, and a statutory duty of care that turns operator failure into legal consequence. Treatment is the last line, not the strategy.",
      linkText: "Our Policy Positions",
      to: "/policy-and-advocacy",
    },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Section Header Information */}
        <div className="flex flex-col space-y-4 mb-12 md:mb-16 text-left max-w-4xl">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-Primary" />
            <span className="text-Primary text-sm md:text-base font-bold tracking-wide">
              What We Believe
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-none">
            Three beliefs shape everything we do.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            They run through every page of this site, every consultation
            response, and every conversation we have with parliamentarians and
            the press.
          </p>

          {/* Voice Player Callout Card */}
          <div className="mt-6 border-l-4 border-Primary bg-[#F7F9FA] p-5 sm:p-6  rounded-l-xs max-w-2xl">
            <span className="text-[11px] font-bold text-Primary uppercase tracking-wider block mb-2">
              HEAR IT IN PLAIN TERMS · PHOENIXFM, MAY 2026
            </span>
            <h4 className="text-[14px] sm:text-base font-bold text-gray-900 leading-snug mb-4">
              John Gilham on the scale of UK gambling harm: 1.6 million adults
              in England who may benefit from treatment or support.
            </h4>
            <audio
              src={scaleOfHarm}
              controls
              className="w-full h-8 accent-Primary"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        {/* Foundations Three-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {foundations.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 p-8 bg-white flex flex-col justify-between space-y-8 shadow-sm hover:border-Primary/60 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex flex-col space-y-5">
                {/* Visual Icon Container Badge */}
                <div className="w-10 h-10 bg-[#E0F2FE] flex items-center justify-center shadow-inner">
                  {item.icon}
                </div>

                {/* Foundation Headline Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Card Main Narrative Copy */}
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Functional Dynamic Footer Context Trigger Link */}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  to={item.to}
                  className="inline-flex items-center text-sm sm:text-base font-bold text-gray-900 underline decoration-gray-300 group-hover:decoration-Primary transition-colors"
                >
                  {item.linkText}
                  <span
                    className="ml-1.5 transform transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
