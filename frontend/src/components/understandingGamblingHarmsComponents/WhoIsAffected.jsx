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
  "Women, whose harm is rising and who face higher stigma barriers to seeking help",
  "Older adults (rarely reached by prevention or services)",
  "People in recovery from alcohol or drug dependence",
  "Veterans",
  "People from minority ethnic communities, who face additional barriers to support",
  "Children of people who gamble excessively",
];

const WhoIsAffected = () => {
  return (
    <section id="affected" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
          6. Who is affected
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed font-normal">
          Anyone can be. But the harm is not evenly distributed.
        </p>

        {/* Side-by-Side Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Column 1: Higher Risk */}
          <div className="bg-white border border-gray-200/90  p-6 md:p-8 shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Higher risk
            </h3>
            <ul className="divide-y divide-dashed divide-gray-200 text-sm sm:text-base text-gray-600 leading-relaxed">
              {higherRisk.map((text, idx) => (
                <li key={idx} className="py-3 first:pt-0 last:pb-0">
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Often Overlooked */}
          <div className="bg-white border border-gray-200/90  p-6 md:p-8 shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Often overlooked
            </h3>
            <ul className="divide-y divide-dashed divide-gray-200 text-sm sm:text-base text-gray-600 leading-relaxed">
              {oftenOverlooked.map((text, idx) => (
                <li key={idx} className="py-3 first:pt-0 last:pb-0">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Informational Subtext Link */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
          For the full picture, including people harmed by someone else’s gambling, children, and how UK
          gambling harm compares to other public-health risks, see{" "}
          <Link
            to="/burden-of-harm"
            className="text-gray-900 underline hover:text-[#17a9df] transition-colors font-semibold"
          >
            our burden-of-harm page
          </Link>
          .
        </p>

        {/* Dark Position Callout Panel */}
        <div className="bg-[#181818] border-l-[4px] border-[#17a9df] p-6 md:p-8 text-white shadow-md">
          <h4 className="text-[#17a9df] font-bold text-xs uppercase tracking-wider mb-4">
            OUR POSITION
          </h4>

          <p className="text-white font-bold text-sm sm:text-base leading-relaxed">
            Recognising higher-risk groups is necessary and should drive
            resource allocation. It is also frequently misused (by industry
            actors and by policy-makers) to imply that the rest of the
            population is safe. Both things are true: severity is concentrated
            in some groups, <span className="italic font-bold">and</span> anyone
            exposed to a relentlessly-marketed, fast-cycle gambling product can
            be harmed by it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsAffected;
