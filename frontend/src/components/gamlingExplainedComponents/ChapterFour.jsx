import React from "react";
import { Link } from "react-router-dom";

const ChapterFour = () => {
  return (
    <div
      id="advertising"
      className="space-y-8 scroll-mt-28 border-t border-gray-100 pt-8"
    >
      {/* Chapter Label & Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#0093D0] uppercase tracking-widest block">
          CHAPTER 4
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Gambling and advertising
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
          The volume, ubiquity and behavioural personalisation of UK gambling advertising are
          without precedent. The structural case for restriction is the tobacco precedent.
        </p>
      </div>

      {/* Sub-block: Scale */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Scale
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li className="leading-relaxed">
            UK gambling marketing spend exceeded{" "}
            <strong className="font-bold text-gray-900">£1.5 billion per year</strong> across direct
            advertising, sponsorship, affiliate marketing and content. Roughly 80% of this is digital,
            where personalisation is most aggressive.
          </li>
          <li className="leading-relaxed">
            A child watching a typical Premier League broadcast sees around{" "}
            <strong className="font-bold text-gray-900">700 gambling references per match</strong> from
            pitch-side hoardings, in-broadcast graphics, half-time slots, and front-of-shirt
            sponsorship.
          </li>
          <li className="leading-relaxed">
            Personalised in-play marketing to customers showing distress signals (rising stakes,
            late-night sessions, chasing losses) is documented and continues despite operator codes
            saying otherwise.
          </li>
        </ul>
      </div>

      {/* Sub-block: The "freedom to gamble" frame fails on people harmed by someone else’s gambling */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          The "freedom to gamble" frame fails on people harmed by someone else’s gambling
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          The standard industry defence rests on consumer choice. The argument is confounded
          by harm to people who are not making the choice. Children, partners, parents, siblings
          and creditors do not consent to the gambling that harms them. Advertising restriction
          is not a restriction on the freedom of the person who gambles. It is a restriction on the
          industry's reach into people who are not gambling.
        </p>
      </div>

      {/* Sub-block: The tobacco parallel */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          The tobacco parallel
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          The post-2002 UK tobacco settlement (Tobacco Advertising and Promotion Act 2002)
          banned point-of-sale displays, broadcast and print advertising, and sponsorship in
          successive waves. UK adult smoking prevalence fell from 27% in 2000 to 12% in 2024.
          The settlement worked because it was statutory, comprehensive across channels, and
          not negotiated with industry. We support an equivalent gambling settlement (see our{" "}
          <Link
            to="/policy-and-advocacy"
            className="text-gray-900 font-medium underline hover:text-[#0093D0] transition-colors"
          >
            policy position
          </Link>
          ).
        </p>
      </div>

      {/* Sub-block: CAP Code Rule 16.3.12 */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          CAP Code Rule 16.3.12
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Existing UK code prohibits non-broadcast gambling advertising with strong appeal to
          children. The rule has been on the books since 2014. Enforcement has lagged. Child-
          themed slot games (<em className="italic">Jack and the Beanstalk</em>,{" "}
          <em className="italic">Cinderella Ball</em>, etc.) continue to circulate.
          GHUK supports both retention of 16.3.12 and active enforcement against operators
          producing or promoting such content.
        </p>
      </div>
    </div>
  );
};

export default ChapterFour;