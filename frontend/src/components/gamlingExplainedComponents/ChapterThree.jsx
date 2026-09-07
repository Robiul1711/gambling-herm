import React from "react";
import { Link } from "react-router-dom";

const ChapterThree = () => {
  return (
    <div
      id="children-young"
      className="space-y-8 scroll-mt-28 border-t border-gray-100 pt-8"
    >
      {/* Chapter Label & Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#0093D0] uppercase tracking-widest block">
          CHAPTER 3
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Gambling in children and young people
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
          Brain regions responsible for impulse control and reward valuation are not mature
          until around age 25. The earlier gambling exposure starts, the higher the lifetime
          risk. UK 11-16 year-olds are showing population-level gambling harm before they can
          legally gamble.
        </p>
      </div>

      {/* Sub-block: What we know */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          What we know
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li className="leading-relaxed">
            The Gambling Commission's Young People &amp; Gambling 2025 survey found{" "}
            <strong className="font-bold text-gray-900">3.4% of 11–17 year-olds</strong> in
            Great Britain (around 200,000 children on the UK child population) scored 2 or
            more on the DSM-IV-MR-J screen, indicating gambling-related harm or behavioural
            difficulty in the past year;{" "}
            <strong className="font-bold text-gray-900">1.2% (around 71,000)</strong> at the
            highest-severity threshold (YP&amp;G 2025).
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">29% of 11–17 year-olds</strong> have seen
            a family member they live with gamble; among them, 12% report losing sleep due to
            worry and 7% report increased arguments or tension at home (Gambling Commission,
            2025).
          </li>
          <li className="leading-relaxed">
            Exposure to gambling advertising during family-viewing sport is essentially universal.
            CAP Code Rule 16.3.12 prohibits "strong appeal to children" in gambling ads,
            including child-themed slot games like <em className="italic">Jack and the Beanstalk</em>{" "}
            and <em className="italic">Cinderella Ball</em>. Enforcement has been weak.
          </li>
          <li className="leading-relaxed">
            Loot boxes, social-casino games and casino-mechanic mobile games sit outside the
            Gambling Act 2005 definition of gambling but use the same psychological
            architecture and reach minors at scale.
          </li>
        </ul>
      </div>

      {/* Sub-block: Children harmed by someone else’s gambling */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Children harmed by someone else's gambling
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          OHID modelling estimates that{" "}
          <strong className="font-bold text-gray-900">
            around 912,805 children in England live with an adult whose gambling may need treatment or support
          </strong>{" "}
          (OHID, 2023); GambleAware household modelling (YouGov, 2024) suggests a wider affected
          group still, which we cite only as an upper bound. The harm pattern includes financial
          deprivation, parentification (a child taking on adult emotional or financial
          responsibility), academic disruption, sleep disturbance, intergenerational gambling,
          and elevated risk of gambling harm in adolescence and early adulthood.
        </p>
      </div>

      {/* Sub-block: What we want changed */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          What we want changed
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li className="leading-relaxed">
            Bring loot boxes and gambling-like mechanics within the Gambling Commission's scope.
          </li>
          <li className="leading-relaxed">
            Treat under-25 gambling exposure as a distinct policy issue, with a brain-development-aware risk framework.
          </li>
          <li className="leading-relaxed">
            Statutory recognition of children of people who gamble excessively as a population entitled to funded support in their own right (see our{" "}
            <Link
              to="/policy-and-advocacy"
              className="text-gray-900 font-medium underline hover:text-[#0093D0] transition-colors"
            >
              Policy positions
            </Link>
            ).
          </li>
          <li className="leading-relaxed">
            Robust enforcement of CAP Code 16.3.12 against child-themed slot content.
          </li>
        </ul>
      </div>

      {/* Action Link */}
      <div className="pt-2">
        <Link
          to="/understanding-gambling-harms"
          className="text-[#0093D0] font-medium text-sm md:text-base underline hover:text-[#0076A8] transition-colors inline-flex items-center gap-1"
        >
          Full CYP page with safeguarding routes &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ChapterThree;