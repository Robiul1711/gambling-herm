import React from "react";
import { Link } from "react-router-dom";

const higherRisk = [
  "Men (around 70% of those experiencing severe harm)",
  "People aged 16–34",
  "People with co-occurring mental-health conditions",
  "People with experience of trauma or grief",
  "People in financial stress",
  "People in or close to the gambling industry",
  "People with family history of addiction",
];

const oftenOverlooked = [
  "Women, particularly with online slots and bingo apps",
  "Older adults (a fast-growing group)",
  "People in recovery from alcohol or drug dependence",
  "Veterans",
  "People from minority ethnic communities, who face additional barriers to support",
  "Children of people who gamble excessively",
];

const WhoIsAffected = () => {
  return (
    <section id="affected" className="py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4 tracking-tight">
          6. Who is affected
        </h2>

        {/* Subtitle */}
        <p className="text-[#4b5563] text-[15px] md:text-base mb-8 leading-relaxed">
          Anyone can be. But the harm is not evenly distributed.
        </p>

        {/* Side-by-Side Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Column 1: Higher Risk */}
          <div className="bg-white border border-gray-200/90 rounded-xl p-6 md:p-8 shadow-xs">
            <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-4">
              Higher risk
            </h3>
            <ul className="divide-y divide-dashed divide-gray-200 text-sm md:text-[14.5px] text-[#4b5563] leading-relaxed">
              {higherRisk.map((text, idx) => (
                <li key={idx} className="py-3.5 first:pt-0 last:pb-0">
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Often Overlooked */}
          <div className="bg-white border border-gray-200/90 rounded-xl p-6 md:p-8 shadow-xs">
            <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-4">
              Often overlooked
            </h3>
            <ul className="divide-y divide-dashed divide-gray-200 text-sm md:text-[14.5px] text-[#4b5563] leading-relaxed">
              {oftenOverlooked.map((text, idx) => (
                <li key={idx} className="py-3.5 first:pt-0 last:pb-0">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Informational Subtext Link */}
        <p className="text-[#4b5563] text-sm md:text-[14.5px] leading-relaxed mb-8 max-w-4xl">
          For the full picture, including affected others, children, and how UK
          gambling harm compares to other public-health risks, see{" "}
          <Link
            to="/burden-of-harm"
            className="text-[#111827] underline hover:text-[#17a9df] transition-colors font-medium"
          >
            our burden-of-harm page
          </Link>
          .
        </p>

        {/* Dark Position Callout Panel */}
        <div className="bg-[#181818] border-l-[4px] border-[#17a9df] p-6 md:p-8 text-white shadow-md max-w-5xl">
          <h4 className="text-[#17a9df] font-bold text-xs uppercase tracking-wider mb-4">
            OUR POSITION
          </h4>

          <p className="text-white font-bold text-sm md:text-[15px] leading-relaxed">
            Recognising higher-risk groups is necessary and should drive
            resource allocation. It is also frequently misused (by industry
            actors and by policy-makers) to imply that the rest of the
            population is safe. Both things are true: severity is concentrated
            in some groups, <span className="italic font-bold">and</span> anyone
            exposed to a relentlessly-marketed, fast-cycle gambling product
            can be harmed by it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsAffected;
