import React from "react";

const PlatformControlsSection = () => {
  const items = [
    {
      title: "Ad preferences and sensitive topics.",
      text: "Look in your account's privacy or ad settings for something called \"ad preferences\", \"ad topics\" or \"sensitive topics\". Most major platforms let you exclude gambling from the topics you're shown ads about.",
    },
    {
      title: "Mute and block.",
      text: "Mute or block gambling and betting accounts directly, and mute keywords such as \"odds\", \"bet\" or specific operator names where the platform supports keyword muting.",
    },
    {
      title: "Personalised advertising.",
      text: "Where a personalised-advertising toggle exists, turning it off reduces how closely ads are targeted at you, though it won't stop gambling advertising appearing altogether.",
    },
  ];

  return (
    <section id="platform-level-controls" className="scroll-mt-24 w-full py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
          Platform-level controls
        </h2>

        {/* Intro */}
        <p className="text-[15px] sm:text-base text-gray-700 leading-relaxed  mb-8">
          Most major social and search platforms give you some control over the ads and content you see, even if the settings are worded differently from one to the next.
        </p>

        {/* Structured Items */}
        <div className=" divide-y divide-dashed divide-gray-200">
          {items.map((item, idx) => (
            <div key={idx} className="py-4 first:pt-0 last:pb-0">
              <p className="text-[14px] sm:text-[15px] text-gray-700 leading-relaxed">
                <strong className="font-bold text-gray-900">{item.title}</strong>{" "}
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformControlsSection;
