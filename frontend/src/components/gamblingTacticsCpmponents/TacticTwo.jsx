import React from "react";
import { Link } from "react-router-dom";
import phone from "@/assets/images/phone.png";

const TacticTwo = () => {
  return (
    <div
      id="tactic-2"
      className="space-y-8 scroll-mt-28 border-t border-gray-100 pt-8"
    >
      {/* Chapter Tag & Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#0093D0] uppercase tracking-widest block">
          TACTIC 2
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Advertising and sponsorship
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
          UK gambling advertising spend exceeded £1.5 billion per year by 2024. Roughly 80% is
          digital. A child watching a typical Premier League match sees around 700 gambling
          references across pitch-side, in-broadcast, sponsorship and half-time slots. The scale
          is unprecedented.
        </p>
      </div>

      {/* Sub-block: What the tactics look like */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          What the tactics look like
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">
              Front-of-shirt and stadium sponsorship.
            </strong>{" "}
            Continues to normalise gambling brands in family-viewing contexts despite voluntary
            code restrictions on broadcast slots themselves.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Affiliate marketing.</strong> A
            semi-arm's-length network of tipsters, comparison sites and content creators paid per
            signup. Operates in a regulatory grey zone.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Influencer content.</strong>{" "}
            Personality-driven gambling content on YouTube, Twitch, X and TikTok, often without
            clear disclosure that the content is sponsored. Reaches younger demographics far more
            efficiently than broadcast.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">In-play personalisation.</strong>{" "}
            Behavioural targeting of customers showing distress signals (rising stakes, late-night
            sessions, chasing losses) with cashback, free-bet offers and VIP escalation. Documented
            in operator data and Gambling Commission enforcement.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Child-themed slot games.</strong>{" "}
            <em className="italic">Jack and the Beanstalk</em>, <em className="italic">Cinderella Ball</em>,
            fairy-tale and cartoon character-themed slot products. CAP Code Rule 16.3.12 prohibits
            these. Enforcement has been weak.
          </li>
        </ul>
      </div>

      {/* Image Banner */}
      <div className="w-full overflow-hidden rounded-xl shadow-xs max-w-3xl">
        <img
          src={phone}
          alt="Golden Riches slot game interface on a smartphone"
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>

      {/* Sub-block: The "shirt sponsorship doesn't cause harm" framing */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          The "shirt sponsorship doesn't cause harm" framing
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          The voluntary industry code phased out front-of-shirt sponsorship for top-flight football
          clubs from 2026/27. The framing positioned this as a meaningful concession. Sleeve
          sponsorship, pitch-side, in-broadcast graphics and gambling-affiliate content continue.
          The actual gambling-reference exposure per match has not materially fallen. The
          concession was on the most visible surface, while every other surface continued.
        </p>
      </div>

      {/* Sub-block: The tobacco precedent */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          The tobacco precedent
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          The Tobacco Advertising and Promotion Act 2002 banned tobacco advertising and
          sponsorship across broadcast, print, sport and point-of-sale in successive waves. UK
          adult smoking prevalence fell from 27% in 2000 to 12% in 2024. The settlement worked
          because it was statutory, comprehensive across channels, and not negotiated with industry.
          We support an equivalent gambling settlement (see our{" "}
          <Link
            to="/policy-and-advocacy"
            className="text-gray-900 font-medium underline hover:text-[#0093D0] transition-colors"
          >
            policy position
          </Link>
          ).
        </p>
      </div>
    </div>
  );
};

export default TacticTwo;
