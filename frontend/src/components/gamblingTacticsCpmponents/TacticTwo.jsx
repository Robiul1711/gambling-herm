import React from "react";
import phone from "@/assets/images/phone.png";
const TacticTwo = () => {
  return (
    <div
      id="tactic-2"
      className="space-y-8 scroll-mt-6 border-t border-slate-100 pt-8"
    >
      {/* Chapter Title & Main Summary */}
      <div className="space-y-2">
        <span className="text-Primary font-medium text-sm md:text-base">
          Tactic 2
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Advertising and sponsorship
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
          UK gambling advertising spend exceeded £1.5 billion per year by 2024.
          Roughly 80% is digital. A child watching a typical Premier League
          match sees around 700 gambling references across pitch-side,
          in-broadcast, sponsorship and half-time slots. The scale is
          unprecedented.
        </p>
      </div>

      {/* Sub-block: What the tactics look like */}
      <div className="bg-slate-50 rounded-2xl p-6 md:p-8 space-y-4 border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800">
          What the tactics look like
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300">
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">
              Front-Of-Shirt And Stadium Sponsorship.
            </span>{" "}
            Continues to normalise gambling brands in family-viewing contexts
            despite voluntary code restrictions on broadcast slots themselves.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">
              Affiliate Marketing.
            </span>{" "}
            A semi-arm's-length network of tipsters, comparison sites and
            content creators paid per signup. Operates in a regulatory grey
            zone.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">
              Influencer Content.
            </span>{" "}
            Personality-driven gambling content on YouTube, Twitch, X and
            TikTok, often without clear disclosure that the content is
            sponsored. Reaches younger demographics far more efficiently than
            broadcast.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">
              In-Play Personalisation.
            </span>{" "}
            Behavioural targeting of customers showing distress signals (rising
            stakes, late-night sessions, chasing losses) with cashback, free-bet
            offers and VIP escalation. Documented in operator data and Gambling
            Commission enforcement.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">
              Child-Themed Slot Games.
            </span>{" "}
            <span className="italic">
              Jack and the Beanstalk, Cinderella Ball
            </span>
            , fairy-tale and cartoon character-themed slot products. CAP Code
            Rule 16.3.12 prohibits these. Enforcement has been weak.
          </li>
        </ul>
      </div>

      {/* Campaign Feature / Media Section */}
      <div className="space-y-3">
        <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm bg-slate-100 aspect-video w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={phone}
            alt="Slot game interface on a smartphone device"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xs md:text-sm text-slate-400 italic leading-relaxed max-w-2xl">
          Still from GHUK's Mother and Daughter safeguarding film — a "Golden
          Riches" cartoon-styled slot game on a phone. The aesthetic is built to
          appeal to children.
        </p>
      </div>

      {/* Sub-block: Framing and Counter Arguments */}
      <div className="space-y-3 max-w-4xl">
        <h3 className="text-lg font-bold text-slate-800">
          The "shirt sponsorship doesn't cause harm" framing
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          The voluntary industry code phased out front-of-shirt sponsorship for
          top-flight football clubs from 2026/27. The framing positioned this as
          a meaningful concession. Sleeve sponsorship, pitch-side, in-broadcast
          graphics and gambling-affiliate content continue. The actual
          gambling-reference exposure per match has not materially fallen. The
          concession was on the most visible surface, while every other surface
          continued.
        </p>
      </div>

      {/* Sub-block: The tobacco precedent */}
      <div className="space-y-3 max-w-4xl">
        <h3 className="text-lg font-bold text-slate-800">
          The tobacco precedent
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          The Tobacco Advertising and Promotion Act 2002 banned tobacco
          advertising and sponsorship across broadcast, print, sport and
          point-of-sale in successive waves. UK adult smoking prevalence fell
          from 27% in 2000 to 12% in 2024. The settlement worked because it was
          statutory, comprehensive across channels, and not negotiated with
          industry. We support an equivalent gambling settlement{" "}
          <a
            href="#"
            className="text-Primary font-medium underline hover:text-opacity-80 transition-colors"
          >
            (see our policy position)
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TacticTwo;
