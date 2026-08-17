import React from "react";
import { Link } from "react-router-dom";

const exposureItems = [
  {
    title: "Shirt sponsorship.",
    description:
      "Roughly half of UK Premier League and Championship clubs have a primary shirt sponsor in the gambling industry at any given time.",
  },
  {
    title: "In-broadcast advertising.",
    description:
      "Football matches typically contain dozens of in-game gambling references, pitch-side hoardings, pundit-led odds segments, half-time ad breaks.",
  },
  {
    title: "Influencer and gamblified content.",
    description:
      "Casino streamers on Twitch, YouTube and TikTok regularly reach under-18s, often through content not formally categorised as gambling advertising.",
  },
  {
    title: "Loot boxes and gambling-like mechanics in games.",
    description:
      "Many of the products children spend the most time with contain mechanics that closely mirror gambling, but are not currently regulated as gambling.",
  },
  {
    title: "Direct marketing.",
    description:
      'Personalised, behaviour-triggered offers ("we miss you, here\'s a free bet") sent to lapsing customers, including those who appear to be in distress.',
  },
];

const ItsAllAroundUs = () => {
  return (
    <section id="all-around-us" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
          5. It's all around us
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">
          If you watch a Premier League match, listen to a sports radio show,
          scroll TikTok, or take public transport, you are being marketed to by
          the gambling industry. The volume and creativity of this marketing is
          one of the most significant public-health developments of the last
          fifteen years.
        </p>

        {/* Sub Heading */}
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
          What the exposure looks like
        </h3>

        {/* Exposure List */}
        <div className="divide-y divide-dashed divide-gray-200 border-t border-b border-dashed border-gray-200 mb-8">
          {exposureItems.map((item, index) => (
            <div
              key={index}
              className="py-4 md:py-5 text-sm sm:text-base leading-relaxed text-gray-600"
            >
              <strong className="font-bold text-gray-900">{item.title}</strong>{" "}
              {item.description}
            </div>
          ))}
        </div>

        {/* Summary Narrative */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-10">
          This matters not because any single advert causes harm, but because the
          population-level effect of constant exposure is to normalise gambling,
          particularly in sport, and to recruit new users, disproportionately from
          groups already at higher risk.
        </p>

        {/* Our Position Callout Card */}
        <div className="bg-[#181818] border-l-[4px] border-[#17a9df] p-6 md:p-8 text-white shadow-md">
          <h4 className="text-[#17a9df] font-bold text-xs uppercase tracking-wider mb-4">
            OUR POSITION
          </h4>

          <p className="text-white font-bold text-sm sm:text-base leading-relaxed">
            A statutory ban on gambling sponsorship in sport and broadcast
            (comparable in scope to the tobacco-advertising restrictions phased in
            after 2002) should be the central plank of the next UK gambling
            regulatory settlement. See our full{" "}
            <Link
              to="/policy-and-advocacy"
              className="underline text-[#17a9df] hover:text-[#17a9df]/80 font-bold transition-colors"
            >
              advertising-restriction policy &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ItsAllAroundUs;
