import React from "react";

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
    <section
      id="all-around-us"
      className="max-w-7xl mx-auto px-4 pb-8 md:pb-16"
    >
      {/* Top Accent Line */}
      <div className="w-12 h-[3px] bg-Primary2 mb-6"></div>

      {/* Main Title */}
      <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-6 tracking-tight">
        5. It's all around us
      </h2>

      {/* Intro Paragraph */}
      <p className="text-[#2d2d2d] text-sm md:text-[17px] leading-7 md:leading-8 mb-8 md:mb-10">
        If you watch a Premier League match, listen to a sports radio show,
        scroll TikTok, or take public transport, you are being marketed to by
        the gambling industry. The volume and creativity of this marketing is
        one of the most significant public-health developments of the last
        fifteen years.
      </p>

      {/* Subtitle */}
      <h3 className="text-lg md:text-xl font-bold text-[#2d2d2d] mb-6">
        What the exposure looks like
      </h3>

      {/* Exposure List */}
      <div className="divide-y divide-dashed divide-gray-200 border-b border-dashed border-gray-200 mb-8">
        {exposureItems.map((item, index) => (
          <div
            key={index}
            className="py-4 md:py-5 text-sm md:text-[15px] leading-7 "
          >
            <strong className="text-[#2d2d2d] font-semibold">
              {item.title}{" "}
            </strong>
            <span className="text-[#687076]">{item.description}</span>
          </div>
        ))}
      </div>

      {/* Summary Narrative */}
      <p className="text-[#687076] text-sm md:text-[15px] leading-7 max-w-4xl mb-10 md:mb-12">
        This matters not because any single advert causes harm, but because the
        population-level effect of constant exposure is to normalise gambling,
        particularly in sport, and to recruit new users, disproportionately from
        groups already at higher risk.
      </p>

      {/* Our Position Callout Card */}
      <div className="bg-[#262222] rounded-2xl overflow-hidden shadow-xl border-l-[6px] border-Primary2">
        <div className="p-6 md:p-10">
          <h4 className="text-Primary2 text-sm font-semibold uppercase tracking-wider mb-5">
            Our position
          </h4>

          <p className="text-gray-300 text-sm md:text-[15px] leading-7 mb-6 max-w-4xl">
            A statutory ban on gambling sponsorship in sport and broadcast
            (comparable in scope to the tobacco-advertising restrictions phased
            in after 2002) should be the central plank of the next UK gambling
            regulatory settlement.
          </p>

          <a
            href="#advertising-restriction-policy"
            className="inline-flex items-center text-Primary2 hover:text-[#1493c2] text-[15px] font-medium transition-colors"
          >
            See Our Full Advertising-Restriction Policy &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default ItsAllAroundUs;
